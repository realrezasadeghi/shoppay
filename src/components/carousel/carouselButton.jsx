import React from "react";
import Button from "../button";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import classNames from "classnames";

function CarouselButton({ type, onClick }) {
  return (
    <Button
      color="gray"
      onClick={onClick}
      circle
      classNameButton={classNames("absolute mb-5 top-1/2 bg-white", {
        "right-1": type === "next",
      })}
      iconOnly
    >
      {type === "next" ? (
        <MdOutlineKeyboardArrowRight size={25} />
      ) : (
        <MdOutlineKeyboardArrowLeft size={25} />
      )}
    </Button>
  );
}

export default CarouselButton;
