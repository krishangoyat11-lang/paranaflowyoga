import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Send } from "lucide-react";
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

const ReviewCard = ({ review, delay }: { review: Review; delay: string }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
        isVisible ? `animate-fade-up ${delay}` : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-semibold text-lg shrink-0">
          {review.initials}
        </div>
        <div>
          <p className="font-medium text-foreground leading-tight">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
        {Array.from({ length: 5 - review.rating }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
        "{review.text}"
      </p>
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
                ? "fill-accent text-accent"
                : "text-muted-foreground/30"
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
    <section id="reviews" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Student Reviews
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-balance">
            What My Students Say
          </h2>
          <p className="text-muted-foreground text-lg text-pretty mb-8">
            Real experiences from people who transformed their lives through yoga.
          </p>
          <Button
            onClick={() => setShowForm(!showForm)}
            variant={showForm ? "outline" : "default"}
            className="rounded-full px-8"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className={`max-w-lg mx-auto mb-16 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Rating</label>
                <StarRating rating={rating} onRate={setRating} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Your Review</label>
                <Textarea
                  placeholder="Share your experience..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={500}
                  rows={4}
                  className="rounded-xl resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">{text.length}/500</p>
              </div>
              <Button type="submit" disabled={submitting} className="w-full rounded-xl gap-2">
                <Send className="w-4 h-4" />
                {submitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              review={review}
              delay={`delay-${(i % 3) * 100 + 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
