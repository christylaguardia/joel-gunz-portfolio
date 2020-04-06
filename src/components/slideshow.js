import React from "react"
import Carousel from "react-bootstrap/Carousel"

export const Slideshow = ({ data }) => {
  const assets = data.filter(asset => asset.type !== "video") // skipping videos for now

  return (
    <Carousel>
      {assets &&
        assets.map(asset => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={400}
              height={400}
              src={asset.url || asset.media.file.url}
              alt={asset.title}
            />
            <Carousel.Caption>
              <p>{asset.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}
