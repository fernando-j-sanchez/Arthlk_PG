-- Insert demo creators (these will be your admin/creator accounts)
-- Note: You'll need to create these users through the signup flow first
-- This script just sets up the creator profiles structure

-- Create some demo albums for testing
-- Replace the creator_id with actual UUIDs after creating creator accounts
INSERT INTO public.albums (title, description, thumbnail_url, posts_count)
VALUES 
  ('Maw Collection', '4 Albums', '/placeholder.svg?height=100&width=100', 4),
  ('Eze Gallery', '4 Albums', '/placeholder.svg?height=100&width=100', 4),
  ('Dilan Exclusive', '4 Albums', '/placeholder.svg?height=100&width=100', 4),
  ('Lau Premium', '4 Albums', '/placeholder.svg?height=100&width=100', 4)
ON CONFLICT DO NOTHING;
