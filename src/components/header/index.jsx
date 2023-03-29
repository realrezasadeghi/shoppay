import Banner from "./banner";
import Navbar from "./navbar";
import SearchBar from "./searchBar";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Banner />
      <Navbar />
      <SearchBar />
    </header>
  );
}

export default Header;
