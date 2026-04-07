import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
    <section id="gallery" className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gold/5" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Gallery</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream text-balance">
            Moments from My Journey
          </h2>
          <p className="text-cream/60 text-lg mt-4 max-w-2xl mx-auto">
            A glimpse into my yoga practice, teaching sessions, and achievements
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-surface"
            >
              <img
                src={image.image_url}
                alt={image.alt_text}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-dark-surface/98 backdrop-blur-xl border border-gold/20 shadow-2xl">
          {selectedIndex !== null && (
            <div className="relative p-2">
              <img
                src={galleryImages[selectedIndex].image_url}
                alt={galleryImages[selectedIndex].alt_text}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-surface/80 hover:bg-gold/20 border border-gold/30 text-cream rounded-full p-3 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-surface/80 hover:bg-gold/20 border border-gold/30 text-cream rounded-full p-3 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 pb-3">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === selectedIndex ? "bg-gold w-6" : "bg-cream/30 hover:bg-cream/50"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
