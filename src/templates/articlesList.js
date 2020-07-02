import React, { useState, useEffect } from "react"
import ArticlesSecond from "../components/articles-second"
import Layout from "../components/layout"
import Articles2 from "../components/articles2"

function ArticlesList ({location}) {

  const [tag, setTag] = useState();

  useEffect(() => {
   if (location.state != null) {
     setTag(location.state.tag);
   }
   else {
      setTag(null);
      }
    },[]
  );


return (
  <Layout aPage="grid-container article-list">
    <div className="list">
      <Articles2 type="list" tag={tag}/>
    </div>
  </Layout>
  )
}
export default ArticlesList
