import React, {useState, useEffect, useCallback} from "react"
import Image from "../components/image"
import {graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const Gallery2 = () => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMedia {
        edges {
          node {
            localFile {
              base
              url
            }
          }
        }
      }
    }
  `);
  var photos = data.allWordpressWpMedia.edges;
  console.log(photos);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Gallery2
