import Head from "next/head";
import wrapper from "@/store";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

import "@/assets/styles/global.scss";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <Head>
        <title>Shoppay Website E-commerce</title>
        <meta name="description" content="Shoppay a service for sale and buy" />
      </Head>
      <Provider store={store}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
