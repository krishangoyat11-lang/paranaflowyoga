import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { setPageSeo } from "@/lib/seo";

const About = () => {
  useEffect(() => {
    setPageSeo({
      title: "About Krishan Goyat | ParanaflowYoga Gurgaon",
      description:
        "Learn about Krishan Goyat, National Yoga Champion and founder of ParanaflowYoga, offering personal home yoga classes in Gurgaon and NCR.",
      canonicalPath: "/about",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <WhyChooseSection />
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;