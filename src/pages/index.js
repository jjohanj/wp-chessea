import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allWordpressPage
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

  const test =  data.allWordpressPage.edges.map((item, i) => {

    return (
      <div key={i}>
        <Link to={item.node.slug}> Link </Link>


      </div>

    )})
  return (
    <Layout>

    {test}
  </Layout>
)}

export default IndexPage
