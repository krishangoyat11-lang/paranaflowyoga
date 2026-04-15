import { Dumbbell, Heart, Wind, Users, Flame } from "lucide-react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const WeightLossYogaGurgaon = () => (
  <LandingPageTemplate
    pageTitle="Weight Loss Yoga in Gurgaon | Fat Burning Yoga Classes | ParanaflowYoga"
    metaDescription="Lose weight with yoga in Gurgaon! Power yoga & fat burning sessions by Krishan Goyat — National Yoga Champion. Home sessions in DLF, Sohna Road, Golf Course Road & all Gurgaon areas."
    heroLabel="Weight Loss Yoga in Gurgaon"
    heroTitle="Lose Weight Naturally with Yoga in Gurgaon"
    heroSubtitle="Burn fat, build lean muscle, and boost metabolism with dynamic power yoga sessions. Guided by Krishan Goyat — a National Yoga Champion with 17+ years of expertise."
    servicesHeading="Weight Loss Yoga Programs in Gurgaon"
    services={[
      { icon: Flame, title: "Power Yoga for Fat Loss", description: "High-intensity vinyasa flows designed to maximize calorie burn and accelerate fat loss effectively at your home in Gurgaon." },
      { icon: Dumbbell, title: "Strength & Toning Yoga", description: "Build lean muscle and tone your body with challenging yoga sequences targeting all major muscle groups." },
      { icon: Heart, title: "Core & Flexibility Training", description: "Strengthen your core, improve flexibility, and enhance posture through targeted yoga practices." },
      { icon: Wind, title: "Metabolism-Boosting Pranayama", description: "Specific breathing techniques that boost metabolism, improve digestion, and support healthy weight loss." },
      { icon: Users, title: "Group Weight Loss Yoga", description: "Motivating group sessions in Gurgaon focused on weight loss. Stay accountable and inspired with fellow practitioners." },
    ]}
    benefits={[
      "Proven weight loss results with 17+ years of yoga expertise",
      "Customized programs based on your body type and goals",
      "Combines cardio, strength, and flexibility for complete fitness",
      "Home sessions in Gurgaon — no expensive gym memberships needed",
      "Diet and lifestyle guidance included with sessions",
      "Sustainable weight loss through holistic yoga practice",
    ]}
    whyHeading="Why Yoga for Weight Loss in Gurgaon?"
    whyDescription="Unlike crash diets and intense gym routines, yoga offers sustainable weight loss. ParanaflowYoga combines power yoga, pranayama, and mindful eating guidance for lasting results — right at your home in Gurgaon."
    ctaHeading="Begin Your Weight Loss Journey in Gurgaon"
    ctaDescription="Transform your body with expert-guided weight loss yoga sessions at home in Gurgaon. Book your first class now."
    areasServed="DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, South City, Nirvana Country, Palam Vihar, Sushant Lok, and all areas across Gurgaon & NCR."
    faqs={[
      { question: "Can yoga help me lose weight in Gurgaon?", answer: "Yes! Power yoga burns 400-600 calories per hour. Combined with pranayama and diet guidance, our Gurgaon clients typically see 3-5 kg weight loss in the first month with consistent practice." },
      { question: "How many sessions per week for weight loss yoga?", answer: "For best results, we recommend 4-5 sessions per week. Krishan Goyat will design a progressive program that intensifies as your fitness improves." },
      { question: "Do you provide diet guidance with weight loss yoga?", answer: "Yes! Every weight loss program includes personalized diet and lifestyle advice alongside yoga sessions to maximize your results." },
      { question: "Is weight loss yoga suitable for overweight beginners?", answer: "Absolutely! Sessions are customized for your current fitness level. We start gentle and progressively increase intensity as your body adapts." },
      { question: "What is the cost of weight loss yoga in Gurgaon?", answer: "Weight loss yoga packages start from ₹1,000 per session. Monthly packages with 4-5 sessions per week are available at discounted rates. Contact us for details." },
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Weight Loss Yoga in Gurgaon",
      provider: { "@type": "Person", name: "Krishan Goyat", jobTitle: "Yoga Instructor" },
      areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Gurugram" },
      ],
      description: "Weight loss yoga classes in Gurgaon by National Yoga Champion Krishan Goyat. Power yoga, fat burning, and body transformation at your home.",
      url: "https://paranaflowyoga.in/weight-loss-yoga-gurgaon",
    }}
  />
);

export default WeightLossYogaGurgaon;
