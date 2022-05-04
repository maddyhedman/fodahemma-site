import MidwifeComponent from "../components/MidwifeComponent";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const midwifeData = await client.getEntries({ content_type: "midwifePage" });

  return {
    props: {
      midwife: midwifeData,
    },
  };
}

function Midwife({ midwife }) {
  const data = midwife.items[0].fields;
  return (
    <div>
      <MidwifeComponent midwife={data} />
    </div>
  );
}

export default Midwife;
