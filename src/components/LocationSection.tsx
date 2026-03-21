import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="location" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Visit Us
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-balance">
            Our Location
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Based at Tata Primanti, Sector 72, Gurgaon — serving homes across Gurgaon & NCR.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="rounded-2xl overflow-hidden shadow-sm bg-background">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5!2d77.0419!3d28.3746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22e1eca1e3d7%3A0x3babe37d7e8f8c8a!2sTata%20Primanti%2C%20Sector%2072%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paranaflow Yoga Location - Tata Primanti, Sector 72, Gurgaon"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-0.5">Address</p>
                    <p className="text-sm text-muted-foreground">Tata Primanti, Sector 72, Gurgaon, Haryana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-0.5">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Sat: 6 AM – 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm mb-0.5">Service Area</p>
                    <p className="text-sm text-muted-foreground">Home visits across Gurgaon & NCR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
