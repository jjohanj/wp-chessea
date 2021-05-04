import React, {useEffect, useState} from 'react'
import Image from '../components/image'
import {graphql, useStaticQuery, Link, navigate } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo'
import parse from "html-react-parser"

function IndexPage({location}) {

  const [tag, setTag] = useState();
  const [filterMenu, setFilterMenu] = useState([]);
  const [articles, setArticles] = useState([]);


  const data = useStaticQuery(graphql`
    query {
      allWpTag(sort: {fields: name}) {
        edges {
          node {
            name
          }
        }
      }
      allWpPost(
        sort: {fields: databaseId, order: DESC}
        limit: 12
      ) {
        edges {
          node {
            title
            excerpt
            slug
            uri
            date (formatString: "D MMMM, YYYY", locale: "nl")
            databaseId
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                name
              }
            }
            featuredImage {
                node {
                  localFile {
                    name
                    base
                  }
                }
              }
            }
          }
        }
      }

  `);

  useEffect(() => {
    setFilterMenu(data.allWpTag.edges);
    setArticles(data.allWpPost.edges);

 },[]
  );

  var clickLink = (i) => {
    navigate(i);
  }
  if (articles.length === 0 && filterMenu.length === 0) {
    return (
            <Layout>
      <div className="vh-100"></div>
            </Layout >
    )
  }

  var headline = articles.slice(0,1).map((post, i) => {
      return (
        <li className="headline" key={post.node.uri}>
          <article onClick = {() => clickLink(post.node.uri)} className="pointer">
            <div className="content">
              <span className="text-primary-lm date">{post.node.date}</span>
                <h1 className="text-center">
                  <Link className="text-dark font-weight-bold" to={post.node.uri}>
                  {parse(post.node.title)}
                  </Link>
                  </h1>
                  <div>{parse(post.node.excerpt.substr(0, 200))} <span className="btn btn btn-primary">Lees meer</span></div>
                  </div>
            <Image imgName={post.node.featuredImage.node.localFile.base} />
          </article>
        </li>
      )
  })

  var secondHeadline = articles.slice(1,4).map((post, i) => {
      return (
        <li className="second" key={post.node.uri}>
          <article onClick = {() => clickLink(post.node.uri)} className="pointer">
              <div className="content">
                <span className="text-primary-lm date">{post.node.date}</span>
                <h2>
                  <Link to={post.node.uri} itemProp="url">
                    {parse(post.node.title)}
                  </Link>
                </h2>
              </div>
            <Image imgName={post.node.featuredImage.node.localFile.base} />
          </article>
        </li>
      )
  })

  var archives = articles.slice(4).map((post, i) => {
      return (
        <li className="third" key={post.node.uri}>
          <article onClick = {() => clickLink(post.node.uri)} className="pointer">
              <Image imgName={post.node.featuredImage.node.localFile.base} />
            <div className="content border-right">
              <h2>
                <Link className="text-dark font-weight-bold" to={post.node.uri} itemProp="url">
                  <span itemProp="headline">{parse(post.node.title)}</span>
                </Link>
              </h2>
              <small className="date">{post.node.date}</small>
              <div>{parse(post.node.excerpt.substr(0, 200))} <span className="btn btn-sm btn-xs-xsm btn-primary">Lees meer</span>
              </div>
            </div>
          </article>
        </li>
      )
  })

  var taglist  = filterMenu.map((tag, i) => {
    return (
      <li key={i}><Link  to={`/artikelen`}
            state={{ articleTag: tag.node.name }}>{tag.node.name}</Link></li>
    )
  })

  return (
    <Layout isHomePage>
      <SEO title="All posts" />

      <ul className="grid-container">
          {headline}
          {secondHeadline}
          {archives}



          <li  className="tags-list"><ul>
            <li><h3>Tags</h3></li>{taglist}</ul>
            </li></ul>
    </Layout>
  )
}

export default IndexPage
