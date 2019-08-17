import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import 'page.css';


function Page({ pageContext }) {

return (
  <Layout>
  <div className="grid-container">
  <div className="grid-text">
  <h1>{pageContext.title}</h1>
   <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
   <div>
   <div className="grid-img"><Image /></di>
   </div>
  </Layout>
)
}
export default Page
