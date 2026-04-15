import { Home, Users, Heart, Dumbbell, Wind } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const YogaClassesGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Yoga Classes in Gurgaon | Home Yoga, Personal & Corporate Sessions | ParanaflowYoga"
    metaDescription="Looking for yoga classes in Gurgaon? ParanaflowYoga offers personalized home yoga, group sessions & corporate yoga in DLF, Sohna Road, Golf Course Road & all Gurgaon sectors. Book now!"
    heroLabel="Yoga Classes in Gurgaon"
    heroTitle="Best Yoga Classes in Gurgaon & NCR"
    heroSubtitle="Transform your health with personalized yoga sessions by Krishan Goyat — a National Yoga Champion bringing 17+ years of expertise to your doorstep in Gurgaon & NCR."
    servicesHeading="Yoga Classes We Offer in Gurgaon"
    services={[
      { icon: Home, title: "Personal Home Yoga Classes", description: "One-on-one yoga sessions at your home in Gurgaon. Customized routines for beginners to advanced practitioners across DLF, Sohna Road & Golf Course Road." },
      { icon: Users, title: "Group & Corporate Yoga", description: "Energizing group sessions for housing societies, offices in Cyber City, Udyog Vihar, and corporate wellness programs across Gurgaon & NCR." },
      { icon: Heart, title: "Therapeutic Yoga Sessions", description: "Specialized yoga for back pain, knee pain, flexibility issues, and stress relief — guided by 17+ years of expertise." },
      { icon: Dumbbell, title: "Weight Loss Yoga", description: "Dynamic power yoga and strength-building sequences designed to help you lose weight and build endurance." },
      { icon: Wind, title: "Meditation & Pranayama", description: "Deep breathing and meditation techniques for mental clarity, better sleep, and overall well-being." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years experience",
      "Personalized sessions tailored to your fitness goals",
      "Convenient home visits across all Gurgaon sectors & NCR",
      "Flexible scheduling — morning 5 AM, evening & weekends",
      "Suitable for all ages and fitness levels",
      "Holistic approach combining asanas, pranayama & meditation",
    ]}
    whyHeading="Why Choose Our Yoga Classes in Gurgaon?"
    whyDescription="With ParanaflowYoga, you get more than just a workout — you get a complete wellness journey guided by one of India's top yoga professionals, right at your doorstep in Gurgaon."
    ctaHeading="Start Your Yoga Journey in Gurgaon Today"
    ctaDescription="Whether you're a beginner or experienced practitioner, get personalized yoga classes at your home in Gurgaon. Book your first session now."
    areasServed="DLF Phase 1, DLF Phase 2, DLF Phase 3, DLF Phase 4, DLF Phase 5, Sohna Road, Golf Course Road, Golf Course Extension Road, Sector 49, Sector 50, Sector 54, Sector 56, Sector 57, MG Road, Cyber City, Udyog Vihar, South City 1 & 2, Nirvana Country, Palam Vihar, Sushant Lok, Malibu Town, and all areas across Gurgaon & NCR."
    faqs={[
      { question: "What types of yoga classes are available in Gurgaon?", answer: "We offer home yoga, personal training, group classes, corporate yoga, weight loss yoga, morning yoga, therapeutic yoga, and pranayama sessions across all areas of Gurgaon & NCR." },
      { question: "How much do yoga classes cost in Gurgaon?", answer: "Personal sessions start from ₹1,000 per class. We offer monthly packages for regular sessions at discounted rates. Contact us on WhatsApp for a custom quote based on your needs." },
      { question: "Do you provide yoga classes at home in Gurgaon?", answer: "Yes! Home yoga is our specialty. Our instructor Krishan Goyat visits your home in any area of Gurgaon — DLF, Sohna Road, Golf Course Road, Sector 49-57, and beyond." },
      { question: "What is the best time for yoga classes in Gurgaon?", answer: "We offer flexible timings from 5 AM to 9 PM. Morning sessions (5-8 AM) are most popular for energy and metabolism benefits. Evening sessions are great for stress relief after work." },
      { question: "Can beginners join yoga classes in Gurgaon?", answer: "Absolutely! Our sessions are personalized for all levels — from complete beginners to advanced practitioners. Krishan Goyat customizes every session based on your fitness level and goals." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Yoga Classes in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Best yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Home yoga, corporate yoga, weight loss yoga, and more across DLF, Sohna Road, Golf Course Road & all sectors.",
      url: "https://paranaflowyoga.in/yoga-classes-gurgaon",
    }}
  />
);

export default YogaClassesGurgaon;
