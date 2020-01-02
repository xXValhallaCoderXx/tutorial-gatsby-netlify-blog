import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = ({ data }) => {
  console.log("data: ", data.allMarkdownRemark.edges[0].node)
  const blog = data.allMarkdownRemark.edges[0].node;
  console.log("BLOG: ", blog.html);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi Welcome To The Pokemon Blog!</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </Layout>
  )
}

export default IndexPage

export const QUERY = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            intro
          }
          excerpt
          html
        }
      }
    }
  }
`
