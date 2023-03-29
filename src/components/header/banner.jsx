import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <Link href={"/browse"}>
        <Image fill alt="Ad Image" src={"/images/ad.jpg"} />
      </Link>
    </div>
  );
}

export default Banner;
