import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"

const ArticlesList = ({location}) => {

return (
  <Layout aPage="grid-container article-list">
    <div className="list">
      <Articles type="list" />
    </div>
  </Layout>
  )
}
export default ArticlesList
