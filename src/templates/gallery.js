import React, {useState, useEffect} from "react"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import {graphql, useStaticQuery } from "gatsby"
import SEO from '../components/seo';
import Footer from "../components/footer"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Gallery = ({}) => {
  const [photoIndex, setphotoIndex] = useState(0);

  const [isOpen, setisOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMedia {
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
console.log(images[1].node.localFile.url);
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
                  <div className="hero pointer" onClick={(event) => { setphotoIndex(index); setisOpen(true);}}><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 1:
          case 2:
              return <div key={counter} className={`img-lg-${counter}`}>
                  <div className="hero pointer" onClick={(event) => { setphotoIndex(index); setisOpen(true);}}><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
              counter++;
              return <div key={counter} className={`img-sm-${counter}`}>
                  <div className="hero pointer" onClick={(event) => { setphotoIndex(index); setisOpen(true);}}><Image imgName={item.node.localFile.base}/></div>
              </div>;
          case 9:
          default:
              return <div key={counter} className="img-gallery">
                  <div className="hero pointer" onClick={(event) => { setphotoIndex(index); setisOpen(true);}}><Image imgName={item.node.localFile.base}/></div>
              </div>
      }
  });
  return (
    <>
        <SEO title="Afbeeldingen"/>
        <div className="grid-container  article-list">
      <MainMenu />
      <div className="gallery">
        {post}
      </div>
{isOpen && (
   <Lightbox
     mainSrc={images[photoIndex].node.localFile.url}
     nextSrc={images[(photoIndex + 1) % images.length]}
     prevSrc={images[(photoIndex + images.length - 1) % images.length]}
     onCloseRequest={() => setisOpen(false)}
     onMovePrevRequest={() =>
       setphotoIndex((photoIndex + images.length - 1) % images.length)
     }
     onMoveNextRequest={() =>
       setphotoIndex ((photoIndex + 1) % images.length)
     }
   />
 )}
      <Footer />
      </div>
    </>
)};

export default Gallery
