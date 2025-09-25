import { useEffect, useState } from "react";
import type { Slide } from "../types";

interface CarouselProps {
  slides: Slide[];
  interval?: number; // ms
}

export default function Carousel({ slides, interval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  // autoplay
  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => clearInterval(id);
  }, [total, interval]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (total === 0) return null;

  return (
    <div className="carousel">
      <button className="btn prev" onClick={prev} aria-label="Anterior">
        &#10094;
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div className="carousel-item" key={i}>
              <img src={s.src} alt={s.descricao ?? `slide-${i + 1}`} />
              {s.descricao && <div className="info">{s.descricao}</div>}
            </div>
          ))}
        </div>
      </div>

      <button className="btn next" onClick={next} aria-label="Próximo">
        &#10095;
      </button>
    </div>
  );
}
