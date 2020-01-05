import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import SEO from "components/seo"

const styles = {
  margin: 10,
  marginLeft: 0,
  border: "2px solid black",
  padding: 10
 }

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Pokemon Blog</h2>
      {renderBlogs(data.allMarkdownRemark.edges)}
    </Layout>
  )

  function renderBlogs(posts) {
    return posts.map(item => {
      const { slug } = item.node.fields
      const { title, intro } = item.node.frontmatter
      return (
        <div style={styles} onClick={() => navigate(`/blog/${slug}`)}>
          <div style={{ color: "black" }}>
            <h4>{title}</h4>
            <p>{intro}</p>
          </div>
        </div>
      )
    })
  }
}

export default IndexPage
export const IndexQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            intro
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
