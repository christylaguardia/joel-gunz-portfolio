import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import "./projects.css"

export const Projects = ({ data }) => (
  <Container fluid className="container">
    <Row>
      {data &&
        data.edges.map(({ node }) => (
          <Col key={node.id}>
            <Link to={`/${node.slug}`}>
              <Card className="bg-dark text-white">
                {node.media && (
                  <Card.Img
                    src={node.media[0].file.url}
                    alt={node.media[0].title}
                  />
                )}
                <Card.ImgOverlay>
                  <Card.Title>{node.projectName}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  </Container>
)
