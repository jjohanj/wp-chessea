import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import './page.css';
import Parser from 'html-react-parser'

function Page({ pageContext }) {

return (
  <div className="grid-container">
    <MainMenu />
    <div className="hero"><Image imgName={pageContext.image}/></div>
    <h2>{Parser(pageContext.title)}</h2>
    <div>{Parser(pageContext.content)} </div>
  </div>
)
}
export default Page
