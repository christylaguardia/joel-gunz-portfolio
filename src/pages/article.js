import React from "react"
import Container from "react-bootstrap/Container"
import { TopNav } from "../components/topNav"
import { RichText } from "../components/richText"

export default ({ pageContext: { categories, articles, title, content } }) => (
  <div>
    <TopNav categoryData={categories} articleData={articles} />
    <Container>
      <h1>{title}</h1>
      <RichText text={content} />
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
          content {
            json
          }
        }
      }
    }
  }
`
