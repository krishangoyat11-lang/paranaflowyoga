import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Globe, Clock } from "lucide-react";
import krishanImg from "@/assets/krishan-yoga.jpeg";

const stats = [
  { icon: Clock, value: "17+", label: "Years Practice" },
  { icon: Globe, value: "11+", label: "Years Teaching Globally" },
  { icon: Award, value: "National", label: "Yoga Champion" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative">
              <img
                src={krishanImg}
                alt="Krishan Goyat performing a yoga handstand"
                className="w-full rounded-2xl object-cover aspect-[4/5] shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
              <div className="absolute -bottom-6 -right-6 bg-dark-surface-light border border-gold/20 rounded-2xl p-6 shadow-xl">
                <p className="font-heading text-4xl font-bold leading-none text-gold">17+</p>
                <p className="text-sm font-medium mt-1 text-cream/70">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-slide-right delay-200" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold/50" />
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">About Me</p>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-6 text-cream text-balance">
              A Lifelong Dedication to Yoga
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-4 text-pretty">
              I am Krishan Goyat, a dedicated yoga professional with over 17 years of personal practice and 11 years of international teaching experience. I have trained students across different countries and proudly hold the title of a National Yoga Champion.
            </p>
            <p className="text-cream/60 text-lg leading-relaxed mb-10 text-pretty">
              My approach combines traditional yoga wisdom with modern techniques to help you achieve physical strength, mental clarity, and inner balance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-dark-surface-light border border-gold/10 rounded-xl p-4">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-cream">{stat.value}</p>
                  <p className="text-xs text-cream/40 mt-1">{stat.label}</p>
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
