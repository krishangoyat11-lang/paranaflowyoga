import { Users, Heart, Wind, Dumbbell, Building } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const CorporateYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Corporate Yoga in Gurgaon | Office Yoga & Wellness Programs | ParanaflowYoga"
    metaDescription="Corporate yoga classes in Gurgaon for offices in Cyber City, Udyog Vihar, Golf Course Road & DLF. Reduce stress, boost productivity with Krishan Goyat — National Yoga Champion."
    heroLabel="Corporate Yoga in Gurgaon"
    heroTitle="Corporate Yoga Programs for Gurgaon Offices"
    heroSubtitle="Boost employee wellness, reduce stress, and increase productivity with professional corporate yoga sessions. Trusted by companies across Cyber City, Udyog Vihar & all Gurgaon offices."
    servicesHeading="Corporate Yoga Services in Gurgaon"
    services={[
      { icon: Building, title: "On-Site Office Yoga", description: "We come to your office in Cyber City, Udyog Vihar, or anywhere in Gurgaon. Zero disruption to your work schedule." },
      { icon: Users, title: "Team Building Yoga", description: "Unique yoga-based team building activities that improve communication, trust, and workplace harmony for Gurgaon corporates." },
      { icon: Heart, title: "Desk & Chair Yoga", description: "Quick 20-30 minute sessions employees can do at their desks. Perfect for busy Cyber City and Golf Course Road professionals." },
      { icon: Wind, title: "Stress Management Programs", description: "Structured programs combining yoga, pranayama, and meditation to combat workplace burnout and anxiety." },
      { icon: Dumbbell, title: "Employee Wellness Workshops", description: "Half-day or full-day wellness workshops covering yoga, nutrition, posture correction, and mental health for Gurgaon teams." },
    ]}
    benefits={[
      "Reduced employee absenteeism and healthcare costs",
      "Improved focus, productivity, and creative thinking",
      "Flexible scheduling — before work, lunch breaks, or after hours",
      "Sessions for groups of 5 to 500+ employees",
      "Customizable programs for your company's wellness goals",
      "Trusted by corporate teams across Gurgaon & NCR",
    ]}
    whyHeading="Why Corporate Yoga for Your Gurgaon Team?"
    whyDescription="Companies investing in employee wellness see 25% less absenteeism and 30% higher productivity. ParanaflowYoga brings championship-level yoga expertise to your workplace in Gurgaon."
    ctaHeading="Elevate Your Workplace Wellness in Gurgaon"
    ctaDescription="Give your team the gift of wellness. Book a corporate yoga program for your Gurgaon office today."
    areasServed="Cyber City, Udyog Vihar Phase 1-5, DLF Cyber Hub, Golf Course Road, Sohna Road, MG Road, Sector 44-57, IFFCO Chowk area, Huda City Centre area, and all commercial areas across Gurgaon & NCR."
    faqs={[
      { question: "Do you offer corporate yoga in Cyber City Gurgaon?", answer: "Yes! We provide on-site corporate yoga sessions in Cyber City, Udyog Vihar, and all office complexes across Gurgaon. Our instructor visits your office at your preferred time." },
      { question: "How much does corporate yoga cost in Gurgaon?", answer: "Corporate yoga packages are customized based on group size, frequency, and duration. We offer competitive rates for regular weekly/monthly programs. Contact us for a free consultation and quote." },
      { question: "What is the minimum group size for corporate yoga?", answer: "We accommodate groups from 5 to 500+ employees. Sessions can be held in conference rooms, terraces, gym spaces, or any available area in your office." },
      { question: "Can corporate yoga sessions be held during lunch breaks?", answer: "Absolutely! We offer 30-45 minute desk yoga and chair yoga sessions perfect for lunch breaks. No change of clothes needed — employees can participate in office attire." },
      { question: "What are the benefits of corporate yoga for companies in Gurgaon?", answer: "Corporate yoga reduces stress, improves focus, decreases absenteeism by 25%, boosts productivity by 30%, and improves employee satisfaction and retention." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Corporate Yoga in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Corporate Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Corporate yoga programs in Gurgaon for offices in Cyber City, Udyog Vihar & all commercial areas. On-site sessions by National Yoga Champion.",
      url: "https://paranaflowyoga.in/corporate-yoga-gurgaon",
    }}
  />
);

export default CorporateYogaGurgaon;
