import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Trash2, Upload, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MAX_PHOTOS = 15;

const GalleryAdmin = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const { data: images = [], isLoading } = useQuery({
    queryKey: ["gallery-images"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (image: { id: string; image_url: string }) => {
      // Extract file path from URL
      const url = new URL(image.image_url);
      const pathParts = url.pathname.split("/storage/v1/object/public/gallery/");
      if (pathParts[1]) {
        await supabase.storage.from("gallery").remove([pathParts[1]]);
      }
      const { error } = await supabase.from("gallery_images").delete().eq("id", image.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery-images"] });
      toast.success("Photo deleted");
    },
    onError: () => toast.error("Failed to delete photo"),
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remaining = MAX_PHOTOS - images.length;
    if (remaining <= 0) {
      toast.error(`Maximum ${MAX_PHOTOS} photos allowed`);
      return;
    }

    const filesToUpload = Array.from(files).slice(0, remaining);
    if (filesToUpload.length < files.length) {
      toast.info(`Only uploading ${filesToUpload.length} of ${files.length} photos (max ${MAX_PHOTOS})`);
    }

    setUploading(true);
    try {
      for (const file of filesToUpload) {
        const ext = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from("gallery")
          .upload(fileName, file);
        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("gallery")
          .getPublicUrl(fileName);

        const { error: dbError } = await supabase.from("gallery_images").insert({
          image_url: urlData.publicUrl,
          alt_text: file.name.replace(/\.[^/.]+$/, ""),
          display_order: images.length + filesToUpload.indexOf(file),
        });
        if (dbError) throw dbError;
      }

      queryClient.invalidateQueries({ queryKey: ["gallery-images"] });
      toast.success(`${filesToUpload.length} photo(s) uploaded!`);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Gallery Manager</h1>
          <span className="text-sm text-muted-foreground ml-auto">
            {images.length} / {MAX_PHOTOS} photos
          </span>
        </div>

        {/* Upload area */}
        <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center mb-8">
          <ImageIcon className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">
            {images.length >= MAX_PHOTOS
              ? "Maximum photos reached. Delete some to add more."
              : "Upload your photos (max 15 total)"}
          </p>
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            disabled={uploading || images.length >= MAX_PHOTOS}
            className="hidden"
            id="gallery-upload"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || images.length >= MAX_PHOTOS}
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? "Uploading..." : "Choose Photos"}
          </Button>
        </div>

        {/* Image grid */}
        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : images.length === 0 ? (
          <p className="text-center text-muted-foreground">No photos yet. Upload some above!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={image.image_url}
                  alt={image.alt_text}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => deleteMutation.mutate({ id: image.id, image_url: image.image_url })}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryAdmin;
