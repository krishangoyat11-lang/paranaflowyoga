import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yoga practice at sunrise in the mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-sm font-medium tracking-[0.2em] uppercase text-sage-light mb-6">
            By Krishan Goyat
          </p>
          <h1 className="animate-fade-up delay-100 font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-cream mb-6 text-balance">
            Flow with Breath,
            <br />
            Live with Balance
          </h1>
          <p className="animate-fade-up delay-200 text-lg sm:text-xl text-cream/85 max-w-lg mb-10 text-pretty leading-relaxed">
            Transform your body, calm your mind, and elevate your life with personalized yoga at your doorstep in Gurgaon & NCR.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="tel:+918950622342"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="inline-flex items-center border-2 border-cream/40 text-cream px-8 py-4 rounded-lg text-base font-medium hover:bg-cream/10 transition-colors active:scale-[0.97]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
