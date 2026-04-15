import { Home, Users, Heart, Dumbbell, Wind, Star } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const YogaInstructorAtHomeGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Yoga Instructor at Home in Gurgaon | Private Home Yoga Sessions | ParanaflowYoga"
    metaDescription="Hire a certified yoga instructor at home in Gurgaon. Krishan Goyat — National Yoga Champion — delivers personalized yoga at your doorstep in DLF, Sohna Road, Golf Course Road & all sectors."
    heroLabel="Yoga Instructor at Home"
    heroTitle="Certified Yoga Instructor at Your Home in Gurgaon"
    heroSubtitle="Skip the commute and crowded studios. Get a dedicated, nationally acclaimed yoga instructor at your home in Gurgaon — personalized routines, flexible timings, and real results."
    servicesHeading="Home Yoga Instructor Services in Gurgaon"
    services={[
      { icon: Home, title: "Private Home Yoga Sessions", description: "One-on-one yoga instruction at your home in Gurgaon. Custom routines designed for your body, goals, and schedule." },
      { icon: Users, title: "Family & Group Home Sessions", description: "A certified instructor visits your home for group yoga — perfect for families, couples, or small friend groups in Gurgaon." },
      { icon: Heart, title: "Therapeutic & Rehab Yoga", description: "Specialized home yoga for back pain, knee issues, arthritis, PCOD, thyroid, and post-surgery recovery under expert guidance." },
      { icon: Dumbbell, title: "Weight Loss & Fitness Yoga", description: "High-energy power yoga and core-strengthening flows at home to help you lose weight and build endurance." },
      { icon: Wind, title: "Pranayama & Stress Relief", description: "Breathing exercises and meditation at home for anxiety relief, better sleep, and mental clarity." },
      { icon: Star, title: "Senior Citizen Home Yoga", description: "Gentle, safe yoga sessions designed for elderly members at home in Gurgaon — improving mobility, balance, and overall wellness." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years of teaching experience",
      "Certified instructor visits your home — no travel needed",
      "Fully customized sessions for beginners to advanced levels",
      "Flexible morning 5 AM, evening & weekend slots across Gurgaon",
      "Specialized programs for weight loss, back pain & stress relief",
      "Serving all Gurgaon sectors — DLF, Sohna Road, Golf Course Road & more",
    ]}
    whyHeading="Why Hire a Yoga Instructor at Home in Gurgaon?"
    whyDescription="A private yoga instructor at home gives you undivided attention, personalized corrections, and a comfortable environment — leading to faster progress and lasting results."
    ctaHeading="Book Your Home Yoga Instructor in Gurgaon"
    ctaDescription="Experience the convenience and effectiveness of private yoga at home in Gurgaon. Call now to schedule your first session."
    areasServed="DLF Phase 1-5, Sohna Road, Golf Course Road, Golf Course Extension, Sector 49-57, MG Road, Cyber City area, South City 1 & 2, Nirvana Country, Palam Vihar, Sushant Lok, Malibu Town, Ardee City, and all residential areas across Gurgaon & NCR."
    faqs={[
      { question: "How do I find a good yoga instructor at home in Gurgaon?", answer: "ParanaflowYoga provides Krishan Goyat — a National Yoga Champion with 17+ years experience — who visits your home in any area of Gurgaon for personalized yoga sessions." },
      { question: "Is hiring a yoga instructor at home expensive in Gurgaon?", answer: "Home yoga sessions start from ₹1,000. Compared to premium studio memberships in Gurgaon, private home sessions offer better value with personalized attention and zero commute time." },
      { question: "What should I prepare for a home yoga session?", answer: "Just a yoga mat, comfortable clothing, and a quiet space in your home. Our instructor brings all the expertise and plans a complete customized session for you." },
      { question: "Can a home yoga instructor help with medical conditions?", answer: "Yes! Our instructor is experienced in therapeutic yoga for back pain, sciatica, cervical issues, PCOD, thyroid, diabetes management, and post-surgery rehabilitation." },
      { question: "Which areas in Gurgaon do you provide home yoga instructors?", answer: "We serve all areas including DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, South City, Nirvana Country, Palam Vihar, Sushant Lok, and the entire Gurgaon & NCR region." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Yoga Instructor at Home in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Hire a certified yoga instructor at home in Gurgaon. Personalized home yoga sessions by National Yoga Champion Krishan Goyat across DLF, Sohna Road, Golf Course Road & all sectors.",
      url: "https://paranaflowyoga.in/yoga-instructor-at-home-gurgaon",
    }}
  />
);

export default YogaInstructorAtHomeGurgaon;
