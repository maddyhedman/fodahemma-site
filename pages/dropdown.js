import { createClient } from "contentful";
import DropDown from "../components/DropDComponent";
import Head from "next/head";

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
  console.log(homePage);
  return (
    <div className={styles.container}>
      <Head>
        <title>Föda Hemma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DropDown home={homePage} />
    </div>
  );
}
