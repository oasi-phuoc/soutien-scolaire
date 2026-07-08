-- Repair: run this in Supabase SQL Editor if platform_features RPCs failed with
-- "cannot change return type of existing function" (42P13).
-- Safe to re-run. Then apply the full migration or only the CREATE FUNCTION block.

DROP FUNCTION IF EXISTS public.get_teacher_tasks() CASCADE;
DROP FUNCTION IF EXISTS public.get_my_tasks() CASCADE;
DROP FUNCTION IF EXISTS public.get_class_dashboard(text) CASCADE;
DROP FUNCTION IF EXISTS public.get_school_classes() CASCADE;
