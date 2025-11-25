import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      toast.success("Message sent! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8">We'd love to hear from you</p>

        <div className="bg-card rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 text-accent mb-6">
            <Mail className="h-6 w-6" />
            <a href="mailto:novalabs.help@gmail.com" className="text-lg hover:underline">
              novalabs.help@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Send Message
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            You can also reach us at novalabs.help@gmail.com
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
