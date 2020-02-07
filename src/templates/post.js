import React from "react"
import Image from "../components/image"
import Comments from "../components/comments1"
import Commentslist from "../components/commentslist"
import MainMenu from "../components/mainmenu"
import './page.css';
import Parser from 'html-react-parser'
import SEO from '../components/seo'
import Footer from "../components/footer"


function Post({ pageContext }) {


// var matches = pageContext.content.replace(/\[(.*?)\]/g, pageContext.imageurl);
//
// console.log(matches);

return (
  <>
  <SEO title={pageContext.title}/>
  <div className="grid-container">
    <MainMenu />
    <article className="article-selected">
      <h2>{Parser(pageContext.title)}</h2>
      <div>{Parser(pageContext.content)} </div>
    </article>
    <div className="image-selected"> <Image imgName={pageContext.image}/>
    </div>
    <Comments wpId={pageContext.wp_id} slug={pageContext.slug}/>
    <Commentslist wpId={pageContext.wp_id} />
    <Footer />
  </div>
  </>
)
}
export default Post
