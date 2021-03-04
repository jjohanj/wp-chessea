import React from "react"
import { Link, graphql } from "gatsby"
import Image from '../components/image'
import parse from "html-react-parser"
import Comments from "../components/comments1"
import CommentsList from "../components/commentslist"


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {

  console.log(previous);
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div className="grid-container-article">
      <section className="column-1">
        <article className="blog-post">
          <div className="content">
            <h1 className="font-weight-bold" itemProp="headline">{parse(post.title)}</h1>

            <p>{post.date}</p>
            {!!post.content && (
              <section itemProp="articleBody">{parse(post.content)}</section>
            )}

          </div>

        </article>
        <div>
          <div className="comments-wrapper">
            <Comments wpId={post.databaseId} />
          </div>
          <div className="comments-wrapper">
            <CommentsList wpId={post.databaseId} />
          </div>
        </div>
      </section>
      <section className="column-2">
                <div className="hero"><Image imgName={post.featuredImage.node.localFile.publicURL} /></div>
      <nav>
        <ul className="blog-nav">
        <li className="column-full"><h3 className="display">Meer artikelen</h3></li>
          <li className="column-1">
            {previous && (
              <div>
              <p>Volgend artikel</p>
              <div><Image imgName={previous.featuredImage.node.localFile.publicURL} /></div>
              <Link className="btn btn-primary" to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
              </div>
            )}
          </li>

          <li className="column-2">

          {next && (
            <div><p>Vorig artikel</p>
            <div><Image imgName={next.featuredImage.node.localFile.publicURL} /></div>
            <Link className="btn btn-primary" to={next.uri} rel="next">
            {parse(next.title)} →
            </Link>
            </div>
          )}
          </li>
        </ul>
        </nav>
        </section>
        </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      databaseId
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
      featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
      featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
    }
  }
`
