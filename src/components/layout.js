/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LazyLoadComponent from 'react-intersection-observer-lazy-load'
import Navigation from "./navigation"
import SEO from "./seo"
import Footer from "./footer"
import "./layout.css"
import "./navigation.css"

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

  return (
    <>
      <SEO title={data.site.siteMetadata.title} />
      <Navigation />
        <main  className={aPage}>{children}</main>
        <LazyLoadComponent>
      <Footer />
      </LazyLoadComponent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
