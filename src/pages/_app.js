import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import "@/styles/output.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
