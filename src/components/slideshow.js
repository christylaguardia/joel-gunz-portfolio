import React from "react"
import ImageGallery from "react-image-gallery"
// import Carousel from "react-bootstrap/Carousel"

// export const Slideshow = ({ data }) => (
//   <Carousel>
//     {data &&
//       data.map(asset => {
//         if (asset.type === "video") {
//           // return <VideoPlayer src={asset.link.url} />
//           return (
//             <Carousel.Item key={asset.id}>
//               <div dangerouslySetInnerHTML={{ __html: asset.embed.embed }} />
//             </Carousel.Item>
//           )
//         }

//         const assetTitle = asset.link ? asset.link.title : asset.media.title
//         const assetSrc = asset.link ? asset.link.url : asset.media.file.url

//         return (
//           <Carousel.Item key={asset.id}>
//             <img
//               className="d-block w-100"
//               width={400}
//               height={400}
//               src={assetSrc}
//               alt={assetTitle}
//             />
//             {/* <Carousel.Caption>
//               <p>{assetTitle}</p>
//             </Carousel.Caption> */}
//           </Carousel.Item>
//         )
//       })}
//   </Carousel>
// )

export const Slideshow = ({ data }) => {
  const items = data.map(asset => {
    const assetTitle = asset.link ? asset.link.title : asset.media.title
    const assetSrc = asset.link ? asset.link.url : asset.media.file.url

    return {
      original: assetSrc,
      thumbnail: assetSrc,
      originalAlt: assetTitle,
      thumbnailAlt: assetTitle,
    }
  })

  return <ImageGallery items={items} />
}
