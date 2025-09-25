import ProductCard from "./ProductCard";
import { products } from "../data/products";
import type { Category } from "../types";

interface ProductGridProps {
  category: Category;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const items = products.filter((p) => p.category === category);

  return (
    <div className="catalogo">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      {items.length === 0 && (
        <p style={{ color: "#aaa" }}>Nenhum produto nesta categoria ainda.</p>
      )}
    </div>
  );
}
