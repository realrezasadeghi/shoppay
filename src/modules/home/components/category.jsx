import React from "react";
import { CATEGORIES } from "@/constants/home";
import { FaAngleRight } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import Link from "next/link";

function Category() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <BiCategoryAlt className="text-amber-500"/>
        <span className="font-bold uppercase">My categories</span>
      </div>
      <ul>
        {CATEGORIES.map((category) => (
          <li
            key={category.name}
            className="rounded-sm transition hover:bg-gray-200 mt-1 p-2"
          >
            <Link href={category.link}>
              <div className="flex items-center gap-2">
                {category.icon}
                <span className="text-sm text-gray-500 flex-1 whitespace-nowrap overflow-hidden">
                  {category.name}
                </span>
                <FaAngleRight className="text-gray-500" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
