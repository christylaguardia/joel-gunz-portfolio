/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Project`) {
    const id = createFilePath({ node, getNode, basePath: `project` })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulCategory {
        edges {
          node {
            id
            category
          }
        }
      }
      allContentfulArticle(filter: { visible: { eq: true } }) {
        edges {
          node {
            id
            slug
            title
            content {
              json
            }
          }
        }
      }
      allContentfulProject(filter: { visible: { eq: true } }) {
        edges {
          node {
            id
            projectName
            slug
            description {
              json
            }
            assetDisplay
            assets {
              id
              title
              type
              embed {
                embed
              }
              media {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `).then(results => {
    // Create article pages
    results.data.allContentfulArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/pages/article.js`),
        context: {
          categories: results.data.allContentfulCategory, // for the nav bar
          articles: results.data.allContentfulArticle, // for the nav bar
          id: node.id,
          title: node.title,
          slug: node.slug,
          content: node.content,
        },
      })
    })
    // Create project pages
    results.data.allContentfulProject.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`./src/pages/project.js`),
        context: {
          categories: results.data.allContentfulCategory, // for the nav bar
          articles: results.data.allContentfulArticle, // for the nav bar
          id: node.id,
          projectName: node.projectName,
          description: node.description,
          assetDisplay: node.assetDisplay,
          assets: node.assets,
        },
      })
    })
  })
}
