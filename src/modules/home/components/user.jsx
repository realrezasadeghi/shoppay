import React from "react";
import Avatar from "@/components/avatar";
import { useSession } from "next-auth/react";
import { RiArrowRightLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdOutlineSettings } from "react-icons/md";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { TbNotes } from "react-icons/tb";
import Carousel from "@/components/carousel";
import { ITEMS_USER } from "@/constants/home";
import Image from "next/image";

function User() {
  const router = useRouter();
  const { data } = useSession();
  const ACTIONS_USER = [
    {
      id: 1,
      icon: <MdOutlineFavoriteBorder />,
      href: "/favorites",
    },
    {
      id: 1,
      icon: <TbNotes />,
      href: "/notes",
    },
    {
      id: 1,
      icon: <MdOutlineSettings />,
      href: "/settings",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-bold uppercase w-full overflow-hidden whitespace-nowrap text-ellipsis">
          Buyer club benefits
        </h3>
        <RiArrowRightLine size={25} />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <Avatar />
        <span className="font-bold">{data?.user?.name}</span>
        <div className="flex items-center gap-2">
          {ACTIONS_USER.map((action) => (
            <Button
              circle
              iconOnly
              key={action.id}
              classNameButton={"hover:shadow"}
              onClick={() => router.push(action.href)}
            >
              {action.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
