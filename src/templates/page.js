import React from "react"
import Image from "../components/image"
import Parser from 'html-react-parser'
import Layout from "../components/layout"

function Page({ pageContext }) {

return (

  <Layout aPage="grid-container">
    <div className="hero header"><Image imgName={pageContext.image}/></div>
    <h2>{Parser(pageContext.title)}</h2>
    <div>{Parser(pageContext.content)} </div>
  </Layout>
  )
}
export default Page
