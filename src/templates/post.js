import React, { useState, useEffect } from "react"
import Image from "../components/image"
import { Link } from "gatsby"
import Comments from "../components/comments1"
import Commentslist from "../components/commentslist"
import './page.css';
import Parser from 'html-react-parser'
import Layout from "../components/layout"
import '../components/article-detail.css'


function Post({ pageContext }) {

// var matches = pageContext.content.replace(/\[(.*?)\]/g, pageContext.imageurl);
//
// console.log(matches);
let tags = pageContext.tags.map((name, i) => {
  return (
    <Link key={i} to={`/artikelen`}
          state={{ tag: name.name }}><span className="tag">{name.name}</span></Link>
  )
})

return (
  <>

  <Layout aPage="grid-container">
    <article className="article-selected">
      <h2>{Parser(pageContext.title)}</h2>
      <div>{Parser(pageContext.content)} </div>
      <span>tags:</span> {tags}
    </article>
    <div className="image-selected"> <Image imgName={pageContext.image}/>
    </div>
    <Comments wpId={pageContext.wp_id} slug={pageContext.slug}/>
    <Commentslist wpId={pageContext.wp_id} />
  </Layout>
  </>
)
}
export default Post
