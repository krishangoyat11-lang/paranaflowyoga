import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { setPageSeo } from "@/lib/seo";

const Contact = () => {
  useEffect(() => {
    setPageSeo({
      title: "Contact ParanaflowYoga | Gurgaon Yoga",
      description:
        "Contact Krishan Goyat for yoga classes in Gurgaon. Call or WhatsApp +91 8950622342 for home yoga and personal training.",
      canonicalPath: "/contact",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;