import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import './page.css';


function Page({ pageContext }) {

return (
  <div className="grid-container">
    <MainMenu />
    <div className="hero"><Image imgName={pageContext.image}/></div>
    <h2>{pageContext.title}</h2>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </div>
)
}
export default Page
