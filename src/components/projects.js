import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Card from "react-bootstrap/Card"
import "./projects.css"

export const Projects = ({ data }) => {
  return (
    <Container fluid className="container">
      <Row>
        {data &&
          data.edges.map(({ node }) => {
            // const asset = node.assets[0] // Use this first asset as the card image
            // const assetTitle = asset.link ? asset.link.title : asset.media.title
            // const assetSrc = asset.link ? asset.link.url : asset.media.file.url

            return (
              <Col key={node.id}>
                <Link to={`/${node.slug}`}>
                  {node.projectName}
                  {/* <Card className="bg-dark text-white">
                    {asset && <Card.Img src={assetSrc} alt={assetTitle} />}
                    <Card.ImgOverlay>
                      <Card.Title>{node.projectName}</Card.Title>
                    </Card.ImgOverlay>
                  </Card> */}
                </Link>
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}
