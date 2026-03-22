import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "17+ Years of Dedicated Practice",
  "International Teaching Background",
  "National Level Yoga Champion",
  "Personalized Home Sessions",
  "Result-Oriented Training",
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-6 text-balance">
              Experience That Speaks for Itself
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              To bring yoga into every home and help people live a healthier, stress-free, and balanced life through personalized guidance and consistent practice.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li
                  key={reason}
                  className={`flex items-center gap-3 ${
                    isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: isVisible ? `${(i + 1) * 80}ms` : undefined }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual element */}
          <div className={`${isVisible ? "animate-slide-right delay-200" : "opacity-0"}`}>
            <div className="relative bg-sage-light rounded-3xl p-12 lg:p-16">
              <div className="text-center">
                <p className="font-heading text-7xl lg:text-8xl font-bold text-primary mb-2">17+</p>
                <p className="text-lg text-primary/80 font-medium mb-8">Years of Practice</p>
                <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
                <p className="font-heading text-3xl font-semibold text-foreground mb-1">Krishan Goyat</p>
                <p className="text-muted-foreground">National Yoga Champion</p>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-6 left-6 w-10 h-10 bg-terracotta/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
