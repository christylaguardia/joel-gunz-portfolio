import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { TopNav } from "../components/topNav"
import { Gallery } from "../components/gallery"
import { Slideshow } from "../components/slideshow"
import { RichText } from "../components/richText"

export default ({
  pageContext: {
    categories,
    projectName,
    description,
    mediaDisplay = "slideshow",
    media,
    ctas,
  },
}) => (
  <div>
    <TopNav data={categories} />
    <Container>
      {mediaDisplay === "gallery" ? (
        <Gallery data={media} />
      ) : (
        <Slideshow data={media} />
      )}
      <RichText text={description} />
      {ctas &&
        ctas.map(({ id, cta, ctaUrl }) => (
          <Button key={id} variant="primary" href={ctaUrl}>
            {cta}
          </Button>
        ))}
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
    allContentfulProject(filter: { visible: { eq: true } }) {
      edges {
        node {
          id
          projectName
          slug
          description {
            json
          }
          mediaDisplay
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
