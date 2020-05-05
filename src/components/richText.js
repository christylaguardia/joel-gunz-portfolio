import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>
// const Image = ({ children }) => <img className="align-center" src={} />

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span className="bold">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="align-center">{children}</p>
    ),
  },
  renderImage: {
    []
  }
}

export const RichText = ({ text }) =>
  text ? documentToReactComponents(text.json, options) : null
