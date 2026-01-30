-- Enable RLS explicitly (ensure it's tracked in migrations)
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Add length constraints via triggers (not CHECK constraints for flexibility)
CREATE OR REPLACE FUNCTION public.validate_contact_request()
RETURNS TRIGGER AS $$
BEGIN
  -- Validate name length
  IF char_length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Name must be 100 characters or less';
  END IF;
  
  -- Validate email length
  IF char_length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be 255 characters or less';
  END IF;
  
  -- Validate company length
  IF NEW.company IS NOT NULL AND char_length(NEW.company) > 200 THEN
    RAISE EXCEPTION 'Company name must be 200 characters or less';
  END IF;
  
  -- Validate phone length
  IF NEW.phone IS NOT NULL AND char_length(NEW.phone) > 30 THEN
    RAISE EXCEPTION 'Phone must be 30 characters or less';
  END IF;
  
  -- Validate service length
  IF NEW.service IS NOT NULL AND char_length(NEW.service) > 100 THEN
    RAISE EXCEPTION 'Service must be 100 characters or less';
  END IF;
  
  -- Validate message length
  IF NEW.message IS NOT NULL AND char_length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Message must be 2000 characters or less';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for validation
DROP TRIGGER IF EXISTS validate_contact_request_trigger ON public.contact_requests;
CREATE TRIGGER validate_contact_request_trigger
  BEFORE INSERT OR UPDATE ON public.contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_contact_request();

-- Add comment for documentation
COMMENT ON TABLE public.contact_requests IS 
  'Contact form submissions. RLS enforces: no reads (admin dashboard only), public writes (with reCAPTCHA), no updates/deletes.';