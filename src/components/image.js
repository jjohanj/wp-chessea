import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(
                        width: 400
                        placeholder: TRACED_SVG
                        formats: [AUTO, WEBP, AVIF]
                      )
            }
          }
        }
      }
    `}

    render={data => {
      var res = imgName.substring(0, 15);
      const image = data.allImageSharp.edges.find(
        edge => edge.node.gatsbyImageData.images.fallback.src.substring(0, 15) === res
      );
      if (!image) {
        return null
      }
      return <GatsbyImage image={image.node.gatsbyImageData} alt="" />
    }}
  />
);
export default Image
