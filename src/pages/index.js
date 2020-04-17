import React from "react"
import Articles from "../components/articles"
import Calender from "../components/calender"
import Layout from "../components/layout"
import Paardensprong from "../components/paardensprong"

const IndexPage = () => {

  return (
    <>
    <Layout aPage="grid-container home">
        <Articles liststart ="0"  listend="2" type="main"/>
        <Calender />
        <Articles liststart ="2"  listend="6" type="secondary"/>
    </Layout>
    </>
  )
}

export default IndexPage
