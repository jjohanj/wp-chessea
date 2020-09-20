import React from "react"
import Articles from "../components/articles"
import Calendar from "../components/calendar"
import Gallery2 from "../components/gallery2"
import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <>
    <Layout aPage="grid-container home">
      <Articles  type="main"/>
    </Layout>
    </>
  )
}

export default IndexPage
