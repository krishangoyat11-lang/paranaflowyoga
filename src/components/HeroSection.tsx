const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient instead of photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sage-light to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_70%)]" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
            By Krishan Goyat
          </p>
          <h1 className="animate-fade-up delay-100 font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground mb-6 text-balance">
            Flow with Breath,
            <br />
            Live with Balance
          </h1>
          <p className="animate-fade-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 text-pretty leading-relaxed">
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
              className="inline-flex items-center border-2 border-primary/30 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/5 transition-colors active:scale-[0.97]"
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
