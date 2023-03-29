import Banner from "./banner";
import Navbar from "./navbar";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Banner />
      <Navbar />
    </header>
  );
}

export default Header;
