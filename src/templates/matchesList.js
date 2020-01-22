import React from "react"
import Matches from "../components/matches"
import MainMenu from "../components/mainmenu"
import SEO from '../components/seo';

function MatchesList({ }) {

return (
  <>
    <SEO title="Partijen"/>
  <div className="grid-container matches-list">
    <MainMenu />
    <div className="list">
      <Matches />
    </div>
  </div>
    </>
)
}
export default MatchesList
