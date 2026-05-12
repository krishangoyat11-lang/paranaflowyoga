import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Yoga meditation at sunrise in the mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-surface/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 via-dark-surface/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-gold" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">
              By Krishan Goyat
            </p>
          </div>
          <h1 className="animate-fade-up delay-100 font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-cream mb-6 text-balance">
            Flow with Breath,
            <br />
            <span className="text-gold">Live with Balance</span>
          </h1>
          <p className="animate-fade-up delay-200 text-lg sm:text-xl text-cream/75 max-w-lg mb-6 text-pretty leading-relaxed">
            Transform your body, calm your mind, and elevate your life with personalized yoga at your doorstep in Gurgaon & NCR — or live online via Zoom & Google Meet, anywhere in the world.
          </p>
          <a
            href="#online-yoga"
            className="animate-fade-up delay-200 inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-sm font-semibold hover:bg-gold/25 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            New: Online Yoga Worldwide via Zoom & Google Meet
          </a>
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="tel:+918950622342"
              className="inline-flex items-center bg-gold text-dark-surface px-8 py-4 rounded-lg text-base font-semibold hover:bg-gold-light transition-colors active:scale-[0.97]"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="inline-flex items-center border-2 border-gold/40 text-gold px-8 py-4 rounded-lg text-base font-medium hover:bg-gold/10 transition-colors active:scale-[0.97]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-surface to-transparent" />
    </section>
  );
};

export default HeroSection;
