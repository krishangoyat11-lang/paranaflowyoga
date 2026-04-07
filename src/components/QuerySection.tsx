import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const QuerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number, and message are required.",
        variant: "destructive",
      });
      return;
    }

    if (phone.trim().length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const whatsappMessage = encodeURIComponent(
      `Hi, I'm ${name.trim()}.\nPhone: ${phone.trim()}${email.trim() ? `\nEmail: ${email.trim()}` : ""}\n\n${message.trim()}`
    );
    const whatsappUrl = `https://wa.me/918950622342?text=${whatsappMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
      toast({
        title: "Redirecting to WhatsApp 🙏",
        description: "Your query is being sent via WhatsApp.",
      });
    }, 400);
  };

  return (
    <section id="query" className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className={`text-center max-w-xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Send a Query</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-cream text-balance">
            Have a Question?
          </h2>
          <p className="text-cream/60 text-lg text-pretty">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className={`max-w-lg mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <form onSubmit={handleSubmit} className="bg-dark-surface-light border border-gold/15 rounded-2xl p-8 shadow-sm space-y-5">
            <div>
              <label className="text-sm font-medium text-cream mb-2 block">
                Name <span className="text-gold">*</span>
              </label>
              <Input
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="rounded-xl bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-cream mb-2 block">
                Phone Number <span className="text-gold">*</span>
              </label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={15}
                className="rounded-xl bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-cream mb-2 block">
                Email <span className="text-cream/40">(optional)</span>
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="rounded-xl bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-cream mb-2 block">
                Message <span className="text-gold">*</span>
              </label>
              <Textarea
                placeholder="Tell us about your query..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                rows={4}
                className="rounded-xl resize-none bg-dark-surface border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold/50"
              />
              <p className="text-xs text-cream/40 mt-1 text-right">{message.length}/500</p>
            </div>
            <Button type="submit" disabled={submitting} className="w-full rounded-xl gap-2 bg-gold hover:bg-gold-light text-dark-surface font-semibold">
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Query"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;
