import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const TopNav = ({ categoryData, articleData }) => (
  <Navbar bg="light">
    <Navbar.Brand href="/">Joel Gunz</Navbar.Brand>
    {categoryData &&
      categoryData.edges.map(({ node }) => (
        <Nav.Link key={node.id} href={`/${node.category}`}>
          {node.category}
        </Nav.Link>
      ))}
    {articleData &&
      articleData.edges.map(({ node }) => (
        <Nav.Link key={node.id} href={`/${node.slug}`}>
          {node.title}
        </Nav.Link>
      ))}
  </Navbar>
)
