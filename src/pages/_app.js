import wrapper from "@/store";
import MainLayout from "@/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as StoreProvider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "@/assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({});

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <StoreProvider store={store}>
          <QueryClientProvider client={queryClient}>
            <MainLayout>
              <Component {...pageProps} />
              <ToastContainer />
            </MainLayout>
          </QueryClientProvider>
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
