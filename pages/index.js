import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="container w-max h-screen">
      <Head>
        <title>Hoc Vu Van</title>
        <meta
          name="description"
          content="CV - Vu Van Hoc, Web Fullstack Developer, Twendeesoft"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </div>
  );
}
