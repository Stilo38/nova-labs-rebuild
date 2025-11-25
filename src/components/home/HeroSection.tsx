import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Rule Your NovaLabs
          <br />
          <span className="italic text-accent">With Modern Peptides</span>
        </h1>

        <Link to="/shop">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg mt-8 group">
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
