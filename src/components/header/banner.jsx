import Link from "next/link";
import Image from "next/image";

function Banner() {
  return (
    <div className={'w-full relative h-10'}>
      <Link href={"/browse"}>
        <Image fill alt="Ad Image" src={"/images/ad.jpg"} />
      </Link>
    </div>
  );
}

export default Banner;
