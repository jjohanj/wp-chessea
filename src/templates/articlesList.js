import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Articles from "../components/articles"
import MainMenu from "../components/mainmenu"
import Parser from 'html-react-parser'


function ArticlesList({ pageContext }) {


return (
  <div className="grid-container article-list">
    <MainMenu />
    <div className="hero header"><Image imgName={pageContext.image}/></div>
    <h2>{Parser(pageContext.title)}</h2>
    <div className="list">
      <Articles />
    </div>
  </div>
)
}
export default ArticlesList
