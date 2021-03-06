import Head from "next/head";
import styles from "../styles/Home.module.css";

import { createClient } from "contentful";
import HomeComponent from "../components/HomeComponent";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const homePage = await client.getEntries({ content_type: "homePage" });

  return {
    props: {
      homePage: homePage.items,
    },
  };
}

export default function Home({ homePage }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Föda Hemma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent home={homePage} />
    </div>
  );
}
