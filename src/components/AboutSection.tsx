import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImage from "@/assets/about-yoga.jpg";
import { Award, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "17+", label: "Years Practice" },
  { icon: Globe, value: "11+", label: "Years Teaching Globally" },
  { icon: Award, value: "National", label: "Yoga Champion" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Krishan Goyat in meditation"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-slide-right delay-200" : "opacity-0"}`}>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
              About Me
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-6 text-balance">
              A Lifelong Dedication to Yoga
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 text-pretty">
              I am Krishan Goyat, a dedicated yoga professional with over 17 years of personal practice and 11 years of international teaching experience. I have trained students across different countries and proudly hold the title of a National Yoga Champion.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              My approach combines traditional yoga wisdom with modern techniques to help you achieve physical strength, mental clarity, and inner balance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
