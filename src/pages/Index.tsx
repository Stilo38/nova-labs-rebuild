import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PurposeSection } from "@/components/home/PurposeSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main>
        <HeroSection />
        <CollectionSection />
        <ProductShowcase />
        <PurposeSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
