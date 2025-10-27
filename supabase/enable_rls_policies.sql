-- Enable RLS policies for public read access to practitioners and specialties tables

-- Policy for practitioners table - allow public read access
CREATE POLICY "Enable read access for all users" ON public.practitioners
FOR SELECT USING (true);

-- Policy for specialties table - allow public read access
CREATE POLICY "Enable read access for all users" ON public.specialties
FOR SELECT USING (true);

-- If you have other tables that need public access, add them here:
-- Example:
-- CREATE POLICY "Enable read access for all users" ON public.your_table_name
-- FOR SELECT USING (true);
