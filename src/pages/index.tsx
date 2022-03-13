import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

// React.FC<PageProps<DataProps>>
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  )
}

export default IndexPage
