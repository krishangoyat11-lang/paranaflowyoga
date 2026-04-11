import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LandingPageProps {
  pageTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Service[];
  servicesHeading: string;
  benefits: string[];
  whyHeading: string;
  whyDescription: string;
  ctaHeading: string;
  ctaDescription: string;
  jsonLd?: object;
}

const LandingPageTemplate = ({
  pageTitle,
  metaDescription,
  heroLabel,
  heroTitle,
  heroSubtitle,
  services,
  servicesHeading,
  benefits,
  whyHeading,
  whyDescription,
  ctaHeading,
  ctaDescription,
  jsonLd,
}: LandingPageProps) => {
  useEffect(() => {
    document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);

    // JSON-LD
    if (jsonLd) {
      let script = document.getElementById("landing-jsonld") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "landing-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
      return () => { script?.remove(); };
    }
  }, [pageTitle, metaDescription, jsonLd]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark-surface relative overflow-hidden">
        <div className="absolute top-12 right-12 w-64 h-64 rounded-full border border-gold/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-gold/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">
                {heroLabel}
              </p>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-6 text-cream text-balance">
              {heroTitle}
            </h1>
            <p className="text-lg text-cream/70 mb-8 text-pretty max-w-xl leading-relaxed">
              {heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+918950622342"
                className="inline-flex items-center gap-2 bg-gold text-dark-surface px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book a Session
              </a>
              <a
                href="https://wa.me/918950622342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/30 text-gold px-6 py-3 rounded-lg font-medium hover:bg-gold/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-dark-surface-light relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold/50" />
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Our Services</p>
              <div className="w-12 h-px bg-gold/50" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] text-cream text-balance">
              {servicesHeading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-dark-surface border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-cream">
                  {service.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed text-pretty">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28 bg-dark-surface relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Why Choose Us</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] text-cream mb-6 text-balance">
                {whyHeading}
              </h2>
              <p className="text-cream/60 text-lg mb-8 text-pretty leading-relaxed">
                {whyDescription}
              </p>
              <a
                href="tel:+918950622342"
                className="inline-flex items-center gap-2 bg-gold text-dark-surface px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 8950622342
              </a>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-dark-surface-light border border-gold/10 rounded-xl p-4 hover:border-gold/20 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-cream font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-dark-surface-light relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container">
          <h3 className="font-heading text-xl font-semibold text-cream mb-6 text-center">
            Explore More Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: "/home-yoga-gurgaon", label: "Home Yoga in Gurgaon" },
              { to: "/weight-loss-yoga-gurgaon", label: "Weight Loss Yoga" },
              { to: "/personal-yoga-trainer-gurgaon", label: "Personal Yoga Trainer" },
              { to: "/corporate-yoga-gurgaon", label: "Corporate Yoga" },
              { to: "/morning-yoga-gurgaon", label: "Morning Yoga Classes" },
              { to: "/yoga-classes-gurgaon", label: "Yoga Classes in Gurgaon" },
              { to: "/yoga-instructor-at-home-gurgaon", label: "Yoga Instructor at Home" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-cream/50 border border-gold/10 px-4 py-2 rounded-lg hover:text-gold hover:border-gold/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-dark-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.05),transparent_70%)]" />
        <div className="container text-center max-w-2xl mx-auto relative z-10">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] mb-4 text-cream text-balance">
            {ctaHeading}
          </h2>
          <p className="text-cream/60 text-lg mb-8 text-pretty">
            {ctaDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918950622342"
              className="inline-flex items-center gap-2 bg-gold text-dark-surface px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Book a Session
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-gold/30 text-gold px-6 py-3 rounded-lg font-medium hover:bg-gold/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPageTemplate;
