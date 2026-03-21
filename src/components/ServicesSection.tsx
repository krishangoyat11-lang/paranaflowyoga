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
    <section id="services" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Services
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-balance">
            What I Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                isVisible ? `animate-fade-up` : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
