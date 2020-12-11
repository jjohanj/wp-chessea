import React, {useEffect, useState} from 'react'
import { Link, graphql, navigate } from "gatsby"
import parse from "html-react-parser"
import Image from '../components/image'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {

  // const posts = data.allWpPost.nodes
  const tags = data.allWpTag.nodes

  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState();

  useEffect(() => {
    setPosts(data.allWpPost.nodes);

    if (tag && tag != "all" ) {
      setPosts(data.allWpPost.nodes.filter(item => {
         return item.tags.nodes.some(obj => obj.name === tag);
     })
    );
    }
    else if (tag === "all") {
      setPosts(data.allWpPost.nodes);
    }
 },[tag]
);

  var clickLink = (i) => {
    navigate(i);
  }
  var taglist  = tags.map((tag, i) => {
    return (
      <Link className="btn btn-light btn-sm m-2" key={i} to={`/artikelen`}
            state={{ articleTag: tag.name }}>{tag.name}</Link>
    )
  })
  var headline = posts.slice(0,1).map((post, i) => {
      return (
        <li className="col-lg-12 mb-80 shadow" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="row bg-white-lm headline pointer">
              <div className="col-md-6">
                <Image imgName={post.featuredImage.node.localFile.base} />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center p-20 flex-column text-center h-full">
                  <div><span className="text-primary-lm date">{post.date}</span></div>
                  <h1 className="text-center h2">
                  <Link className="text-dark font-weight-bold" to={post.uri} itemProp="url">
                    <span itemProp="headline">{parse(post.title)}</span>
                  </Link>
                  </h1>
                  <section itemProp="description">{parse(post.excerpt.substr(0, 100))} <span className="btn btn btn-primary">Lees meer</span></section>
                </div>
            </div>
          </article>
        </li>
      )
  })

  var secondHeadline = posts.slice(1,4).map((post, i) => {
      return (
        <li className="col-lg-4 shadow mb-80 second-headline" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="pointer">
              <div className="content p-20 text-center z-10 bg-white-lm">
                  <div><span className="text-primary-lm date">{post.date}</span></div>
                <h2 className="text-center h4">
                  <Link className="text-dark font-weight-bold" to={post.uri} itemProp="url">
                  <span itemProp="headline">{parse(post.title)}</span>
                  </Link>
                </h2>
              </div>
            <Image imgName={post.featuredImage.node.localFile.base} />
          </article>
        </li>
      )
  })

  var archives = posts.slice(4).map((post, i) => {
      return (
        <li className="col-md-12 shadow" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="row bg-white-lm pointer bottom-headline">
            <div className="col-12 col-md-6">
              <Image imgName={post.featuredImage.node.localFile.base} />
            </div>
            <div className="col-12 col-md-6">
             <div className="d-flex justify-content-center p-20 flex-column h-full">
              <h2 className="h4">
                <Link className="text-dark font-weight-bold" to={post.uri} itemProp="url">
                  <span itemProp="headline">{parse(post.title)}</span>
                </Link>
              </h2>
              <small className="date text-primary-lm">{post.date}</small>
              <section itemProp="description">{parse(post.excerpt.substr(0, 100))} <span className="btn btn-sm btn-primary">Lees meer</span></section>
              </div>
            </div>
          </article>
        </li>
      )
  })

  return (
    <Layout isHomePage>
      <SEO title="All posts" />

      <ul className="list-unstyled row">
        <li className="col-12">
        <ul className="row list-unstyled">
          {headline}
            </ul>
          </li>
          <li className="col-12">
                <ul className="row list-unstyled">
          {secondHeadline}
            </ul>
          </li>
          <li className="col-12 col-lg-7 offset-lg-1">
                <ul className="row list-unstyled">
          {archives}
            </ul>
          </li>
          <li className="col-12 col-lg-3 pl-lg-20">
                <h3 className="h5 bg-secondary text-center mt-0 shadow-sm">Tags</h3>

          <div>{taglist}</div>
          </li>
      </ul>
      <div className="text-center">
      {previousPagePath && (
        <>
          <Link className="btn btn-secondary d-inline mr-20" to={previousPagePath}>Vorige pagina</Link>
        </>
      )}
      {nextPagePath && <Link  className="btn btn-secondary d-inline" to={nextPagePath}>Volgende pagina</Link>}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpTag {
      nodes {
        name
      }
    }

    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        tags {
          nodes {
            name
          }
        }
        featuredImage {
            node {
              localFile {
                base
              }
            }
          }
      }
    }
  }
`
