import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Send, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

type Review = {
  name: string;
  initials: string;
  role: string;
  text: string;
  rating: number;
};

const defaultReviews: Review[] = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Yoga Student · 2 Years",
    text: "Krishan sir's therapeutic yoga completely healed my chronic back pain. His personalized attention and deep knowledge make every session transformative.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    role: "Yoga Student · 1.5 Years",
    text: "I lost 12 kg in 6 months with his weight loss yoga program. The home sessions are so convenient and Krishan sir keeps you motivated throughout.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    initials: "AG",
    role: "Yoga Student · 3 Years",
    text: "The meditation and pranayama sessions have changed my life. I sleep better, feel calmer, and my focus has improved dramatically. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    role: "Yoga Student · 1 Year",
    text: "Best yoga trainer in Gurgaon! His international experience shows in his teaching style. My flexibility and strength have improved beyond expectations.",
    rating: 5,
  },
  {
    name: "Neha Kapoor",
    initials: "NK",
    role: "Yoga Student · 2.5 Years",
    text: "Group sessions with Krishan sir are energizing and fun. He corrects every posture personally and makes sure everyone progresses at their own pace.",
    rating: 5,
  },
  {
    name: "Deepak Verma",
    initials: "DV",
    role: "Yoga Student · 8 Months",
    text: "After my knee surgery, therapeutic yoga with Krishan sir was the best decision. My knee mobility is better than before and I feel stronger every day.",
    rating: 5,
  },
];

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative bg-dark-surface-light border border-gold/10 rounded-2xl p-7 hover:border-gold/30 transition-all duration-500 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: isVisible ? `${(index % 3) * 120 + 100}ms` : undefined }}
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-500" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
        {Array.from({ length: 5 - review.rating }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-cream/20" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-cream/75 text-sm leading-relaxed text-pretty mb-6 italic">
        "{review.text}"
      </p>

      {/* Divider */}
      <div className="w-10 h-px bg-gold/30 mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center text-gold font-heading font-semibold text-sm shrink-0">
          {review.initials}
        </div>
        <div>
          <p className="font-medium text-cream text-sm leading-tight">{review.name}</p>
          <p className="text-xs text-cream/40 mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

const StarRating = ({ rating, onRate }: { rating: number; onRate: (r: number) => void }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              star <= (hover || rating)
                ? "fill-gold text-gold"
                : "text-cream/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !text.trim() || rating === 0) {
      toast({
        title: "Please fill all fields",
        description: "Name, review, and rating are required.",
        variant: "destructive",
      });
      return;
    }

    if (name.trim().length > 100 || text.trim().length > 500) {
      toast({
        title: "Input too long",
        description: "Please keep your name under 100 and review under 500 characters.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const initials = name
      .trim()
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newReview: Review = {
      name: name.trim(),
      initials,
      role: "Yoga Student",
      text: text.trim(),
      rating,
    };

    setTimeout(() => {
      setReviews((prev) => [newReview, ...prev]);
      setName("");
      setText("");
      setRating(0);
      setShowForm(false);
      setSubmitting(false);
      toast({
        title: "Thank you! 🙏",
        description: "Your review has been submitted successfully.",
      });
    }, 600);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-gold/5" />
      <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Testimonials</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-cream text-balance">
            What My Students Say
          </h2>
          <p className="text-cream/60 text-lg text-pretty mb-8">
            Real experiences from people who transformed their lives through yoga.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => setShowForm(!showForm)}
              variant={showForm ? "outline" : "default"}
              className={`rounded-full px-8 ${
                showForm
                  ? "border-gold/30 text-cream hover:bg-gold/10"
                  : "bg-gold hover:bg-gold-light text-dark-surface font-semibold"
              }`}
            >
              {showForm ? "Cancel" : "Write a Review"}
            </Button>
            <a
              href="https://g.page/r/CVE_a_c45a4WEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full px-8 gap-2 border-gold/30 text-cream hover:bg-gold/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Rate Us on Google
              </Button>
            </a>
          </div>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className={`max-w-lg mx-auto mb-16 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="bg-dark-surface-light border border-gold/15 rounded-2xl p-8 shadow-sm space-y-5">
              <div>
                <label className="text-sm font-medium text-cream mb-2 block">Your Name</label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="rounded-xl bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-cream mb-2 block">Rating</label>
                <StarRating rating={rating} onRate={setRating} />
              </div>
              <div>
                <label className="text-sm font-medium text-cream mb-2 block">Your Review</label>
                <Textarea
                  placeholder="Share your experience..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={500}
                  rows={4}
                  className="rounded-xl resize-none bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
                />
                <p className="text-xs text-cream/40 mt-1 text-right">{text.length}/500</p>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl gap-2 bg-gold hover:bg-gold-light text-dark-surface font-semibold"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
