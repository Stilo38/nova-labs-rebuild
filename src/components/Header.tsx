import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="backdrop-blur-md bg-[var(--header-blur)] border border-border/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-8">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="text-lg hover:text-accent transition-colors">
                Shop
              </Link>
              <Link to="/lab-results" onClick={() => setIsOpen(false)} className="text-lg hover:text-accent transition-colors">
                Lab Results
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-sm hover:text-accent transition-colors">
            Shop
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="text-xl font-bold">NovaLabs</div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/lab-results" className="text-sm hover:text-accent transition-colors">
              Lab Results
            </Link>
            <Link to="/contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
