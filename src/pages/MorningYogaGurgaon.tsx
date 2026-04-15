import { Sun, Wind, Heart, Dumbbell, Users } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const MorningYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Morning Yoga Classes in Gurgaon | Early Morning Yoga from 5 AM | ParanaflowYoga"
    metaDescription="Join morning yoga classes in Gurgaon from 5 AM! Home sessions by Krishan Goyat — National Yoga Champion. Serving DLF, Sohna Road, Golf Course Road & all Gurgaon sectors."
    heroLabel="Morning Yoga in Gurgaon"
    heroTitle="Start Your Day with Morning Yoga in Gurgaon"
    heroSubtitle="Rise, stretch, and energize with professional morning yoga sessions. Available from 5 AM at your home or in group settings across Gurgaon & NCR."
    servicesHeading="Morning Yoga Programs in Gurgaon"
    services={[
      { icon: Sun, title: "Early Morning Home Yoga", description: "Private sessions starting from 5 AM at your home in Gurgaon. The perfect way to begin your day with energy and focus." },
      { icon: Wind, title: "Sunrise Pranayama", description: "Powerful breathing exercises at dawn for maximum oxygen intake, mental clarity, and metabolic boost." },
      { icon: Heart, title: "Gentle Morning Flow", description: "Soft, flowing sequences perfect for beginners and seniors in Gurgaon. Wake up your body gently and start the day right." },
      { icon: Dumbbell, title: "Power Morning Yoga", description: "High-energy morning flows for those who want to build strength and burn calories before their workday in Gurgaon." },
      { icon: Users, title: "Morning Group Sessions", description: "Join community morning yoga groups in parks and societies across Gurgaon. Motivation through togetherness." },
    ]}
    benefits={[
      "Sessions available from 5 AM — perfect for early risers in Gurgaon",
      "Boost energy and focus for the entire day ahead",
      "Improve metabolism and digestion with morning practice",
      "Better sleep patterns through consistent morning routine",
      "Home visits across all sectors of Gurgaon & NCR",
      "Guided by a National Yoga Champion with 17+ years experience",
    ]}
    whyHeading="Why Morning Yoga Changes Everything"
    whyDescription="Morning yoga sets the tone for your entire day. Studies show that early morning practice improves cortisol regulation, boosts metabolism, and enhances mental clarity throughout the day."
    ctaHeading="Wake Up to a Better You in Gurgaon"
    ctaDescription="Join morning yoga classes in Gurgaon and transform your mornings, your health, and your life. Book now."
    areasServed="DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, South City, Nirvana Country, Palam Vihar, Sushant Lok, Malibu Town, and all areas across Gurgaon & NCR."
    faqs={[
      { question: "What time do morning yoga classes start in Gurgaon?", answer: "Our earliest morning sessions start at 5 AM. We offer flexible slots from 5 AM to 8 AM at your home in any area of Gurgaon." },
      { question: "Is morning yoga better than evening yoga?", answer: "Morning yoga boosts metabolism, regulates cortisol, and sets a positive tone for the entire day. Research shows morning practitioners are more consistent and see faster results." },
      { question: "Do you offer morning yoga in parks in Gurgaon?", answer: "Yes! We conduct group morning yoga sessions in parks and society common areas across Gurgaon. We also offer private home sessions for those who prefer privacy." },
      { question: "Can beginners join morning yoga in Gurgaon?", answer: "Absolutely! We have gentle morning flow sessions designed specifically for beginners. Krishan Goyat adjusts the intensity based on your fitness level." },
      { question: "How much do morning yoga classes cost in Gurgaon?", answer: "Morning yoga sessions start from ₹1,000 per session. Monthly packages for daily morning yoga are available at discounted rates. WhatsApp us for pricing details." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Morning Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Early morning yoga classes in Gurgaon from 5 AM. Home yoga sessions by National Yoga Champion Krishan Goyat across DLF, Sohna Road, Golf Course Road & all sectors.",
      url: "https://paranaflowyoga.in/morning-yoga-gurgaon",
    }}
  />
);

export default MorningYogaGurgaon;
