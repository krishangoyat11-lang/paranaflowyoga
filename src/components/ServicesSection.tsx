import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Home, Users, Heart, Dumbbell, Wind } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Personal Home Yoga",
    description: "One-on-one sessions tailored to your goals, delivered in the comfort of your home.",
  },
  {
    icon: Users,
    title: "Group Yoga Sessions",
    description: "Energizing group classes for communities, societies, and corporate teams.",
  },
  {
    icon: Heart,
    title: "Therapeutic Yoga",
    description: "Targeted sessions for back pain, knee pain, and improved flexibility.",
  },
  {
    icon: Dumbbell,
    title: "Weight Loss & Strength",
    description: "Dynamic sequences designed to burn fat, build strength, and boost endurance.",
  },
  {
    icon: Wind,
    title: "Meditation & Pranayama",
    description: "Breathwork and meditation practices for deep mental calm and clarity.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-dark-surface-light relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-12 right-12 w-64 h-64 rounded-full border border-gold/10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-gold/10" />

      <div className="container relative z-10">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Services</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream text-balance">
            What I Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-dark-surface border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-cream">{service.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
