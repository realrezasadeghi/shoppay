import wrapper from "@/store";
import {Provider as StoreProvider} from "react-redux";
import {SessionProvider} from 'next-auth/react'

import "@/assets/styles/global.scss";
import MainLayout from "@/layouts/MainLayout";

export default function App({Component, ...rest}) {
    const {store, props} = wrapper.useWrappedStore(rest);
    const {pageProps} = props;

    return (
        <>
            <SessionProvider session={pageProps.session}>
                <StoreProvider store={store}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </StoreProvider>
            </SessionProvider>
        </>
    );
}
