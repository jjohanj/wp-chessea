/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import FontUrl1 from "../../static/fonts/catamaran-v6-latin-300.woff"
import FontUrl3 from "../../static/fonts/catamaran-v6-latin-700.woff"
import FontUrl4 from "../../static/fonts/catamaran-v6-latin-regular.woff"
import FontUrl2 from "../../static/fonts/parisienne-v7-latin-regular.woff"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
    <link rel="preload"
    as="font"
    href={FontUrl1}
    type="font/woff2"
    crossOrigin="anonymous" />
  <link rel="preload"
    as="font"
    href={FontUrl2}
    type="font/woff2"
    crossOrigin="anonymous" />
    <link rel="preload"
      as="font"
      href={FontUrl3}
      type="font/woff2"
      crossOrigin="anonymous" />
      <link rel="preload"
        as="font"
        href={FontUrl4}
        type="font/woff2"
        crossOrigin="anonymous" />

      </Helmet>
  )
}

SEO.defaultProps = {
  lang: `nl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
