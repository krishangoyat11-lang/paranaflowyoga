import { Users, Heart, Wind, Dumbbell, Building } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const CorporateYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Corporate Yoga in Gurgaon | Office Yoga & Wellness Programs | ParanaflowYoga"
    metaDescription="Corporate yoga classes in Gurgaon for offices, teams & organizations. Reduce stress, boost productivity with Krishan Goyat — National Yoga Champion with 17+ years experience."
    heroLabel="Corporate Yoga in Gurgaon"
    heroTitle="Corporate Yoga Programs for Gurgaon Offices"
    heroSubtitle="Boost employee wellness, reduce stress, and increase productivity with professional corporate yoga sessions. Trusted by companies across Gurgaon & NCR."
    servicesHeading="Corporate Yoga Services"
    services={[
      { icon: Building, title: "On-Site Office Yoga", description: "We come to your office — conference room, terrace, or gym. Zero disruption to your work schedule." },
      { icon: Users, title: "Team Building Yoga", description: "Unique yoga-based team building activities that improve communication, trust, and workplace harmony." },
      { icon: Heart, title: "Desk & Chair Yoga", description: "Quick 20-30 minute sessions employees can do at their desks. Perfect for busy Cyber City professionals." },
      { icon: Wind, title: "Stress Management Programs", description: "Structured programs combining yoga, pranayama, and meditation to combat workplace burnout and anxiety." },
      { icon: Dumbbell, title: "Employee Wellness Workshops", description: "Half-day or full-day wellness workshops covering yoga, nutrition, posture correction, and mental health." },
    ]}
    benefits={[
      "Reduced employee absenteeism and healthcare costs",
      "Improved focus, productivity, and creative thinking",
      "Flexible scheduling — before work, lunch breaks, or after hours",
      "Sessions for groups of 5 to 500+ employees",
      "Customizable programs for your company's wellness goals",
      "Trusted by corporate teams across Gurgaon & NCR",
    ]}
    whyHeading="Why Corporate Yoga for Your Team?"
    whyDescription="Companies investing in employee wellness see 25% less absenteeism and 30% higher productivity. ParanaflowYoga brings championship-level yoga expertise to your workplace."
    ctaHeading="Elevate Your Workplace Wellness"
    ctaDescription="Give your team the gift of wellness. Book a corporate yoga program for your Gurgaon office today."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Corporate Yoga in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Corporate Yoga Instructor" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description: "Corporate yoga programs in Gurgaon for offices and teams. On-site sessions, stress management, and employee wellness by National Yoga Champion.",
      url: "https://paranaflowyoga.in/corporate-yoga-gurgaon",
    }}
  />
);

export default CorporateYogaGurgaon;
