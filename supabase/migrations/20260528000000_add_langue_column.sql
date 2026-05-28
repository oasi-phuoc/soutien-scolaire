-- Add langue column to profiles (spoken language of the user)
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS langue TEXT NOT NULL DEFAULT 'en';

-- Update trigger to copy langue from signup metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, nom, prenom, classe,
    adresse, npa, localite, telephone, langue
  ) VALUES (
    new.id,
    new.raw_user_meta_data->>'nom',
    new.raw_user_meta_data->>'prenom',
    new.raw_user_meta_data->>'classe',
    new.raw_user_meta_data->>'adresse',
    new.raw_user_meta_data->>'npa',
    new.raw_user_meta_data->>'localite',
    new.raw_user_meta_data->>'telephone',
    COALESCE(new.raw_user_meta_data->>'langue', 'en')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

-- Update get_users_for_admin to also return langue.
-- Re-run your full get_users_for_admin definition and add:
--   p.langue,
-- to the SELECT list and:
--   langue text,
-- to the RETURNS TABLE block.
--
-- Minimal patch if you prefer:
-- (no SQL needed if you recreate the function manually in the Supabase editor)
