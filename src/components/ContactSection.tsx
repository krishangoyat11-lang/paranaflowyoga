import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-balance">
            Your Journey Starts Here
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Ready to transform your well-being? Reach out for a personalized session.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <a
              href="tel:+918950622342"
              className="group flex flex-col items-center text-center bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="font-medium text-foreground mb-1">Call Now</p>
              <p className="text-sm text-muted-foreground">+91 8950622342</p>
            </a>

            <a
              href="mailto:paranayogaflow@gmail.com"
              className="group flex flex-col items-center text-center bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="font-medium text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground break-all">paranayogaflow@gmail.com</p>
            </a>

            <div className="flex flex-col items-center text-center bg-background rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium text-foreground mb-1">Service Area</p>
              <p className="text-sm text-muted-foreground">Gurgaon & NCR</p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="font-medium text-foreground mb-1">Instagram</p>
              <p className="text-sm text-muted-foreground">Follow us</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
