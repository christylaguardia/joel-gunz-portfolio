import React from "react"
import Container from "react-bootstrap/Container"
import { TopNav } from "../components/topNav"
import { Gallery } from "../components/gallery"
import { Slideshow } from "../components/slideshow"
import { RichText } from "../components/richText"

export default ({
  pageContext: {
    categories,
    articles,
    projectName,
    description,
    assetDisplay = "slideshow",
    assets,
  },
}) => (
  <div>
    <TopNav categoryData={categories} articleData={articles} />
    <Container>
      <h1>{projectName}</h1>
      {assetDisplay === "gallery" ? (
        <Gallery data={assets} />
      ) : (
        <Slideshow data={assets} />
      )}
      <RichText text={description} />
    </Container>
  </div>
)

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
          description {
            json
          }
          assetDisplay
          assets {
            title
            type
            embed {
              embed
            }
            media {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
