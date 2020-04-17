import React from "react"
import Matches from "../components/matches"
import Layout from "../components/layout"

function MatchesList({ }) {

return (
  <Layout aPage="grid-container matches-list">
    <div className="list">
      <Matches />
    </div>
  </Layout>
  )
}
export default MatchesList
