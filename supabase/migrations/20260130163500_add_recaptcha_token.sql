-- Add recaptcha_token column to contact_requests table
ALTER TABLE public.contact_requests 
ADD COLUMN IF NOT EXISTS recaptcha_token text;
