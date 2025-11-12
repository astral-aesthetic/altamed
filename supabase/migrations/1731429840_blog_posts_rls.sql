-- Enable RLS policies for blog_posts table

-- Allow anyone to read published blog posts
CREATE POLICY "Enable read access for published blog posts" ON public.blog_posts
FOR SELECT USING (is_published = true);

-- Allow service role to insert blog posts
CREATE POLICY "Allow service role to insert blog posts" ON public.blog_posts
FOR INSERT WITH CHECK (true);

-- Allow service role to update blog posts
CREATE POLICY "Allow service role to update blog posts" ON public.blog_posts
FOR UPDATE USING (true);

-- Allow service role to delete blog posts
CREATE POLICY "Allow service role to delete blog posts" ON public.blog_posts
FOR DELETE USING (true);
