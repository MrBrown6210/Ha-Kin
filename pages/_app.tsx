// import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/fetcher";

require("../mocks");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
export default MyApp;
