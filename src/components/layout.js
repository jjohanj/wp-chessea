/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Footer from "./footer"
import SEO from "./seo"
import "./layout.css"
import "./navigation.css"
import "./darkmode.css"


const Layout = ({aPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [font, setFont] = useState("");
  const [darkmode, setDarkmode] = useState(JSON.parse(typeof window !== 'undefined' && localStorage.getItem("darkmode")) || []);

  useEffect(() => {
  // code to run on component mount
  var FontFaceObserver = require('fontfaceobserver');

  var font = new FontFaceObserver('Marck Script');

  font.load().then(function () {
    setFont("font-loaded");
  });
  if darkmode.length === 0  && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
    setDarkmode("darkmode");
  }

  else {
    typeof window !== 'undefined' &&  localStorage.setItem('darkmode', JSON.stringify(darkmode))
  }

}, [darkmode])

  let toggleDarkmode = () => {
    darkmode === "darkmode" ? setDarkmode("light") : setDarkmode("darkmode");
  }

  return (
    <div className={darkmode}>
      <SEO title={data.site.siteMetadata.title} />
      <Navigation class="darkmode" font={font}/>
        <main  className={aPage + " " + font}>{children}</main>
      <Footer dark={toggleDarkmode} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
