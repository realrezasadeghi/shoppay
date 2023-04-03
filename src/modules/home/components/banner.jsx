import React from "react";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { BANNERS } from "@/constants/home";

function Banner() {
  return (
    <div className="flex-1">
      <Carousel
        slides={BANNERS}
        renderItem={(slide) => (
          <div className="relative h-80 rounded flex-[0_0_100%]">
            <Image
              fill
              alt={slide.alt}
              src={`/images/banner/${slide.image}.jpg`}
              className="w-full h-full rounded object-cover"
            />
          </div>
        )}
      />
    </div>
  );
}

export default Banner;
