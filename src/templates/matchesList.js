import React from "react"
import Matches from "../components/matches"
import MainMenu from "../components/mainmenu"
import SEO from '../components/seo';
import Footer from "../components/footer"

function MatchesList({ }) {

return (
  <>
    <SEO title="Partijen"/>
  <div className="grid-container matches-list">
    <MainMenu />
    <div className="list">
      <Matches />
    </div>
    <Footer />
  </div>
    </>
)
}
export default MatchesList
