import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const reviews = [
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

const ReviewCard = ({ review, delay }: { review: typeof reviews[0]; delay: string }) => {
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
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
        "{review.text}"
      </p>
    </div>
  );
};

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

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
          <p className="text-muted-foreground text-lg text-pretty">
            Real experiences from people who transformed their lives through yoga.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.name}
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
