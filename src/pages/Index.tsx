import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import QuerySection from "@/components/QuerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ParanaflowYoga",
    description: "Best yoga classes in Gurgaon by Krishan Goyat — National Yoga Champion with 17+ years experience. Home yoga, personal training, corporate yoga, weight loss yoga & morning yoga in Gurgaon & NCR.",
    url: "https://paranaflowyoga.in",
    telephone: "+918950622342",
    email: "Paranaflowyoga@gmail.com",
    image: "https://paranaflowyoga.in/og-image.jpg",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    areaServed: [
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "Place", name: "NCR" },
    ],
    sameAs: ["https://www.instagram.com/paranaflowyoga/"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "05:00",
      closes: "21:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the cost of yoga classes in Gurgaon?",
        acceptedAnswer: { "@type": "Answer", text: "ParanaflowYoga offers personal yoga sessions starting from ₹1,000 per session. Group and corporate packages are available at discounted rates. Contact us for a custom quote." },
      },
      {
        "@type": "Question",
        name: "Do you offer home yoga classes in Gurgaon?",
        acceptedAnswer: { "@type": "Answer", text: "Yes! We specialize in home yoga classes across all areas of Gurgaon including DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, and Cyber City. Our instructor visits your home at your preferred time." },
      },
      {
        "@type": "Question",
        name: "Who is the yoga instructor at ParanaflowYoga?",
        acceptedAnswer: { "@type": "Answer", text: "Krishan Goyat is a National Yoga Champion with 17+ years of practice and 11+ years of international teaching experience. He provides personalized yoga training in Gurgaon & NCR." },
      },
      {
        "@type": "Question",
        name: "Which areas in Gurgaon do you serve?",
        acceptedAnswer: { "@type": "Answer", text: "We serve all areas in Gurgaon including DLF Phase 1-5, Sohna Road, Golf Course Road, Sector 49-57, MG Road, Cyber City, Udyog Vihar, South City, Nirvana Country, Palam Vihar, and all of NCR." },
      },
    ],
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Best Yoga Teacher in Gurgaon | Home Yoga, Personal Training & Corporate Yoga | ParanaflowYoga";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Looking for the best yoga teacher in Gurgaon? Krishan Goyat — National Yoga Champion with 17+ years experience — offers home yoga, personal training, corporate yoga, weight loss yoga & morning yoga classes in Gurgaon & NCR. Book now!");

    let script = document.getElementById("homepage-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "homepage-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(homepageJsonLd);
    return () => { script?.remove(); };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <GallerySection />
      <WhyChooseSection />
      <ReviewsSection />
      <QuerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
