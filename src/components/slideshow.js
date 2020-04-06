import React from "react"
import Carousel from "react-bootstrap/Carousel"

export const Slideshow = ({ data }) => (
  <Carousel>
    {data &&
      data.map(asset => {
        if (asset.type === "video") {
          // return <VideoPlayer src={asset.link.url} />
          return (
            <Carousel.Item key={asset.id}>
              <div dangerouslySetInnerHTML={{ __html: asset.embed.embed }} />
            </Carousel.Item>
          )
        }

        const assetTitle = asset.link ? asset.link.title : asset.media.title
        const assetSrc = asset.link ? asset.link.url : asset.media.file.url

        return (
          <Carousel.Item key={asset.id}>
            <img
              className="d-block w-100"
              width={400}
              height={400}
              src={assetSrc}
              alt={assetTitle}
            />
            {/* <Carousel.Caption>
              <p>{assetTitle}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        )
      })}
  </Carousel>
)

/**
 https://mdbootstrap.com/docs/jquery/javascript/carousel/

 <!--Carousel Wrapper-->
<div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
    <li data-target="#video-carousel-example" data-slide-to="1"></li>
    <li data-target="#video-carousel-example" data-slide-to="2"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <video class="video-fluid" autoplay loop muted>
        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="carousel-item">
      <video class="video-fluid" autoplay loop muted>
        <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="carousel-item">
      <video class="video-fluid" autoplay loop muted>
        <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div>
<!--Carousel Wrapper-->
 */
