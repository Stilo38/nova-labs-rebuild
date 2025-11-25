import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/lib/mockProducts";

export const ProductShowcase = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everyday Routine <span className="italic text-accent">Heroes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {mockProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
