import React from "react"
import Articles from "../components/articles"
import ArticlesSecond from "../components/articles-second"
import Calender from "../components/calender"
import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <Layout aPage="grid-container home">
        <Articles liststart ="0"  listend="4" type="main"/>
        <ArticlesSecond liststart ="4"  listend="8" type="secondary"/>
    </Layout>
  )
}

export default IndexPage
