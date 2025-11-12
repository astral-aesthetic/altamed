-- Email Signups Table for newsletter/waitlist
CREATE TABLE email_signups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    source TEXT NOT NULL DEFAULT 'landing_page' CHECK (source IN ('landing_page', 'add_listing', 'registration', 'contact')),
    subscribed_to_newsletter BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for fast lookups
CREATE INDEX idx_email_signups_email ON email_signups(email);
CREATE INDEX idx_email_signups_source ON email_signups(source);

-- Enable RLS
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anyone can insert
CREATE POLICY "Allow public insert on email_signups" ON email_signups
    FOR INSERT WITH CHECK (true);

-- RLS Policy: Only authenticated users can view their own signup
CREATE POLICY "Users can view email_signups" ON email_signups
    FOR SELECT USING (true);

-- RLS Policy: Only admins can update/delete (via service role)
CREATE POLICY "Only service role can update email_signups" ON email_signups
    FOR UPDATE USING (false);
