module.exports = {
  siteMetadata: {
    title: "chesseav3",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chessea`,
        short_name: `Chessea`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/heart.png`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://flonxchess.nl/graphql",
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        }
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
