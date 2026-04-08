import { Dumbbell, Heart, Wind, Users, Flame } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const WeightLossYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Weight Loss Yoga in Gurgaon | Fat Burning Yoga Classes | ParanaflowYoga"
    metaDescription="Lose weight with yoga in Gurgaon! Join power yoga & weight loss sessions by Krishan Goyat — National Yoga Champion. Burn fat, build strength, and transform your body."
    heroLabel="Weight Loss Yoga in Gurgaon"
    heroTitle="Lose Weight Naturally with Yoga in Gurgaon"
    heroSubtitle="Burn fat, build lean muscle, and boost metabolism with dynamic power yoga sessions. Guided by Krishan Goyat — a National Yoga Champion with 17+ years of expertise."
    servicesHeading="Weight Loss Yoga Programs"
    services={[
      { icon: Flame, title: "Power Yoga for Fat Loss", description: "High-intensity vinyasa flows designed to maximize calorie burn and accelerate fat loss effectively." },
      { icon: Dumbbell, title: "Strength & Toning Yoga", description: "Build lean muscle and tone your body with challenging yoga sequences targeting all major muscle groups." },
      { icon: Heart, title: "Core & Flexibility Training", description: "Strengthen your core, improve flexibility, and enhance posture through targeted yoga practices." },
      { icon: Wind, title: "Metabolism-Boosting Pranayama", description: "Specific breathing techniques that boost metabolism, improve digestion, and support healthy weight loss." },
      { icon: Users, title: "Group Weight Loss Yoga", description: "Motivating group sessions focused on weight loss. Stay accountable and inspired with fellow practitioners." },
    ]}
    benefits={[
      "Proven weight loss results with 17+ years of yoga expertise",
      "Customized programs based on your body type and goals",
      "Combines cardio, strength, and flexibility for complete fitness",
      "Home sessions — no need for expensive gym memberships",
      "Diet and lifestyle guidance included with sessions",
      "Sustainable weight loss through holistic yoga practice",
    ]}
    whyHeading="Why Yoga for Weight Loss in Gurgaon?"
    whyDescription="Unlike crash diets and intense gym routines, yoga offers sustainable weight loss. ParanaflowYoga combines power yoga, pranayama, and mindful eating guidance for lasting results."
    ctaHeading="Begin Your Weight Loss Journey Today"
    ctaDescription="Transform your body with expert-guided weight loss yoga sessions in Gurgaon. Book your first class now."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Weight Loss Yoga in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Weight loss yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Power yoga, fat burning, and body transformation.",
      url: "https://paranaflowyoga.in/weight-loss-yoga-gurgaon",
    }}
  />
);

export default WeightLossYogaGurgaon;
