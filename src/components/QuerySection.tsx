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
    <section id="query" className="py-24 lg:py-32 bg-muted/40" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Send a Query
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-balance">
            Have a Question?
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className={`max-w-lg mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-sm space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Name <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={15}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Email <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                placeholder="Tell us about your query..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                rows={4}
                className="rounded-xl resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">{message.length}/500</p>
            </div>
            <Button type="submit" disabled={submitting} className="w-full rounded-xl gap-2">
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
