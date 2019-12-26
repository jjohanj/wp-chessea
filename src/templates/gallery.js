import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"
import Parser from 'html-react-parser'


const Gallery = ({pageContext}) => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMedia {
        edges {
          node {
            title
            localFile {
              base
            }
          }
        }
      }
    }
  `)


  const post =  data.allWordpressWpMedia.edges.map((item, i) => {
    if (item.node.title === "board") {
      return (
         null
       )
    }
    else {
    var text= "";
    switch(i) {
      case 0:
      return <div  key={i} className={`img-xl-${i}`}>
                <div className="hero"><Image imgName={item.node.localFile.base} /></div>
              </div>
        break;
      case 1:
      case 2:
      return <div key={i} className={`img-lg-${i}`}>
                <div className="hero"><Image imgName={item.node.localFile.base} /></div>
              </div>
      break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        return <div  key={i} className={`img-sm-${i}`}>
                  <div className="hero"><Image imgName={item.node.localFile.base} /></div>
                </div>
      break;
      case 9:
      default:
      return <div  key={i} className="img-gallery">
                <div className="hero"><Image imgName={item.node.localFile.base} /></div>
              </div>
    }
  }
  })
  return (
    <><div className="grid-container  article-list">
      <MainMenu />
      <div className="hero header"><Image imgName={pageContext.image}/></div>
      <h2>{Parser(pageContext.title)}</h2>
      </div>
      <div className="gallery">
        {post}
      </div>
    </>
)}

export default Gallery
