import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data: galleryImages = [] } = useQuery({
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

  const closeImage = () => setSelectedIndex(null);
  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  if (galleryImages.length === 0) return null;

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">Gallery</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            Moments from My Journey
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A glimpse into my yoga practice, teaching sessions, and achievements
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img src={image.image_url} alt={image.alt_text} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-sm border-none">
          {selectedIndex !== null && (
            <div className="relative">
              <img src={galleryImages[selectedIndex].image_url} alt={galleryImages[selectedIndex].alt_text} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors" aria-label="Previous image">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors" aria-label="Next image">
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-center text-sm text-muted-foreground mt-2 pb-4">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
