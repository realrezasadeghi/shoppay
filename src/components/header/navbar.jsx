import Link from "next/link";
import styles from "./styles.module.scss";
import {
  MdHelp,
  MdSecurity,
  MdFavorite,
  MdAccountCircle,
  MdHomeRepairService,
} from "react-icons/md";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import Image from "next/image";

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
    icon: <MdFavorite color="red" />,
  },
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <nav className={styles.navbar__nav}>
          <Link href={"/"} className={styles.navbar__logo}>
            <h3>ShopPay</h3>
          </Link>
          <ul className={styles.navbar__list}>
            {NAVBAR_LIST.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.navbar__list_item}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
