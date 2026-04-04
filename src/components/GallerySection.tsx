import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Replace these placeholder URLs with your own images (max 15)
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop", alt: "Yoga practice 1" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop", alt: "Yoga practice 2" },
  { src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400&fit=crop", alt: "Yoga practice 3" },
  { src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop", alt: "Yoga practice 4" },
  { src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop", alt: "Yoga practice 5" },
  { src: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=600&h=400&fit=crop", alt: "Yoga practice 6" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Gallery
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            Moments from My Journey
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A glimpse into my yoga practice, teaching sessions, and achievements
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-sm border-none">
          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedIndex].src.replace("w=600&h=400", "w=1200&h=800")}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
                aria-label="Next image"
              >
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
