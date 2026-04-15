import { Home, Users, Heart, Dumbbell, Wind } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const HomeYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Home Yoga Classes in Gurgaon | Personal Yoga at Your Doorstep | ParanaflowYoga"
    metaDescription="Book home yoga classes in Gurgaon with Krishan Goyat — National Yoga Champion. Personal yoga at your doorstep in DLF, Sohna Road, Golf Course Road & all Gurgaon sectors. Call now!"
    heroLabel="Home Yoga in Gurgaon"
    heroTitle="Professional Yoga Classes at Your Home in Gurgaon"
    heroSubtitle="No gym, no travel — get expert yoga training in the comfort of your home. Personalized sessions by Krishan Goyat, a National Yoga Champion with 17+ years of experience."
    servicesHeading="Home Yoga Services in Gurgaon"
    services={[
      { icon: Home, title: "One-on-One Home Yoga", description: "Fully personalized yoga sessions at your home in Gurgaon, tailored to your fitness level, health goals, and schedule." },
      { icon: Users, title: "Family Yoga at Home", description: "Group sessions for the whole family — from kids to seniors. Build healthy habits together at home in Gurgaon." },
      { icon: Heart, title: "Therapeutic Home Yoga", description: "Specialized yoga for back pain, joint issues, stress relief, and post-surgery recovery at your residence in Gurgaon." },
      { icon: Dumbbell, title: "Power Yoga at Home", description: "High-intensity yoga flows to build strength, burn calories, and improve endurance without leaving your home." },
      { icon: Wind, title: "Pranayama & Meditation", description: "Breathing exercises and guided meditation sessions at home for mental clarity and deep relaxation." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years experience",
      "Personalized sessions at your doorstep in Gurgaon & NCR",
      "No commute — save time and practice comfortably at home",
      "Flexible scheduling — morning 5 AM, evening & weekends",
      "Suitable for all ages: kids, adults, and senior citizens",
      "Holistic approach: asanas, pranayama, meditation & diet guidance",
    ]}
    whyHeading="Why Choose Home Yoga in Gurgaon?"
    whyDescription="Home yoga eliminates barriers to your practice. With ParanaflowYoga, you get a world-class yoga trainer at your doorstep in Gurgaon — customized routines, flexible timings, and complete privacy."
    ctaHeading="Start Home Yoga in Gurgaon Today"
    ctaDescription="Transform your health without stepping outside. Book a personalized home yoga session with Krishan Goyat in Gurgaon now."
    areasServed="DLF Phase 1-5, Sohna Road, Golf Course Road, Golf Course Extension, Sector 49-57, MG Road, South City, Nirvana Country, Palam Vihar, Sushant Lok, Malibu Town, Ardee City, Vatika City, and all residential areas across Gurgaon & NCR."
    faqs={[
      { question: "How do home yoga classes work in Gurgaon?", answer: "Our certified instructor Krishan Goyat visits your home at your preferred time. You just need a yoga mat and comfortable clothing. He brings all expertise and plans a customized session for you." },
      { question: "Which areas in Gurgaon do you cover for home yoga?", answer: "We cover all areas including DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, Cyber City area, South City, Nirvana Country, Palam Vihar, Sushant Lok, and the entire Gurgaon & NCR region." },
      { question: "What time slots are available for home yoga in Gurgaon?", answer: "Sessions are available from 5 AM to 9 PM, 7 days a week. Early morning (5-7 AM) and evening (6-8 PM) are the most popular time slots." },
      { question: "Is home yoga suitable for beginners in Gurgaon?", answer: "Absolutely! Home yoga is perfect for beginners because you get 100% personalized attention. Krishan Goyat customizes every pose and sequence based on your current fitness level." },
      { question: "How much does home yoga cost in Gurgaon?", answer: "Home yoga sessions start from ₹1,000 per session. Monthly packages with 3-5 sessions per week are available at discounted rates. Contact us on WhatsApp for exact pricing." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Professional home yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Personalized sessions at your doorstep in DLF, Sohna Road, Golf Course Road & all sectors.",
      url: "https://paranaflowyoga.in/home-yoga-gurgaon",
    }}
  />
);

export default HomeYogaGurgaon;
