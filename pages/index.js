import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import HomeComponent from "../components/HomeComponent";

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Föda Hemma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent/>

    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
