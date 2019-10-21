import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"

const Matches = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMatch {
        edges {
          node {
            featured_media {
              localFile {
                base
              }
              title
            }
            acf {
              link
            }
            content
          }
        }
      }
    }

  `)

   var handleClick = (type, val) => {
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName(type+'-article-'+val)[0].getElementsByTagName('a')[0].click();

    }

    var matches =  data.allWordpressWpMatch.edges.map((item, i) => {

      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
            <h3><Link to={`/articles/${item.node.title}`}>{item.node.title}</Link></h3>
            <p className="date">{item.node.acf.link}</p>
            <div dangerouslySetInnerHTML={{__html: item.node.content.substring(0,50) + ' ...' }} />
          </div>
        </article>

      )})
  return (
    <>
      {matches}
    </>
)}

export default Matches
