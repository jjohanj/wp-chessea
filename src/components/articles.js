import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"
import Parser from 'html-react-parser'


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
                datum
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
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName(type+'-article-'+val)[0].getElementsByTagName('a')[0].click();
    }

    var post =  data.allWordpressPost.edges.slice(props.liststart, props.listend).map((item, i) => {
      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
          {props.type !== 'main' ?
                    <><p className="date"><span>{item.node.acf.datum}</span></p><h3><Link to={`/articles/${item.node.slug}`}>{Parser(item.node.title)}</Link></h3><div>{Parser(item.node.content.substring(0,70) + ' ...' )} </div></> :
                    <><h3><Link to={`/articles/${item.node.slug}`}>{Parser(item.node.title)}</Link></h3><p className="date"><span>{item.node.acf.datum}</span></p><div>{Parser(item.node.content.substring(0,130) + ' ...' )} </div></> }
          </div>
        </article>

      )})

  return (
    <>
      {post}
    </>
)}

export default Articles
