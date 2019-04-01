import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Container = styled(`div`)`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
     "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0 auto;
    max-width: 700px;
    width: 100%:

    div > p {
        font-size: 1.4rem;
        font-style: 400;
        font-weight: 400;
        line-height: 1.4;
    }
`

const Title = styled(`h1`)`
  font-size: 3rem;
  font-weight: 400;
`

function PageTemplate({ data: { mdx } }) {
  console.log(mdx)
  return (
    <Container>
      <Title>{mdx.frontmatter.title}</Title>
      <Img fluid={mdx.frontmatter.cover.childImageSharp.fluid} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
export default PageTemplate
