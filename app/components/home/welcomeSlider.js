"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const WelcomeSlider = () => {
  const autoplay = Autoplay();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    autoplay,
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="./images/home/welcome/wel1.jpg" alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src="./images/home/welcome/wel2.jpg" alt="Slide 2" />
        </div>
        <div className="embla__slide">
          <img src="./images/home/welcome/wel3.jpeg" alt="Slide 3" />
        </div>
        <div className="embla__slide">
          <img src="./images/home/welcome/wel4.jpg" alt="Slide 4" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSlider;

