import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/layout"
import SEO from "components/seo"

const styles = { fontWeight: 800 }

const PokemonTemplate = ({ data }) => {
  const {
    category,
    height,
    intro,
    title,
    weight,
    featuredImage
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={`Pokemon - ${title}`} />
      <h2>Pokemon: {title}</h2>
      <Img fixed={featuredImage.childImageSharp.fixed} />
      <p>{intro}</p>
      <h4>Stats</h4>
      <ul>
        <li>
          <span style={styles}>Height:</span> {height}
        </li>
        <li>
          <span style={styles}>Weight:</span> {weight}
        </li>
        <li>
          <span style={styles}>Category:</span> {category}
        </li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PokemonTemplate
export const PokemonTemplateQuery = graphql`
  query PokemonPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        height
        intro
        title
        weight
        featuredImage {
          childImageSharp {
            fixed(width: 200) {
            ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
    }
  }
`
