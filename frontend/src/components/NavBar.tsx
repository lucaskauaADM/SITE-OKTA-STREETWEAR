import type { Category } from "../types";

interface NavbarProps {
  selected: Category;
  onSelect: (cat: Category) => void;
}

const CATEGORIES: Category[] = ["camisetas", "bermudas", "calcas", "acessorios"];

export default function Navbar({ selected, onSelect }: NavbarProps) {
  return (
    <nav className="nav">
      <div className="logo">OKTA STREETWEAR</div>
      <ul>
        {CATEGORIES.map((cat) => (
          <li key={cat}>
            <button
              className={`nav-link ${selected === cat ? "active" : ""}`}
              onClick={() => onSelect(cat)}
              aria-current={selected === cat ? "page" : undefined}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="carrinho" role="button" aria-label="Carrinho">🛒</div>
    </nav>
  );
}
