module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-mdx`,
    options: {
      gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          wrapperStyle: 'margin-right:0px; ',
          maxWidth: 800,
          sizeByPixelDensity: true
        }
      }
      ]
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content/posts/`
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog-images",
      path: `${__dirname}/src/images`
    }
  },
  ],
}
