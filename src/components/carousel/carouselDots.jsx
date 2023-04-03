import classNames from "classnames";
import React from "react";

function CarouselDots({ items, selectedIndex, onClick }) {
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {items.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={classNames(
              "h-2 w-2 rounded-full transition-all duration-300 bg-amber-400",
              {
                "w-5": selected,
                "opacity-50": !selected,
              }
            )}
          />
        );
      })}
    </div>
  );
}

export default CarouselDots;
