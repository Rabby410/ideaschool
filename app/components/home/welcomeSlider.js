"use client";
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import classNames from 'classnames';

const WelcomeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const images = [
    '/images/home/welcome/wel1.jpg',
    '/images/home/welcome/wel2.jpg',
    '/images/home/welcome/wel4.jpg',
  ];

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const scrollTo = (index) => emblaApi.scrollTo(index);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative min-w-full h-96" key={index}>
              <img src={src} alt={`Welcome ${index + 1}`} fill style={{ objectFit: 'cover' }} sizes="100vw" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            className={classNames('w-3 h-3 rounded-full', {
              'bg-blue-500': selectedIndex === index,
              'bg-gray-400': selectedIndex !== index,
            })}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeSlider;
