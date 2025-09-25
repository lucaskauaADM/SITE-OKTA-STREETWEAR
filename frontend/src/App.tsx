import { useState } from "react";
import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import type { Category } from "./types";

export default function App() {
  const [selected, setSelected] = useState<Category>("camisetas");

  return (
    <>
      <Navbar selected={selected} onSelect={setSelected} />
      <header className="header">Catálogo drip Streetwear</header>

      {/* Carrossel do topo */}
      <section className="section">
        <Carousel
          slides={[
            { src: "/img/camisa01.jpg", descricao: "Camiseta Street Trip" },
            { src: "/img/bone01.jpg", descricao: "Boné Streetwear" },
            { src: "/img/camisa02.jpg", descricao: "Camiseta Oversized" },
          ]}
          interval={5000}
        />
      </section>

      {/* Catálogo filtrado por categoria */}
      <section className="section">
        <ProductGrid category={selected} />
      </section>

      <Footer />
    </>
  );
}
