import React, { useState, useEffect } from "react"
import ArticlesSecond from "../components/articles-second"
import Layout from "../components/layout"
import Articles2 from "../components/articles2"
    import Parser from 'html-react-parser'
    import { Link } from "gatsby"
function ArticlesList ({location, pageContext}) {

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
    <Articles2 list={pageContext.posts} pagination={pageContext.numPages} tag={tag} />
    </div>
    <ul className="pagination list-unstyled list-inline">
    {Array.from({length: pageContext.numPages}).map((page, i)=> (
        <li key={i}><Link activeStyle={{ background: "#cc2675" }} to={i === 0 ? `/artikelen` : `/artikelen/${i + 1}`}>{i + 1}</Link></li>
      ))}
      </ul>
  </Layout>
  )
}
export default ArticlesList

// <Articles2 type="list" tag={tag}/>
