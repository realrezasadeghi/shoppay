import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaOpencart, FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <Link href="/" className={styles.searchbar__logo}>
        <Image
          width={200}
          height={50}
          alt="logo shop pay"
          src={"/images/logo.png"}
        />
      </Link>
      <div className={styles.searchbar__main}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchbar__input}
        />
        <button className={styles.searchbar__button}>
          <FaSearch />
        </button>
      </div>
      <div className={styles.searchbar__cart}>
        <Link href={"/cart"}>
          <FaOpencart color="#000000" />
          <span className={styles.searchbar__cart_badge}>0</span>
        </Link>
      </div>
    </div>
  );
}
export default SearchBar;
