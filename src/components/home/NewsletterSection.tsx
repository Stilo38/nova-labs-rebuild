import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone) {
      toast.success("Thanks for subscribing!");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <div className="w-16 h-16 mx-auto mb-6 text-accent">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,10 L70,30 L90,20 L80,40 L100,50 L80,60 L90,80 L70,70 L50,90 L30,70 L10,80 L20,60 L0,50 L20,40 L10,20 L30,30 Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            STAY CONNECTED
          </h2>

          <p className="text-muted-foreground mb-8">We respect your inbox!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-background"
            />
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              SIGN ME UP!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
