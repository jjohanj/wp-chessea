import React from "react"
import MainMenu from "../components/mainmenu"
import Articles from "../components/articles"
import Calender from "../components/calender"
import Paardensprong from "../components/paardensprong"
import Footer from "../components/footer"
import "../components/layout.css"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <>
    <SEO title="chessea"/>
    <div className="grid-container">
      <MainMenu />
      <Articles liststart ="0"  listend="2" type="main"/>
      <Calender />
      <Articles liststart ="2"  listend="6" type="secondary"/>
    </div>
    <Footer />
    <Paardensprong />
    </>

)};

export default IndexPage
