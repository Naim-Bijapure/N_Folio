/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log("🚀 -> slug", slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  let resultBlogPost = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resultBlogPost.data.allMarkdownRemark.edges
    .filter(({ node }) => !node.frontmatter.draft)
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })

  const projectTemplate = path.resolve(`src/templates/project-view.js`)
  let resultProjectView = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resultProjectView.data.allMarkdownRemark.edges
    .filter(({ node }) => {
      return node.frontmatter.type === "project"
    })
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })
}
