import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Video, Clock, Sparkles, Phone, MessageCircle } from "lucide-react";

const features = [
  { icon: Globe, title: "Available Worldwide", desc: "Join from USA, UK, Canada, Australia, UAE, Singapore — anywhere with internet." },
  { icon: Video, title: "Zoom & Google Meet", desc: "Live, interactive HD sessions with real-time corrections by Krishan Goyat." },
  { icon: Clock, title: "Flexible Time Zones", desc: "Early morning, evening or weekend slots — adjusted to your local time." },
  { icon: Sparkles, title: "Personalized Practice", desc: "1-on-1 plans for weight loss, stress, flexibility, posture and pranayama." },
];

const OnlineYogaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="online-yoga"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-dark-surface via-dark-surface-light to-dark-surface"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Most Recommended</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-5 text-cream text-balance">
            Online Yoga Classes — <span className="text-gold">Available Worldwide</span>
          </h2>
          <p className="text-cream/70 text-lg text-pretty">
            Practice live with Krishan Goyat from anywhere in the world via <strong className="text-gold">Zoom</strong> or <strong className="text-gold">Google Meet</strong>.
            Trusted by students across India, USA, UK, UAE, Canada, Australia and beyond.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-dark-surface/80 backdrop-blur-sm border border-gold/15 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-cream">{f.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={`max-w-3xl mx-auto bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/30 rounded-3xl p-8 lg:p-10 text-center ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Global Online Package</p>
          <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-cream mb-3">
            Live 1-on-1 Online Yoga
          </h3>
          <p className="text-cream/70 mb-6 max-w-xl mx-auto">
            Daily live sessions over Zoom or Google Meet. Free trial class for new students. Pay easily via UPI, PayPal or international card.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/918950622342?text=Hi%20Krishan%2C%20I%27d%20like%20to%20book%20an%20online%20yoga%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-dark-surface px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-gold-light transition-colors active:scale-[0.97]"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Trial on WhatsApp
            </a>
            <a
              href="tel:+918950622342"
              className="inline-flex items-center gap-2 border-2 border-gold/40 text-gold px-7 py-3.5 rounded-lg text-base font-medium hover:bg-gold/10 transition-colors active:scale-[0.97]"
            >
              <Phone className="w-5 h-5" />
              Call +91 8950622342
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineYogaSection;
