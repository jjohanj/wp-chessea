import React from "react"
import Matches from "../components/matches"
import MainMenu from "../components/mainmenu"

function MatchesList({ }) {

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
