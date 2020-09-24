import React, {useState, useEffect} from "react"
import Image from "../components/image"
import {graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Gallery2 from "../components/gallery2"
import '../components/gallery.css'



const Gallery = ({}) => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMedia(filter: {title: {eq: "gallery"}}) {
        edges {
          node {
            title
            localFile {
              base
              url
            }
          }
        }
      }
    }
  `);

let images = data.allWordpressWpMedia.edges;
    let counter;
    counter = -1;
  const post =  data.allWordpressWpMedia.edges.map((item, index) => {
      if (item.node.title === "board") {
          return null
      }
      counter++;
      switch (counter) {
          case 0:
              return <div key={counter} className={`img-xl-${counter}`}>
                  <div className="hero pointer"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 1:
          case 2:
              return <div key={counter} className={`img-lg-${counter}`}>
                  <div className="hero pointer"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
              return <div key={counter} className={`img-sm-${counter}`}>
                  <div className="hero pointer"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 9:
          default:
              return <div key={counter} className="img-gallery">
                  <div className="hero pointer"><Image imgName={item.node.localFile.base}/></div>
              </div>
      }
  });
  return (

    <Layout aPage="grid-container">
      <div className="gallery">
        {post}
      </div>
  </Layout>

)};

export default Gallery
