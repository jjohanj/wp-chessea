import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Matches from "../components/matches"
import MainMenu from "../components/mainmenu"
import Parser from 'html-react-parser'


function MatchesList({ pageContext }) {


return (
  <div className="grid-container article-list">
    <MainMenu />
    <div className="hero"><Image imgName={pageContext.image}/></div>
    <h2>{Parser(pageContext.title)}</h2>

    <div className="list">
      <Matches />
    </div>
  </div>
)
}
export default MatchesList
