import QandAComponent from "../components/QandAComponent"
import { createClient } from "contentful";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const qandaData = await client.getEntries({content_type: 'qaPage'})


  return {
    props: {
        qanda: qandaData
    }
  }
}

function QandA({qanda}) {
    
    const data = qanda.items[0].fields
    return (
        <div> 
            <QandAComponent qanda={data} />
        </div>
    )
}

export default QandA