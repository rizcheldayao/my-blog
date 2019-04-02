import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Avatar = styled(Img)`
  border-radius: 50%;
`

const Content = styled(`section`)`
  display: flex;
  flex-direction: column;
  padding-left: 8rem;
  width: 50%;
`

const Title = styled(`h1`)`
  display: flex;
  font-size: 8rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  width: 100%;

  &:nth-of-type(2) {
    justify-content: flex-end;
  }
`

const AboutMe = styled(`div`)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

const Text = styled(`p`)`
  padding: 2rem 0;
  line-height: 1.5rem;
`

const AboutPage = ({ data }) => (
  <Layout>
    <AboutMe>
      <Avatar fixed={data.file.childImageSharp.fixed} />
      <Content>
        <Title>RIZCHEL</Title>
        <Title>DAYAO</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Content>
    </AboutMe>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "rizchel.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
