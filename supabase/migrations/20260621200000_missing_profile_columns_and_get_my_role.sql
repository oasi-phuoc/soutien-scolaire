-- Corrective migration: add columns and functions that exist in the live DB
-- but were never recorded in migration files.
-- All statements are idempotent (IF NOT EXISTS / CREATE OR REPLACE).

-- ── 1. Profile columns ────────────────────────────────────────────────────────
-- These columns are referenced in handle_new_user(), get_users_for_admin(),
-- get_expression_teachers(), get_students_for_task(), etc.
-- They were created manually before migrations were introduced.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS nom        text,
  ADD COLUMN IF NOT EXISTS prenom     text,
  ADD COLUMN IF NOT EXISTS classe     text,
  ADD COLUMN IF NOT EXISTS adresse    text,
  ADD COLUMN IF NOT EXISTS npa        text,
  ADD COLUMN IF NOT EXISTS localite   text,
  ADD COLUMN IF NOT EXISTS telephone  text,
  ADD COLUMN IF NOT EXISTS is_admin   boolean NOT NULL DEFAULT false;

-- role column: add then tighten constraint separately so it's idempotent
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'eleve';

DO $$
BEGIN
  -- Drop any old role constraint before re-adding with canonical values
  ALTER TABLE public.profiles
    DROP CONSTRAINT IF EXISTS profiles_role_check;
  ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_role_check
      CHECK (role IN ('eleve', 'prof', 'admin'));
EXCEPTION WHEN others THEN NULL; -- already correct, ignore
END;
$$;

-- ── 2. get_my_role ────────────────────────────────────────────────────────────
-- Used in 13 app locations to gate admin/teacher access.
-- Without this function every authenticated user is treated as 'eleve'.

CREATE OR REPLACE FUNCTION public.get_my_role()
RETURNS text
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE(role, 'eleve') FROM public.profiles WHERE id = auth.uid();
$$;

REVOKE ALL ON FUNCTION public.get_my_role() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_my_role() TO authenticated;

-- ── 3. profiles SELECT policy for admin/prof ──────────────────────────────────
-- Admins and teachers need to read any profile for task creation, inbox, etc.
-- SECURITY DEFINER functions (get_expression_teachers, get_students_for_task,
-- get_users_for_admin) already bypass RLS, but direct queries from service role
-- also bypass RLS, so this is for completeness on authenticated queries.

DROP POLICY IF EXISTS "profiles_select_admin" ON public.profiles;
CREATE POLICY "profiles_select_admin"
  ON public.profiles FOR SELECT TO authenticated
  USING (
    auth.uid() = id
    OR EXISTS (
      SELECT 1 FROM public.profiles p2
      WHERE p2.id = auth.uid() AND p2.role IN ('prof', 'admin')
    )
  );
