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
  const [darkmode, setDarkmode] = useState(JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('colorscheme')));

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches && darkmode === null) {
      setDarkmode("darkmode");
    }

    var FontFaceObserver = require('fontfaceobserver');

    var font = new FontFaceObserver('Marck Script');

    font.load().then(function () {
      setFont("font-loaded");
    });

    typeof window !== 'undefined' && sessionStorage.setItem('colorscheme', JSON.stringify(darkmode))

    }, [darkmode]
)

  let toggleDarkmode = () => {
    darkmode !== "darkmode" ? setDarkmode("darkmode") : setDarkmode("");
  }

  return (
    <div className={darkmode}>
      <SEO title={data.site.siteMetadata.title} />
      <Navigation dark={toggleDarkmode} class="darkmode" font={font}/>
        <main  className={aPage + " " + font}>{children}</main>
        <Footer  />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
