import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Gallery = ({ data }) => (
  <Row>
    {data.map(({ title, file: { url } }) => (
      <Col>
        <img
          className="d-block w-100"
          width={200}
          height={200}
          src={url}
          alt={title}
        />
      </Col>
    ))}
  </Row>
)
