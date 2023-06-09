import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

function AuthLayout({ title, children }) {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center rounded-full border w-10 h-10">
                <MdKeyboardBackspace size={20} />
              </div>
              <span>We be happy to join us ?</span>
              <Link href={"/"} className={"underline text-blue-500"}>
                <strong>Go Store</strong>
              </Link>
            </div>
            <h1 className={"text-5xl"}>{title}</h1>
            <p className={"text-sm text-gray-400"}>
              Get access to one of the best Eshopping services in the world
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
