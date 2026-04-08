import { Home, Users, Heart, Dumbbell, Wind } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const YogaClassesGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Yoga Classes in Gurgaon | Home Yoga, Personal & Corporate Sessions | ParanaflowYoga"
    metaDescription="Looking for yoga classes in Gurgaon? ParanaflowYoga offers personalized home yoga, group sessions & corporate yoga by Krishan Goyat — National Yoga Champion with 17+ years experience."
    heroLabel="Yoga Classes in Gurgaon"
    heroTitle="Best Yoga Classes in Gurgaon & NCR"
    heroSubtitle="Transform your health with personalized yoga sessions by Krishan Goyat — a National Yoga Champion bringing 17+ years of expertise to your doorstep in Gurgaon & NCR."
    servicesHeading="Yoga Classes We Offer in Gurgaon"
    services={[
      { icon: Home, title: "Personal Home Yoga Classes", description: "One-on-one yoga sessions at your home in Gurgaon. Customized routines for beginners to advanced practitioners." },
      { icon: Users, title: "Group & Corporate Yoga", description: "Energizing group sessions for housing societies, offices, and corporate wellness programs across Gurgaon & NCR." },
      { icon: Heart, title: "Therapeutic Yoga Sessions", description: "Specialized yoga for back pain, knee pain, flexibility issues, and stress relief — guided by 17+ years of expertise." },
      { icon: Dumbbell, title: "Weight Loss Yoga", description: "Dynamic power yoga and strength-building sequences designed to help you lose weight and build endurance." },
      { icon: Wind, title: "Meditation & Pranayama", description: "Deep breathing and meditation techniques for mental clarity, better sleep, and overall well-being." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years experience",
      "Personalized sessions tailored to your fitness goals",
      "Convenient home visits across Gurgaon & NCR",
      "Flexible scheduling — morning, evening & weekends",
      "Suitable for all ages and fitness levels",
      "Holistic approach combining asanas, pranayama & meditation",
    ]}
    whyHeading="Why Choose Our Yoga Classes in Gurgaon?"
    whyDescription="With ParanaflowYoga, you get more than just a workout — you get a complete wellness journey guided by one of India's top yoga professionals."
    ctaHeading="Start Your Yoga Journey in Gurgaon Today"
    ctaDescription="Whether you're a beginner or experienced practitioner, get personalized yoga classes at your home. Book your first session now."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Best yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Home yoga, corporate yoga, weight loss yoga, and more.",
      url: "https://paranaflowyoga.in/yoga-classes-gurgaon",
    }}
  />
);

export default YogaClassesGurgaon;
