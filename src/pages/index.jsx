import FlashDeals from "@/modules/home/components/flashDeals";
import Main from "@/modules/home/components/main";

function HomePage() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Main />
        <FlashDeals />
      </div>
    </div>
  );
}

export default HomePage;
