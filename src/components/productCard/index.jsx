import Link from "next/link";
import React from "react";
import Button from "@/components/button";
import {TbDiscount2} from "react-icons/tb";

function ProductCard({id, title, image, price, sold, discount}) {
    return (
        <Link href={`/products/${id}`} target="_blank">
            <article className={'flex flex-col gap-1 w-full border p-2 rounded-sm bg-slate-800 w-52'}>
                <img src={image} alt={title} className={'w-full h-44 object-cover'}/>
                <h3 className={'text-white font-light text-lg'}>New Colthes</h3>
                <div className="flex justify-between items-center">
                    <span className={'font-bold text-white text-sm'}>${price}</span>
                    <div className={'flex items-center gap-1'}>
                        <del className={'text-white text-xs'}>{discount}</del>
                        <TbDiscount2 size={15} className={'text-red-500'}/>
                    </div>
                </div>
                <Button label={'Read more'} classNameButton={'w-full bg-blue-500 text-white'}/>
            </article>
        </Link>
    );
}

export default ProductCard;
