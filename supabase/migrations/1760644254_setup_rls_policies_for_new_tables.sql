-- Migration: setup_rls_policies_for_new_tables
-- Created at: 1760644254

-- Enable RLS on all new tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_submissions ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User favorites policies
CREATE POLICY "Users can view their own favorites"
  ON user_favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites"
  ON user_favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON user_favorites FOR DELETE
  USING (auth.uid() = user_id);

-- Blog posts policies (public read, authenticated write)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Blog tags policies (public read)
CREATE POLICY "Anyone can view blog tags"
  ON blog_tags FOR SELECT
  USING (true);

-- Provider submissions policies
CREATE POLICY "Users can view their own submissions"
  ON provider_submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create submissions"
  ON provider_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Update practitioners table to allow public read
ALTER TABLE practitioners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved practitioners"
  ON practitioners FOR SELECT
  USING (true);;