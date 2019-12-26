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


  var counter = -1;
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
      counter++
      return <div  key={counter} className={`img-xl-${counter}`}>
                <div className="hero"><Image imgName={item.node.localFile.base} /></div>
              </div>
        break;
      case 1:
      case 2:
      case 3:
      counter++
      return <div key={counter} className={`img-lg-${counter}`}>
      <div className="hero"><Image imgName={item.node.localFile.base} /></div>
      </div>
      break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      counter++
        return <div  key={counter} className={`img-sm-${counter}`}>
                  <div className="hero"><Image imgName={item.node.localFile.base} /></div>
                </div>
      break;
      case 9:
      default:
      counter++
      return <div  key={counter} className="img-gallery">
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
