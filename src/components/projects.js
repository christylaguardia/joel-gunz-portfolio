import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import "./projects.css"

export const Projects = ({ data }) => {
  return (
    <Container fluid className="container">
      <Row>
        {data &&
          data.edges.map(({ node }) => {
            const asset = node.assets.find(asset => asset.type !== "video") // skipping videos for now
            const assetSrc = asset.url || asset.media.file.url

            return (
              <Col key={node.id}>
                <Link to={`/${node.slug}`}>
                  <Card className="bg-dark text-white">
                    {asset && <Card.Img src={assetSrc} alt={asset?.title} />}
                    <Card.ImgOverlay>
                      <Card.Title>{node.projectName}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}
