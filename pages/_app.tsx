// import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import DefaultLayout from "../layouts/default";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/fetcher";
import { FunctionComponent } from "react";
import { NextPage } from "next";
import { AuthProvider } from "../contexts/auth";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import Modal from "../components/Modal";

require("../mocks");

type AppPropsWithLayout = {
  Component: NextPage & { layout?: FunctionComponent };
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <SWRConfig value={{ fetcher }}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <Modal></Modal>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ReduxProvider>
    </SWRConfig>
  );
}
export default MyApp;
