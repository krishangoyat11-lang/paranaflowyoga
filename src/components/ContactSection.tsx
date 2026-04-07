import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-surface-light relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gold/5" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Get in Touch</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-cream text-balance">
            Your Journey Starts Here
          </h2>
          <p className="text-cream/60 text-lg text-pretty">
            Ready to transform your well-being? Reach out for a personalized session.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <a
              href="tel:+918950622342"
              className="group flex flex-col items-center text-center bg-dark-surface border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <p className="font-medium text-cream mb-1">Call Now</p>
              <p className="text-sm text-cream/40">+91 8950622342</p>
            </a>

            <a
              href="mailto:Paranaflowyoga@gmail.com"
              className="group flex flex-col items-center text-center bg-dark-surface border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <p className="font-medium text-cream mb-1">Email</p>
              <p className="text-sm text-cream/40 break-all">Paranaflowyoga@gmail.com</p>
            </a>

            <div className="flex flex-col items-center text-center bg-dark-surface border border-gold/10 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <p className="font-medium text-cream mb-1">Service Area</p>
              <p className="text-sm text-cream/40">Gurgaon & NCR</p>
            </div>

            <a
              href="https://www.instagram.com/paranaflowyoga?igsh=MWs3djRxNmlrbno3NQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-dark-surface border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Instagram className="w-6 h-6 text-gold" />
              </div>
              <p className="font-medium text-cream mb-1">Instagram</p>
              <p className="text-sm text-cream/40">Follow us</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
