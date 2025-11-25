import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-muted-foreground">Explore</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-muted-foreground">Follow Us</h3>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-muted-foreground">Information</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms & Condition</a>
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl font-bold">NovaLabs</div>
        </div>

        <p className="text-lg font-medium mb-6">Backed by Science. Built on Peptides.</p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}, NovaLabs, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
