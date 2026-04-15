import { Home, Heart, Dumbbell, Wind, Star } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const PersonalYogaTrainerGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Personal Yoga Trainer in Gurgaon | 1-on-1 Private Yoga | ParanaflowYoga"
    metaDescription="Hire the best personal yoga trainer in Gurgaon — Krishan Goyat, National Yoga Champion. Private 1-on-1 sessions at your home in DLF, Sohna Road, Golf Course Road & all Gurgaon areas."
    heroLabel="Personal Yoga Trainer"
    heroTitle="Your Personal Yoga Trainer in Gurgaon"
    heroSubtitle="Get undivided attention with private one-on-one yoga training. Krishan Goyat — a National Yoga Champion — designs every session around your unique goals and body."
    servicesHeading="Personal Training Services in Gurgaon"
    services={[
      { icon: Star, title: "Custom Yoga Programs", description: "Every session is designed specifically for you — your body, your goals, your pace. No generic routines, ever." },
      { icon: Home, title: "Private Home Sessions", description: "Train in complete privacy at your home in Gurgaon. No distractions, no crowds — just you and your personal trainer." },
      { icon: Heart, title: "Injury Recovery & Rehab", description: "Gentle, therapeutic yoga for post-surgery recovery, chronic pain management, and injury rehabilitation." },
      { icon: Dumbbell, title: "Fitness & Performance Yoga", description: "Advanced yoga for athletes and fitness enthusiasts in Gurgaon. Improve strength, flexibility, and performance." },
      { icon: Wind, title: "Stress & Anxiety Management", description: "Personalized meditation and pranayama protocols to manage stress, anxiety, and improve sleep quality." },
    ]}
    benefits={[
      "National Yoga Champion with 17+ years teaching experience",
      "100% personalized — sessions designed around your needs",
      "Private one-on-one attention at your home in Gurgaon",
      "Flexible timings — early morning 5 AM to late evening",
      "Progress tracking and program adjustments every month",
      "Expertise in therapeutic, power, and traditional yoga styles",
    ]}
    whyHeading="Why Hire a Personal Yoga Trainer in Gurgaon?"
    whyDescription="A personal trainer ensures correct form, faster progress, and a program that adapts to your body. With ParanaflowYoga, you get championship-level expertise in every session at your home in Gurgaon."
    ctaHeading="Hire Your Personal Yoga Trainer in Gurgaon"
    ctaDescription="Stop following generic routines. Get a personal yoga trainer who understands your body and goals. Book now in Gurgaon."
    areasServed="DLF Phase 1-5, Sohna Road, Golf Course Road, Golf Course Extension, Sector 49-57, MG Road, Cyber City, South City, Nirvana Country, Palam Vihar, Sushant Lok, Malibu Town, and all areas across Gurgaon & NCR."
    faqs={[
      { question: "How much does a personal yoga trainer cost in Gurgaon?", answer: "Personal yoga training starts from ₹1,000 per session. Monthly packages with 3-5 sessions per week offer significant savings. Contact us on WhatsApp for a personalized quote." },
      { question: "What makes a personal yoga trainer better than group classes?", answer: "A personal trainer gives you 100% attention, corrects your form in real-time, and designs a program specifically for your body and goals. Progress is 3-4x faster than group classes." },
      { question: "Do you offer personal yoga training for seniors in Gurgaon?", answer: "Yes! We offer gentle, safe personal yoga sessions for senior citizens at their home in Gurgaon. Sessions focus on mobility, balance, joint health, and overall wellness." },
      { question: "Can a personal yoga trainer help with back pain?", answer: "Absolutely! Therapeutic yoga is one of our specialties. Krishan Goyat designs specific routines for back pain, sciatica, cervical issues, and other chronic pain conditions." },
      { question: "How do I book a personal yoga trainer in Gurgaon?", answer: "Simply call +91 8950622342 or WhatsApp us. We'll discuss your goals, schedule a trial session at your home in Gurgaon, and create a personalized plan." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Personal Yoga Trainer in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Personal Yoga Trainer" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Hire the best personal yoga trainer in Gurgaon. Private one-on-one sessions by National Yoga Champion Krishan Goyat at your home.",
      url: "https://paranaflowyoga.in/personal-yoga-trainer-gurgaon",
    }}
  />
);

export default PersonalYogaTrainerGurgaon;
