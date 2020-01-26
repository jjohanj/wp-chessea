import React from "react"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import {graphql, useStaticQuery } from "gatsby"
import SEO from '../components/seo';
import Footer from "../components/footer"


const Gallery = ({}) => {

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
  `);


    let counter;
    counter = -1;
  const post =  data.allWordpressWpMedia.edges.map((item) => {
      if (item.node.title === "board") {
          return null
      }
      counter++;
      switch (counter) {
          case 0:
              return <div key={counter} className={`img-xl-${counter}`}>
                  <div className="hero"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 1:
          case 2:
              return <div key={counter} className={`img-lg-${counter}`}>
                  <div className="hero"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
              counter++;
              return <div key={counter} className={`img-sm-${counter}`}>
                  <div className="hero"><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 9:
          default:
              return <div key={counter} className="img-gallery">
                  <div className="hero"><Image imgName={item.node.localFile.base}/></div>
              </div>
      }
  });
  return (
    <>
        <SEO title="Afbeeldingen"/>
        <div className="grid-container  article-list">
      <MainMenu />
      </div>
      <div className="gallery">
        {post}
      </div>
      <Footer />
    </>
)};

export default Gallery
