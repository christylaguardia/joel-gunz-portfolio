import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Gallery = ({ data }) => (
  <Row>
    {data &&
      data.map(asset => {
        const assetTitle = asset.link ? asset.link.title : asset.media.title
        const assetSrc = asset.link ? asset.link.url : asset.media.file.url

        return (
          <Col key={asset.id}>
            <img
              className="d-block w-100"
              width={200}
              height={200}
              src={assetSrc}
              alt={assetTitle}
            />
          </Col>
        )
      })}
  </Row>
)
