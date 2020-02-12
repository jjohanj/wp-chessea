// import React from "react"
// import Articles from "../components/articles"
// import Articles2 from "../components/articles2"
// import MainMenu from "../components/mainmenu"
// import SEO from '../components/seo';
// import Footer from "../components/footer"
//
//
// const ArticlesList = ({location}) => {
// console.log(location);
//
// return (
//   <>
//   <SEO title="Artikelen"/>
//   <div className="grid-container article-list test">
//     <MainMenu />
//
//     <div className="list">
//       <Articles2 type="list" tag={location.state.tag}/>
//     </div>
//     <Footer />
//   </div>
//     </>
// )
// }
// export default ArticlesList

import React, { useState, useEffect } from "react"
import Articles from "../components/articles"
import Articles2 from "../components/articles2"
import MainMenu from "../components/mainmenu"
import SEO from '../components/seo';
import Footer from "../components/footer"


function ArticlesList ({location}) {


const [tag, setTag] = useState();

useEffect(() => {
 if (location.state != null) {
setTag(location.state.tag);
}    else {
        setTag(null);
    }
  },[]
  );

console.log(tag);
if (!tag) {
  return null
}
else {
return (
<>
<SEO title="Artikelen"/>
<div className="grid-container article-list">
  <MainMenu />

  <div className="list">
    <Articles2 type="list" tag={tag}/>
  </div>
  <Footer />
</div>
  </>
)
}
}
export default ArticlesList
