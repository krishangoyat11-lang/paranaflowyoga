import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "benefits-of-pranayama",
    title: "Benefits of Pranayama: How Breathing Exercises Transform Your Health",
    excerpt:
      "Discover the powerful health benefits of Pranayama — from stress relief and better sleep to improved lung capacity and mental clarity. Learn how daily breathing exercises can transform your life.",
    date: "2026-04-16",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Yoga Blog — Tips, Benefits & Wellness | ParanaflowYoga Gurgaon";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Read expert yoga articles by Krishan Goyat — pranayama benefits, weight loss tips, morning routines & more. Professional yoga insights from Gurgaon's top instructor."
      );
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold">Blog</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream mb-4 text-balance">
            Yoga Tips & Wellness Insights
          </h1>
          <p className="text-cream/60 text-lg">
            Expert articles on yoga, pranayama, and holistic health by Krishan Goyat.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-28 bg-dark-surface-light">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-dark-surface border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-cream/40 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-cream/50 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
