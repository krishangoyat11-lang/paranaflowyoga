import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { setPageSeo } from "@/lib/seo";

const Services = () => {
  useEffect(() => {
    setPageSeo({
      title: "Yoga Services Gurgaon | ParanaflowYoga",
      description:
        "Explore home yoga, personal yoga training, corporate yoga, weight loss yoga, morning yoga and pranayama services in Gurgaon by Krishan Goyat.",
      canonicalPath: "/services",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;