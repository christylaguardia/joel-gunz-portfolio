import React from "react"
import Carousel from "react-bootstrap/Carousel"

export const Slideshow = ({ data }) => (
  <Carousel>
    {data &&
      data.map(({ title, file: { url } }) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={400}
            height={400}
            src={url}
            alt={title}
          />
          <Carousel.Caption>
            <p>{title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
  </Carousel>
)
