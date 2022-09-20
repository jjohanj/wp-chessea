import React from "react"
import { Link, graphql, navigate } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({
  data
}) => {
  const posts = data.allWpPost.nodes;
  const tags = data.allWpTag.edges;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }
  var taglist  = tags.map((tag, i) => {
    return (
      <li key={i}><Link  to={`/artikelen`}
            state={{ articleTag: tag.node.name }}>{tag.node.name}</Link></li>
    )
  })

  var clickLink = (i) => {
    navigate(i);
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />

      <ul className="grid-container" style={{ listStyle: `none` }}>
        {posts.map((post, i) => {
          const title = post.title
          const featuredImage = {
            data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
            alt: post.featuredImage?.node?.alt || ``,
          }

          if (i === 0) {
              return (
              <li className="first headline bg-white"  key={post.uri}>
                <article onClick = {() => clickLink(post.uri)} className="pointer">
                    <div className="">
                      <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                      fetchpriority="high" 
                      />
                  </div>
                  <div className="content">
                  <h1 className="h2"><Link to={post.uri}>{post.title}</Link></h1>
                    {parse(post.excerpt.substr(0, 200))}
                    <div><span className="btn btn-primary">Lees meer</span></div>
                  </div>
                </article>
              </li>
            )
          }
          if (i === 2 || i === 3 || i === 1) {
            return (
            <li className="second bg-white" key={post.uri}>
              <article onClick = {() => clickLink(post.uri)} className="pointer">
                  <div className="content">
                  <h2 className="h3"><Link to={post.uri}>{post.title}</Link></h2>
                  {parse(post.excerpt.substr(0, 200))}
                  <div><span className="btn btn-secondary btn-sm">Lees meer</span></div>
                  </div>
                  <div className="">
                    <GatsbyImage
                    image={featuredImage.data}
                    alt={featuredImage.alt}
                    />
                </div>
              </article>
            </li>
            )
          }
          else {
            return (
            <li className="third bg-white" key={post.uri}>
              <article onClick = {() => clickLink(post.uri)} className="pointer">
                  <div className="">
                    <GatsbyImage
                    image={featuredImage.data}
                    alt={featuredImage.alt}
                    />
                </div>
                <div className="content">
                  <h2 className="h5"><Link to={post.uri}>{post.title}</Link></h2>
                      {parse(post.excerpt.substr(0, 200))}
                  <div><span className="btn btn-sm btn-primary">Lees meer</span></div>
                </div>
              </article>
            </li>
          )
        }
        })}
        <li  className="tags"><ul>
          <li><h3>Tags</h3></li>{taglist}</ul>
          </li>
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {

    allWpTag(sort: {fields: name}) {
      edges {
        node {
          name
        }
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        tags {
          nodes {
            name
          }
        }
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  layout: CONSTRAINED
                )
              }
            }
          }
        }

      }
    }
  }
`
