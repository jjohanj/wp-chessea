// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
//
//
// const Image = ({ imgName }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allImageSharp {
//           edges {
//             node {
//               fluid {
//                 originalName
//               }
//               gatsbyImageData(
//                         width: 400
//                         placeholder: TRACED_SVG
//                         formats: [AUTO, WEBP, AVIF]
//                       )
//             }
//           }
//         }
//       }
//     `}
//
//     render={data => {
//       const image = data.allImageSharp.edges.find(
//         edge => edge.node.fluid.originalName.slice(0, -4) === imgName
//       );
//       if (!image) {
//         return null
//       }
//       return <GatsbyImage image={image.node.gatsbyImageData} alt="" />
//     }}
//   />
// );
// export default Image

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 550) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      );
      if (!image) {
        return null
      }
      return <Img fluid={image.node.fluid} />
    }}
  />
);
export default Image
