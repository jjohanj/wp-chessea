import React from "react"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import Parser from 'html-react-parser'
import SEO from '../components/seo';

function Page({ pageContext }) {

return (
  <>
    <SEO title={pageContext.title}/>
  <div className="grid-container">
    <MainMenu />
    <div className="hero header"><Image imgName={pageContext.image}/></div>
    <h2>{Parser(pageContext.title)}</h2>
    <div>{Parser(pageContext.content)} </div>
  </div>
  <>
)
}
export default Page
