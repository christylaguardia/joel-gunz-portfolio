import React from "react"
import { TopNav } from "../components/topNav"
import { Projects } from "../components/projects"
import "./index.css"

// TODO: SEO
// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = ({ data }) => (
  <div className="base">
    <TopNav
      categoryData={data.allContentfulCategory}
      articleData={data.allContentfulArticle}
    />
    <Projects data={data.allContentfulProject} />
  </div>
)

// Can return only the first image?
export const query = graphql`
  {
    allContentfulCategory {
      edges {
        node {
          id
          category
        }
      }
    }
    allContentfulArticle(filter: { visible: { eq: true } }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
    allContentfulProject(filter: { visible: { eq: true } }) {
      edges {
        node {
          id
          projectName
          slug
          media {
            title
            file {
              url
            }
          }
          ctas {
            id
            cta
            ctaUrl
          }
        }
      }
    }
  }
`

export default IndexPage
