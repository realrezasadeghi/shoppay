import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselDots from "./carouselDots";
import CarouselButton from "./carouselButton";

const Carousel = ({ options, slides = [], renderItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const onNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <React.Fragment key={index}>{renderItem(slide)}</React.Fragment>
          ))}
        </div>
        <CarouselDots
          items={scrollSnaps}
          selectedIndex={selectedIndex}
          onClick={(index) => scrollTo(index)}
        />
        {/* <CarouselButton type={"next"} onClick={onNext} /> */}
        {/* <CarouselButton type={"prev"} onClick={onPrev} /> */}
      </div>
    </div>
  );
};

export default Carousel;
