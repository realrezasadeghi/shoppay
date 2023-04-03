import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Avatar({ file = "/images/avatar.png" }) {
  const { data } = useSession();

  return (
    <img
      width={50}
      height={50}
      //   placeholder="blur"
      className="rounded-full"
      src={data?.user?.image || file}
      //   blurDataURL="/images/avatar.png"
      alt={`Avatar-${data?.user?.email || ""}`}
    />
  );
}

export default Avatar;
