import { Sun, Wind, Heart, Dumbbell, Users } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const MorningYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Morning Yoga Classes in Gurgaon | Early Morning Yoga Sessions | ParanaflowYoga"
    metaDescription="Join morning yoga classes in Gurgaon with Krishan Goyat — National Yoga Champion. Start your day with energy, flexibility & focus. Home sessions available from 5 AM."
    heroLabel="Morning Yoga in Gurgaon"
    heroTitle="Start Your Day with Morning Yoga in Gurgaon"
    heroSubtitle="Rise, stretch, and energize with professional morning yoga sessions. Available from 5 AM at your home or in group settings across Gurgaon & NCR."
    servicesHeading="Morning Yoga Programs"
    services={[
      { icon: Sun, title: "Early Morning Home Yoga", description: "Private sessions starting from 5 AM at your home. The perfect way to begin your day with energy and focus." },
      { icon: Wind, title: "Sunrise Pranayama", description: "Powerful breathing exercises at dawn for maximum oxygen intake, mental clarity, and metabolic boost." },
      { icon: Heart, title: "Gentle Morning Flow", description: "Soft, flowing sequences perfect for beginners and seniors. Wake up your body gently and start the day right." },
      { icon: Dumbbell, title: "Power Morning Yoga", description: "High-energy morning flows for those who want to build strength and burn calories before their workday begins." },
      { icon: Users, title: "Morning Group Sessions", description: "Join community morning yoga groups in parks and societies across Gurgaon. Motivation through togetherness." },
    ]}
    benefits={[
      "Sessions available from 5 AM — perfect for early risers",
      "Boost energy and focus for the entire day ahead",
      "Improve metabolism and digestion with morning practice",
      "Better sleep patterns through consistent morning routine",
      "Home visits across all sectors of Gurgaon & NCR",
      "Guided by a National Yoga Champion with 17+ years experience",
    ]}
    whyHeading="Why Morning Yoga Changes Everything"
    whyDescription="Morning yoga sets the tone for your entire day. Studies show that early morning practice improves cortisol regulation, boosts metabolism, and enhances mental clarity throughout the day."
    ctaHeading="Wake Up to a Better You"
    ctaDescription="Join morning yoga classes in Gurgaon and transform your mornings, your health, and your life. Book now."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Morning Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Early morning yoga classes in Gurgaon from 5 AM. Home yoga sessions by National Yoga Champion Krishan Goyat.",
      url: "https://paranaflowyoga.in/morning-yoga-gurgaon",
    }}
  />
);

export default MorningYogaGurgaon;
