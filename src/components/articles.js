import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"

const Articles = (props) => {
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
              acf {
                date
              }
              featured_media {
                localFile {
                  base
                }
              }
            }
          }
        }
      }
  `)
    console.log(props.list);
    if (props.list != "undefined") {
    var post =  data.allWordpressPost.edges.slice(props.liststart, props.listend).map((item, i) => {

      return (
        <article className={`head-articles article-${i}`} key={i}>
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
            <h3>{item.node.title}</h3>
            <p class="date">{item.node.acf.date}</p>
            <div dangerouslySetInnerHTML={{__html: item.node.content}} />
            <Link to= {`/articles/${item.node.slug}`}> {item.node.title} </Link>
          </div>
        </article>

      )})
    }

    else {
    var post =  data.allWordpressPost.edges.map((item, i) => {

      return (
        <div key={i}>
          <Link to= {`/articles/${item.node.slug}`}> {item.node.title} </Link>
        </div>
      )})
    }

  return (
    <>
      {post}
    </>
)}

export default Articles
