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
 if (posts.length === 0) {
   return (
     <>
     <div className="h-100"></div>
     </>
   )
 }
  var clickLink = (i) => {
    navigate(i);
  }
  var taglist  = tags.map((tag, i) => {
    return (
      <li key={i}><Link  to={`/artikelen`}
            state={{ articleTag: tag.name }}>{tag.name}</Link></li>
    )
  })
  var headline = posts.slice(0,1).map((post, i) => {
      return (
        <li className="headline" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="pointer">
            <div className="content">
              <span className="text-primary-lm date">{post.date}</span>
                <h1 className="text-center h2">
                  <Link className="text-dark font-weight-bold" to={post.uri}>
                  {parse(post.title)}
                  </Link>
                  </h1>
                  <div>{parse(post.excerpt.substr(0, 200))} <span className="btn btn btn-primary">Lees meer</span></div>
                  </div>
            <Image imgName={post.featuredImage.node.localFile.base} />
          </article>
        </li>
      )
  })

  var secondHeadline = posts.slice(1,4).map((post, i) => {
      return (
        <li className="second cv-sm" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="pointer">
              <div className="content">
                <span className="text-primary-lm date">{post.date}</span>
                <h2>
                  <Link to={post.uri} itemProp="url">
                    {parse(post.title)}
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
        <li className="third cv" key={post.uri}>
          <article onClick = {() => clickLink(post.uri)} className="pointer">
              <Image imgName={post.featuredImage.node.localFile.base} />
            <div className="content border-right shadow">
              <h2>
                <Link className="text-dark font-weight-bold" to={post.uri} itemProp="url">
                  <span itemProp="headline">{parse(post.title)}</span>
                </Link>
              </h2>
              <small className="date">{post.date}</small>
              <div>{parse(post.excerpt.substr(0, 200))} <span className="btn btn-sm btn-xs-xsm btn-primary">Lees meer</span>
              </div>
            </div>
          </article>
        </li>
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
      <div className="text-center d-block">
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
