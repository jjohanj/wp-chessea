import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Articles from "../components/articles"
import './page.css';


function ArticlesList({ pageContext }) {

// var str = pageContext.content;
//
// var result = str.match(/<em>(.*?)<\/em>/g);
//   if (result) {
//     result = result.map(function(val, i){
//       return val.replace(/<\/?em>/g,'');
//  });
//  var image = result.map((item, i) => {
//    return (
//      <div className="img" key={i}>
//       <Image imgName={item} />
//      </div>
//    )
//  });
// }
//
// else {
//   var image = null;
// }
return (
  <Layout>
  <div className="grid-container">
    <div className="grid-text">
      <Image imgName={pageContext.image}/>
      <div dangerouslySetInnerHTML={{__html: pageContext.content.content}} />
      <Articles />
    </div>
  </div>
  </Layout>
)
}
export default ArticlesList
