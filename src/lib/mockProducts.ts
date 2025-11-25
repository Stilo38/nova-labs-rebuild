export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  price: number;
  currency: string;
  image?: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "GHK-Cu 1% Peptide Serum",
    description: "Advanced copper peptide serum for skin rejuvenation and anti-aging. Clinically proven to improve skin elasticity and reduce fine lines.",
    handle: "ghk-cu-peptide-serum",
    price: 49.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop"
  },
  {
    id: "2",
    title: "Matrixyl 3000 Peptide Complex",
    description: "Powerful peptide complex that stimulates collagen production and improves skin texture. Perfect for daily use.",
    handle: "matrixyl-3000-peptide-complex",
    price: 39.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop"
  },
  {
    id: "3",
    title: "Argireline Peptide Solution",
    description: "Natural alternative to botox. Reduces the appearance of expression lines and wrinkles with regular use.",
    handle: "argireline-peptide-solution",
    price: 34.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1556228841-b5b8ea53a0db?w=500&h=500&fit=crop"
  },
  {
    id: "4",
    title: "Hair Growth Peptide Serum",
    description: "Advanced peptide formula designed to promote hair growth, strengthen follicles, and improve scalp health.",
    handle: "hair-growth-peptide-serum",
    price: 54.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500&h=500&fit=crop"
  },
  {
    id: "5",
    title: "Peptide Eye Cream",
    description: "Targets fine lines, dark circles, and puffiness around the delicate eye area with specialized peptide technology.",
    handle: "peptide-eye-cream",
    price: 44.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&h=500&fit=crop"
  },
  {
    id: "6",
    title: "Collagen Boost Peptide Cream",
    description: "Rich moisturizing cream packed with collagen-boosting peptides for firmer, more youthful-looking skin.",
    handle: "collagen-boost-peptide-cream",
    price: 59.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&h=500&fit=crop"
  }
];

export const getProductByHandle = (handle: string): Product | undefined => {
  return mockProducts.find(p => p.handle === handle);
};
