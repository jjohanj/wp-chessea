import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"

const Articles = () => {
  const data = useStaticQuery(graphql`
    query {
        allWordpressPost
        {
          edges
          {
            node
            {
              id,
              title,
              content,
              path,
              slug
            }
          }
        }
      }
  `)

    const post =  data.allWordpressPost.edges.map((item, i) => {

      return (
        <div key={i}>
          <Link to= {`/articles/${item.node.slug}`}> {item.node.title} </Link>
        </div>

      )})
  return (
    <>
      {post}
    </>
)}

export default Articles
