-- Deny direct SELECT access to contact_requests table
-- Data should only be accessed via Supabase Dashboard by administrators
CREATE POLICY "No direct read access to contact requests"
ON public.contact_requests
FOR SELECT
USING (false);