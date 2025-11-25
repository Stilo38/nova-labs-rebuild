import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">The Future of Research
With Modern Peptides<br />
          <span className="italic text-accent drop-shadow-[0_0_15px_rgba(142,215,218,0.3)]">With Modern Peptides</span>
        </h1>

        <Link to="/shop">
          <Button variant="gradient" size="lg" className="rounded-full px-8 py-6 text-lg mt-8 group">
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>;
};