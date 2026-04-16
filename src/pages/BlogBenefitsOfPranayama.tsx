import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, ArrowLeft, Phone } from "lucide-react";

const BlogBenefitsOfPranayama = () => {
  useEffect(() => {
    document.title =
      "Benefits of Pranayama: Breathing Exercises for Health | ParanaflowYoga";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore the top benefits of Pranayama — stress relief, better sleep, improved lung capacity, mental clarity. Expert guide by Krishan Goyat, Gurgaon yoga instructor."
      );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Benefits of Pranayama: How Breathing Exercises Transform Your Health",
      description:
        "Discover the powerful health benefits of Pranayama including stress relief, improved lung capacity, better sleep and mental clarity.",
      author: {
        "@type": "Person",
        name: "Krishan Goyat",
        jobTitle: "National Yoga Champion & Certified Yoga Instructor",
      },
      publisher: {
        "@type": "Organization",
        name: "ParanaflowYoga",
        url: "https://paranaflowyoga.in",
      },
      datePublished: "2026-04-16",
      dateModified: "2026-04-16",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://paranaflowyoga.in/blog/benefits-of-pranayama",
      },
    };

    let script = document.getElementById("blog-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "blog-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    return () => { script?.remove(); };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-gold text-sm mb-6 hover:gap-2.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-cream/40 text-xs mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>16 Apr 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-semibold leading-[1.1] text-cream mb-6 text-balance">
            Benefits of Pranayama: How Breathing Exercises Transform Your Health
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed">
            Pranayama — the ancient yogic art of breath control — is one of the
            most powerful tools for physical and mental well-being. Here's
            everything you need to know about its life-changing benefits.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-dark-surface-light">
        <div className="container max-w-3xl mx-auto prose-custom">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
            alt="Person practicing pranayama breathing exercises during yoga session"
            className="w-full rounded-2xl mb-10 aspect-video object-cover"
          />

          <h2>What is Pranayama?</h2>
          <p>
            Pranayama comes from two Sanskrit words: <em>Prana</em> (life force
            or breath) and <em>Ayama</em> (control or extension). It is the
            fourth limb of Patanjali's Eight Limbs of Yoga and involves
            specific breathing techniques designed to regulate the flow of
            energy in the body.
          </p>
          <p>
            Unlike regular breathing, pranayama involves conscious control of
            inhalation (puraka), retention (kumbhaka), and exhalation (rechaka)
            in specific patterns and rhythms.
          </p>

          <h2>Top 10 Benefits of Pranayama</h2>

          <h3>1. Reduces Stress & Anxiety</h3>
          <p>
            Pranayama activates the parasympathetic nervous system, triggering
            the body's relaxation response. Techniques like <strong>Nadi
            Shodhana</strong> (alternate nostril breathing) and{" "}
            <strong>Bhramari</strong> (humming bee breath) are scientifically
            proven to lower cortisol levels and reduce anxiety.
          </p>

          <h3>2. Improves Lung Capacity</h3>
          <p>
            Regular practice of pranayama exercises like <strong>Kapalabhati</strong>{" "}
            and <strong>Bhastrika</strong> strengthens the respiratory muscles
            and increases lung capacity by up to 15–20%, according to published
            studies.
          </p>

          <h3>3. Better Sleep Quality</h3>
          <p>
            Practising slow-breathing techniques like <strong>Chandra Bhedana</strong>{" "}
            (left-nostril breathing) before bed calms the mind and promotes
            deeper, more restorative sleep — a natural remedy for insomnia.
          </p>

          <h3>4. Enhanced Mental Clarity & Focus</h3>
          <p>
            Controlled breathing increases oxygen supply to the brain, improving
            concentration, memory, and cognitive performance. This is why
            pranayama is recommended before study or work sessions.
          </p>

          <h3>5. Strengthens the Immune System</h3>
          <p>
            Research shows that pranayama reduces inflammation markers and boosts
            immune cell activity. Regular practice helps the body fight
            infections more effectively.
          </p>

          <h3>6. Lowers Blood Pressure</h3>
          <p>
            Slow, deep breathing techniques dilate blood vessels and improve
            circulation, naturally reducing high blood pressure over time. Many
            cardiologists now recommend pranayama as a complementary therapy.
          </p>

          <h3>7. Aids Weight Management</h3>
          <p>
            Techniques like <strong>Kapalabhati</strong> (skull-shining breath)
            stimulate metabolism and abdominal muscles, supporting weight loss
            when combined with asana practice and proper nutrition.
          </p>

          <h3>8. Detoxifies the Body</h3>
          <p>
            Deep breathing expels more carbon dioxide and toxins with each
            exhalation, while improved circulation helps flush waste products
            from tissues more efficiently.
          </p>

          <h3>9. Balances Emotions</h3>
          <p>
            Pranayama regulates the autonomic nervous system, helping manage
            mood swings, irritability, and emotional reactivity. It's a
            powerful tool for emotional resilience.
          </p>

          <h3>10. Spiritual Growth & Self-Awareness</h3>
          <p>
            In the yogic tradition, pranayama is a bridge between the physical
            and spiritual dimensions. Regular practice deepens meditation,
            cultivates inner peace, and enhances self-awareness.
          </p>

          <h2>Best Pranayama Techniques for Beginners</h2>
          <ul>
            <li>
              <strong>Anulom Vilom</strong> — Alternate nostril breathing for
              balance and calm.
            </li>
            <li>
              <strong>Bhramari</strong> — Humming breath for instant stress
              relief.
            </li>
            <li>
              <strong>Ujjayi</strong> — Ocean breath for focus and warmth.
            </li>
            <li>
              <strong>Kapalabhati</strong> — Skull-shining breath for energy
              and detox.
            </li>
            <li>
              <strong>Sheetali</strong> — Cooling breath for calming the body
              in hot weather.
            </li>
          </ul>

          <h2>Learn Pranayama with Expert Guidance in Gurgaon</h2>
          <p>
            At <strong>ParanaflowYoga</strong>, our founder{" "}
            <strong>Krishan Goyat</strong> — a National Yoga Champion with 17+
            years of experience — teaches pranayama as an integral part of every
            session. Whether you're a complete beginner or an advanced
            practitioner, personalised guidance ensures you practise safely and
            effectively.
          </p>
          <p>
            We offer home yoga sessions across Gurgaon — DLF, Sohna Road, Golf
            Course Road, Sector 49–57, and all major localities.
          </p>

          <div className="mt-10 p-6 bg-dark-surface border border-gold/20 rounded-2xl text-center">
            <h3 className="text-cream mb-2">Ready to Experience the Benefits?</h3>
            <p className="text-cream/50 text-sm mb-4">
              Book a personalised pranayama session with Krishan Goyat today.
            </p>
            <a
              href="tel:+918950622342"
              className="inline-flex items-center gap-2 bg-gold text-dark-surface px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 8950622342
            </a>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogBenefitsOfPranayama;
