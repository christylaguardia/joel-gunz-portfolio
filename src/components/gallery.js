import React from "react"
import ReactPhotoGallery from "react-photo-gallery"

export const Gallery = ({ data }) => {
  const photos = data.map(asset => {
    // const assetTitle = asset.link ? asset.link.title : asset.media.title
    const assetSrc = asset.link ? asset.link.url : asset.media.file.url

    return {
      src: assetSrc,
      width: 4,
      height: 3,
    }
  })

  return <ReactPhotoGallery photos={photos} />
}
