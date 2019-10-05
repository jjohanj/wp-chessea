import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import './page.css';


function Page({ pageContext }) {

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
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </div>
    <div className="grid-img"><Image imgName="gatsby-astronaut.png"/>
    {pageContext.template}
    </div>
  </div>
  </Layout>
)
}
export default Page
