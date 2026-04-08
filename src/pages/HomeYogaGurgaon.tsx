import { Home, Users, Heart, Dumbbell, Wind } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const HomeYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Home Yoga Classes in Gurgaon | Personal Yoga at Your Doorstep | ParanaflowYoga"
    metaDescription="Book home yoga classes in Gurgaon with Krishan Goyat — National Yoga Champion with 17+ years experience. Personalized yoga sessions at your home in Gurgaon & NCR."
    heroLabel="Home Yoga in Gurgaon"
    heroTitle="Professional Yoga Classes at Your Home in Gurgaon"
    heroSubtitle="No gym, no travel — get expert yoga training in the comfort of your home. Personalized sessions by Krishan Goyat, a National Yoga Champion with 17+ years of experience."
    servicesHeading="Home Yoga Services in Gurgaon"
    services={[
      { icon: Home, title: "One-on-One Home Yoga", description: "Fully personalized yoga sessions at your home, tailored to your fitness level, health goals, and schedule." },
      { icon: Users, title: "Family Yoga at Home", description: "Group sessions for the whole family — from kids to seniors. Build healthy habits together at home." },
      { icon: Heart, title: "Therapeutic Home Yoga", description: "Specialized yoga for back pain, joint issues, stress relief, and post-surgery recovery at your residence." },
      { icon: Dumbbell, title: "Power Yoga at Home", description: "High-intensity yoga flows to build strength, burn calories, and improve endurance without leaving home." },
      { icon: Wind, title: "Pranayama & Meditation", description: "Breathing exercises and guided meditation sessions at home for mental clarity and deep relaxation." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years experience",
      "Personalized sessions at your doorstep in Gurgaon & NCR",
      "No commute — save time and practice comfortably at home",
      "Flexible scheduling — morning, evening & weekends",
      "Suitable for all ages: kids, adults, and senior citizens",
      "Holistic approach: asanas, pranayama, meditation & diet guidance",
    ]}
    whyHeading="Why Choose Home Yoga in Gurgaon?"
    whyDescription="Home yoga eliminates barriers to your practice. With ParanaflowYoga, you get a world-class yoga trainer at your doorstep — customized routines, flexible timings, and complete privacy."
    ctaHeading="Start Home Yoga in Gurgaon Today"
    ctaDescription="Transform your health without stepping outside. Book a personalized home yoga session with Krishan Goyat now."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Professional home yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Personalized sessions at your doorstep.",
      url: "https://paranaflowyoga.in/home-yoga-gurgaon",
    }}
  />
);

export default HomeYogaGurgaon;
