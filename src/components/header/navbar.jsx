import Link from "next/link";
import {
  MdHelp,
  MdSecurity,
  MdFavorite,
  MdHomeRepairService,
  MdAccountCircle,
} from "react-icons/md";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";

const NAVBAR_LIST = [
  {
    id: 1,
    title: "",
    href: "",
    icon: "",
  },
  {
    id: 2,
    href: "/protection",
    icon: <MdSecurity />,
    title: "Buyer Protection",
  },
  {
    id: 3,
    href: "/service",
    title: "Custom Service",
    icon: <MdHomeRepairService />,
  },
  {
    id: 4,
    href: "/help",
    title: "Help",
    icon: <MdHelp />,
  },
  {
    id: 5,
    title: "Wishlist",
    href: "/wishlist",
    icon: <MdFavorite />,
  },
];

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <div className={"w-full bg-slate-900"}>
      <div className={"container mx-auto"}>
        <nav className={"w-full flex items-center justify-between p-2"}>
          <Link href="/">
            <Image
              width={150}
              height={50}
              alt="logo shop pay"
              src={"/images/logo.png"}
            />
          </Link>
          <ul className={"flex items-center gap-4"}>
            {NAVBAR_LIST.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={
                    "flex items-center gap-1 text-zinc-400 transition hover:text-white"
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={"flex items-center gap-2 text-white p-2"}>
            {status === "authenticated" ? (
              <>
                <img
                  width={40}
                  height={40}
                  src={session.user.image}
                  alt={session.user.email}
                  className={"rounded-full"}
                />
                <span>{session.user.name || session.user.email}</span>
              </>
            ) : (
              <>
                <MdAccountCircle size={40} color={"orange"} />
                <span>Account</span>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
