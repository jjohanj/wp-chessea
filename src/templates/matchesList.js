import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Matches from "../components/matches"
import MainMenu from "../components/mainmenu"
import Parser from 'html-react-parser'


function MatchesList({ pageContext }) {


return (
  <div className="grid-container matches-list">
    <MainMenu />
    <div className="list">
      <Matches />
    </div>
  </div>
)
}
export default MatchesList
