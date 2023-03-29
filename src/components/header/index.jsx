import Banner from "./banner";
import Navbar from "./navbar";
import SearchBar from "./searchBar";

function Header() {
  return (
    <header className={'w-full bg-white shadow-sm'}>
      <Banner />
      <Navbar />
      <SearchBar />
    </header>
  );
}

export default Header;
