import { useState } from "react";
import type { Product } from "../types";

const SIZES = ["P", "M", "G", "GG"] as const;
type Size = (typeof SIZES)[number];

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [size, setSize] = useState<Size>("M");
  const [qty, setQty] = useState<number>(1);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.price}</p>

        <div className="controls">
          <label>
            Tamanho:&nbsp;
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as Size)}
            >
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label>
            &nbsp;Qtd:&nbsp;
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => {
                const n = Number(e.target.value);
                setQty(Number.isFinite(n) && n > 0 ? n : 1);
              }}
              style={{ width: 60 }}
            />
          </label>
        </div>

        <button
          className="btn-comprar"
          onClick={() =>
            alert(`Comprar: ${product.name} | Tam: ${size} | Qtd: ${qty}`)
          }
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
