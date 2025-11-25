import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Rule Your NovaLabs
          <br />
          <span className="italic text-accent drop-shadow-[0_0_15px_rgba(142,215,218,0.3)]">With Modern Peptides</span>
        </h1>

        <Link to="/shop">
          <Button variant="hero" size="lg" className="rounded-full pl-8 pr-3 py-3 text-lg mt-8 group">
            <span className="relative z-10 transition-colors duration-300 mr-2">Explore All Products</span>
            <span className="relative z-10 bg-black rounded-full p-3 group-hover:bg-black transition-colors duration-300">
              <ArrowRight className="h-5 w-5 text-white group-hover:text-white transition-colors duration-300" />
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};
