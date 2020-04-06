import React from "react"
import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"
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
      {assetDisplay === "gallery" ? (
        <Gallery data={assets} />
      ) : (
        <Slideshow data={assets} />
      )}
      <RichText text={description} />
      {/* {ctas &&
        ctas.map(({ id, cta, ctaUrl }) => (
          <Button key={id} variant="primary" href={ctaUrl}>
            {cta}
          </Button>
        ))} */}
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
            url
            media {
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
