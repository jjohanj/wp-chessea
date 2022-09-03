import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navigation from './navigation'
import { FaMoon } from 'react-icons/fa'

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
  const [darkmode, setDarkmode] = useState(JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('colorscheme')));


  useEffect(() => {
    typeof window !== 'undefined' && sessionStorage.setItem('colorscheme', JSON.stringify(darkmode))
    }, [darkmode]
  );
  let toggleDarkmode = () => {
    darkmode !== "darkmode" ? setDarkmode("darkmode") : setDarkmode("");
  }

  return (
    <div className={`${darkmode} page-content-wrapper`}data-is-root-path={isHomePage}>
      <div className="container">
          <Navigation />
          <button className="toggle btn-pink" onClick={toggleDarkmode}><span className="visually-hidden">Lichte / donkere modus</span><FaMoon /></button>
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
