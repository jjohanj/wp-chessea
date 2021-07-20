import React from "react"
import { Link, graphql } from "gatsby"
import Image from '../components/image'
import parse from "html-react-parser"
import Comments from "../components/comments1"
import CommentsList from "../components/commentslist"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    const imageNext = next ? getImage(next.featuredImage.node.localFile) : null
    const imagePrev = previous ? getImage(previous.featuredImage.node.localFile) : null
    const imageHero = getImage(post.featuredImage.node.localFile)
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div className="grid-container-article">
      <section className="column-1">
        <article className="blog-post">
          <div className="content">
            <h1 className="font-weight-bold" itemProp="headline">{parse(post.title)}</h1>

            <p className="date">{post.date}</p>
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
                <div className="hero"><GatsbyImage className="h-full" image={imagePrev} alt="" /></div>
      <nav>
        <ul className="blog-nav">
        <li className="column-full"><h3 className="display">Meer artikelen</h3></li>
          <li className="column-1">
            {previous && (
              <>
              <div><GatsbyImage className="h-full" image={imagePrev} alt="" /></div>
              <Link className="btn btn-light" to={previous.uri} rel="previous">
                ← {parse(previous.title)}
              </Link>
              </>
            )}
          </li>

          <li className="column-2">

          {next && (
            <>
            <div><GatsbyImage className="h-full" image={imageNext} alt="" /></div>
            <Link className="btn btn-light" to={next.uri} rel="next">
            {parse(next.title)} →
            </Link>
            </>
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
      date (formatString: "D MMMM, YYYY", locale: "nl")
      content
      title
      databaseId
      featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData (
                   formats: [AUTO, WEBP, AVIF]
                 )
              }
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
              childImageSharp {
                gatsbyImageData (
                   formats: [AUTO, WEBP, AVIF]
                 )
              }
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
            childImageSharp {
              gatsbyImageData (
                 formats: [AUTO, WEBP, AVIF]
               )
            }
          }
        }
      }
    }
  }
`
