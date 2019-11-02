import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"
import Parser from 'html-react-parser'


const Gallery = () => {

  return (
    <>
      <div className="gallery">
        <div className="img-sm"><div className="hero"><Image imgName="gatsby-astronaut.png" /></div></div>
        <div className="img-sm-2"><div className="hero"><Image imgName="butterfly.jpg" /></div></div>
        <div className="img-sm-3"><div className="hero"><Image imgName="butterfly.jpg" /></div></div>
        <div className="img-sm-4"><div className="hero"><Image imgName="butterfly.jpg"/></div></div>
        <div className="img-lg"><div className="hero"><Image imgName="butterfly.jpg" /></div></div>
        <div className="img-lg-2"><div className="hero"><Image imgName="butterfly.jpg" /></div></div>
        <div className="img-xxl"><div className="hero"><Image imgName="butterfly.jpg" /></div></div>
      </div>
    </>
)}

export default Gallery
