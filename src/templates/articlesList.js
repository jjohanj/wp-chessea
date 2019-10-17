import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Articles from "../components/articles"
import MainMenu from "../components/mainmenu"


function ArticlesList({ pageContext }) {


return (
  <div className="grid-container article-list">
    <MainMenu />
    <div className="hero"><Image imgName={pageContext.image}/></div>
    <h2>{pageContext.title}</h2>
    <div className="list">
      <Articles />
    </div>
  </div>
)
}
export default ArticlesList
