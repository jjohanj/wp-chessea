import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Comments from "../components/comments1"
import Commentslist from "../components/commentslist"
import './page.css';


function Post({ pageContext }) {


// var matches = pageContext.content.replace(/\[(.*?)\]/g, pageContext.imageurl);
//
// console.log(matches);

return (
  <Layout>
  <div className="grid-container">
    <div className="grid-text">
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </div>
    <div className="grid-img"> <Image imgName={pageContext.image}/>
    </div>
    <Comments wpId={pageContext.wp_id} slug={pageContext.slug}/>
    <Commentslist wpId={pageContext.wp_id} />
  </div>
  </Layout>
)
}
export default Post
