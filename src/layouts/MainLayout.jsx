import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MainLayout({ children }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Shoppay Website E-commerce</title>
        <meta name="description" content="Shoppay a service for sale and buy" />
      </Head>
      <Header />
      <Suspense fallback={<h1>loading...</h1>}>
        <main className={"w-full py-4"}>{children}</main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default MainLayout;
