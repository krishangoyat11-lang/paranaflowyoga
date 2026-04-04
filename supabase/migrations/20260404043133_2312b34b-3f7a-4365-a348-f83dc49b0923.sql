
-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view gallery images
CREATE POLICY "Gallery images are viewable by everyone"
ON public.gallery_images FOR SELECT
USING (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Anyone can view gallery images in storage
CREATE POLICY "Gallery images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery');

-- Allow anonymous uploads to gallery bucket (owner manages via admin page)
CREATE POLICY "Allow gallery uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery');

-- Allow deletes from gallery bucket
CREATE POLICY "Allow gallery deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'gallery');
