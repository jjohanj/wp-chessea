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

   var handleClick = (type, val) => {
    document.getElementById(type+'-link-'+val).click();
    }

    console.log(props.type);
    if (props.list != "undefined") {
    var post =  data.allWordpressPost.edges.slice(props.liststart, props.listend).map((item, i) => {

      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
            <h3><Link id={`${props.type}-link-${i}`} to={`/articles/${item.node.slug}`}>{item.node.title}</Link></h3>
            <p className="date">{item.node.acf.date}</p>
            <div dangerouslySetInnerHTML={{__html: item.node.content.substring(0,50) + ' ...' }} />
          </div>
        </article>

      )})
    }

    else {
    var post =  data.allWordpressPost.edges.map((item, i) => {

      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
            <h3><Link id={`${props.type}-link-${i}`} to={`/articles/${item.node.slug}`}>{item.node.title}</Link></h3>
            <p className="date">{item.node.acf.date}</p>
            <div dangerouslySetInnerHTML={{__html: item.node.content.substring(0,50) + ' ...' }} />
          </div>
        </article>
      )})
    }

  return (
    <>
      {post}
    </>
)}

export default Articles
