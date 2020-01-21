import React from "react"
import Articles from "../components/articles"
import MainMenu from "../components/mainmenu"


function ArticlesList({ }) {


return (
  <div className="grid-container article-list">
    <MainMenu />

    <div className="list">
      <Articles type="list"/>
    </div>
  </div>
)
}
export default ArticlesList
