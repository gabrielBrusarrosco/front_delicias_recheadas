import React, { useState, useEffect } from "react";
import "./AuthCarousel.scss";

import imgGato1 from "../../assets/images/gato_1.jpg";
import imgGato2 from "../../assets/images/gato_2.jpg";
import imgGato3 from "../../assets/images/gato_3.jpg";

const carouselSlides = [
  {
    title: "Bem-vindo(a) ao DelíciasRecheadas",
    description:
      "Descubra sabores incríveis e experiências gastronômicas únicas. Tudo o que você precisa para satisfazer seu paladar está aqui.",
    image: imgGato1,
  },
  {
    title: "Produtos Artesanais",
    description:
      "Feitos com ingredientes selecionados e muito carinho. Qualidade e sabor em cada mordida.",
    image: imgGato2,
  },
  {
    title: "Entrega Rápida",
    description:
      "Receba seus produtos favoritos no conforto da sua casa com agilidade e segurança.",
    image: imgGato3,
  },
];

export default function AuthCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auth-carousel">
      <div className="carousel-image-wrapper">
        <img
          src={carouselSlides[activeSlide].image}
          alt={carouselSlides[activeSlide].title}
          className="carousel-image"
        />
      </div>

      <div className="carousel-content">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`carousel-slide ${
              index === activeSlide ? "active" : ""
            }`}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
