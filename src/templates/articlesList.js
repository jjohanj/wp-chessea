import React from "react"
import ArticlesSecond from "../components/articles-second"
import Layout from "../components/layout"

const ArticlesList = ({location}) => {

return (
  <Layout aPage="grid-container article-list">
    <div className="list">
      <ArticlesSecond type="list" />
    </div>
  </Layout>
  )
}
export default ArticlesList
