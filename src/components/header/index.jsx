import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/browse"}>
        <div className={styles.ad}>
          <Image fill alt="Ad Image" src={"/images/ad.jpg"} />
        </div>
      </Link>
    </header>
  );
}

export default Header;
