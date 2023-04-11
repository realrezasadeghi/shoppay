import React from "react";
import { FcFlashOn } from "react-icons/fc";
import ProductCard from "@/components/productCard";
import { FLASH_DEALS } from "@/constants/home";
import Carousel from "@/components/carousel";

function FlashDeals() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="bg-slate-900 rounded p-4">
        <div className="flex items-center">
          <FcFlashOn size={40} />
          <h3 className="font-bold uppercase text-white tracking-widest">
            Flash Deals
          </h3>
        </div>
      </div>
      <Carousel
        slides={FLASH_DEALS}
        renderItem={(slide) => <ProductCard {...slide} />}
      />
    </div>
  );
}

export default FlashDeals;
