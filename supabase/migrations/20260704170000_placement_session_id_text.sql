-- placement_session_id must be text: app session ids are strings like
-- "fr-{timestamp}-{random}", not PostgreSQL UUIDs.

ALTER TABLE public.expression_submissions
  ALTER COLUMN placement_session_id TYPE text
  USING placement_session_id::text;

COMMENT ON COLUMN public.expression_submissions.placement_session_id IS
  'Links PE/PO submissions to a French placement session (string id, e.g. fr-...).';
