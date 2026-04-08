import { Home, Heart, Dumbbell, Wind, Star } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const PersonalYogaTrainerGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Personal Yoga Trainer in Gurgaon | 1-on-1 Private Yoga | ParanaflowYoga"
    metaDescription="Hire the best personal yoga trainer in Gurgaon — Krishan Goyat, National Yoga Champion with 17+ years experience. Private one-on-one yoga sessions at your home."
    heroLabel="Personal Yoga Trainer"
    heroTitle="Your Personal Yoga Trainer in Gurgaon"
    heroSubtitle="Get undivided attention with private one-on-one yoga training. Krishan Goyat — a National Yoga Champion — designs every session around your unique goals and body."
    servicesHeading="Personal Training Services"
    services={[
      { icon: Star, title: "Custom Yoga Programs", description: "Every session is designed specifically for you — your body, your goals, your pace. No generic routines." },
      { icon: Home, title: "Private Home Sessions", description: "Train in complete privacy at your home. No distractions, no crowds — just you and your personal trainer." },
      { icon: Heart, title: "Injury Recovery & Rehab", description: "Gentle, therapeutic yoga for post-surgery recovery, chronic pain management, and injury rehabilitation." },
      { icon: Dumbbell, title: "Fitness & Performance Yoga", description: "Advanced yoga for athletes and fitness enthusiasts. Improve strength, flexibility, and performance." },
      { icon: Wind, title: "Stress & Anxiety Management", description: "Personalized meditation and pranayama protocols to manage stress, anxiety, and improve sleep quality." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years teaching experience",
      "100% personalized — sessions designed around your needs",
      "Private one-on-one attention at your home or office",
      "Flexible timings — early morning to late evening",
      "Progress tracking and program adjustments every month",
      "Expertise in therapeutic, power, and traditional yoga styles",
    ]}
    whyHeading="Why Hire a Personal Yoga Trainer?"
    whyDescription="A personal trainer ensures correct form, faster progress, and a program that adapts to your body. With ParanaflowYoga, you get championship-level expertise in every session."
    ctaHeading="Hire Your Personal Yoga Trainer"
    ctaDescription="Stop following generic routines. Get a personal yoga trainer who understands your body and goals. Book now."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Personal Yoga Trainer in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Personal Yoga Trainer" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Hire the best personal yoga trainer in Gurgaon. Private one-on-one sessions by National Yoga Champion Krishan Goyat.",
      url: "https://paranaflowyoga.in/personal-yoga-trainer-gurgaon",
    }}
  />
);

export default PersonalYogaTrainerGurgaon;
