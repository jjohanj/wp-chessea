import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navigation from "./navigation"
import "../normalize.css"
// custom CSS styles
import "../style.css"
// import "./src/halfmoon.css"
import "../grid.css"
import "../home.css"
import "../buttons.css"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  const [font, setFont] = useState("");

  useEffect(() => {
    if (font === 'all-fonts-loaded') {
  return null;
}
else {
    var FontFaceObserver = require('fontfaceobserver');

    var font = new FontFaceObserver('CatamaranC');
    var fontA = new FontFaceObserver('Catamaran');
    var fontB = new FontFaceObserver('Marck Script');

    font.load().then(function () {
      setFont("font-loaded");
    });
    Promise.all([fontA.load(), fontB.load()]).then(function () {
  setFont("all-fonts-loaded");
  // sessionStorage.fontsLoaded = true;
});
}
  }, []
)
  return (
    <div className={`${font} page-content-wrapper ${isHomePage}`}data-is-root-path={isHomePage}>
            <Navigation />
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout

//
// <footer>
// © {new Date().getFullYear()}, Built with
// {` `}
// <a href="https://www.gatsbyjs.com">Gatsby</a>
// {` `}
// And <a href="https://wordpress.org/">WordPress</a>
// </footer>
