import React from "react"
import Articles from "../components/articles"
import Calendar from "../components/calendar"
import Gallery2 from "../components/gallery2"
import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <>
            <button className="btn btn-sm btn-info" onClick={() => { window.history.go(-1)}}>Sluiten</button>
        <Calendar />
    </>
  )
}

export default IndexPage
