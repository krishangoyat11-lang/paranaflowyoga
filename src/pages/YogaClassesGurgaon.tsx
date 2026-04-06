import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Home, Users, Heart, Dumbbell, Wind, Phone, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import yoga1 from "@/assets/gallery/yoga-1.jpeg";
import yoga2 from "@/assets/gallery/yoga-2.jpeg";
import yoga3 from "@/assets/gallery/yoga-3.jpeg";
import yoga4 from "@/assets/gallery/yoga-4.jpeg";
import yoga5 from "@/assets/gallery/yoga-5.jpeg";
import yoga6 from "@/assets/gallery/yoga-6.jpeg";

const galleryPhotos = [
  { src: yoga1, alt: "Krishan Goyat performing advanced yoga pose" },
  { src: yoga2, alt: "Group yoga class in Gurgaon" },
  { src: yoga3, alt: "Pranayama breathing exercise" },
  { src: yoga4, alt: "Student practicing pranayama" },
  { src: yoga5, alt: "Group yoga stretching session" },
  { src: yoga6, alt: "Relaxation yoga class" },
];

const services = [
  {
    icon: Home,
    title: "Personal Home Yoga Classes",
    description:
      "One-on-one yoga sessions at your home in Gurgaon. Customized routines for beginners to advanced practitioners.",
  },
  {
    icon: Users,
    title: "Group & Corporate Yoga",
    description:
      "Energizing group sessions for housing societies, offices, and corporate wellness programs across Gurgaon & NCR.",
  },
  {
    icon: Heart,
    title: "Therapeutic Yoga Sessions",
    description:
      "Specialized yoga for back pain, knee pain, flexibility issues, and stress relief — guided by 17+ years of expertise.",
  },
  {
    icon: Dumbbell,
    title: "Weight Loss Yoga",
    description:
      "Dynamic power yoga and strength-building sequences designed to help you lose weight and build endurance.",
  },
  {
    icon: Wind,
    title: "Meditation & Pranayama",
    description:
      "Deep breathing and meditation techniques for mental clarity, better sleep, and overall well-being.",
  },
];

const benefits = [
  "National Yoga Champion with 17+ years experience",
  "Personalized sessions tailored to your fitness goals",
  "Convenient home visits across Gurgaon & NCR",
  "Flexible scheduling — morning, evening & weekends",
  "Suitable for all ages and fitness levels",
  "Holistic approach combining asanas, pranayama & meditation",
];

const YogaClassesGurgaon = () => {
  useEffect(() => {
    document.title =
      "Yoga Classes in Gurgaon | Home Yoga, Personal & Corporate Sessions | Paranaflow Yoga";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Looking for yoga classes in Gurgaon? Paranaflow Yoga offers personalized home yoga, group sessions & corporate yoga by Krishan Goyat — National Yoga Champion with 17+ years experience."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-12 right-12 w-64 h-64 rounded-full border border-primary-foreground/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-primary-foreground/10" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary-foreground/70 mb-4">
              Yoga Classes in Gurgaon
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-6 text-primary-foreground text-balance">
              Professional Yoga Classes at Your Home in Gurgaon
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty max-w-xl">
              Transform your health with personalized yoga sessions by Krishan Goyat — a National Yoga Champion bringing 17+ years of expertise to your doorstep in Gurgaon & NCR.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+918950622342"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Book a Session
              </a>
              <a
                href="https://wa.me/918950622342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] text-foreground text-balance">
              Yoga Classes We Offer in Gurgaon
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">
                Why Paranaflow Yoga
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] text-foreground mb-6 text-balance">
                Why Choose Our Yoga Classes in Gurgaon?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                With Paranaflow Yoga, you get more than just a workout — you get a complete wellness journey guided by one of India's top yoga professionals.
              </p>
              <a
                href="tel:+918950622342"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 8950622342
              </a>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-background border border-border rounded-xl p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-[1.1] mb-4 text-primary-foreground text-balance">
            Start Your Yoga Journey in Gurgaon Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 text-pretty">
            Whether you're a beginner or experienced practitioner, get personalized yoga classes at your home. Book your first session now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918950622342"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Book a Session
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
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

export default YogaClassesGurgaon;
