import React from "react"
import { Link } from "gatsby"
import MainMenu from "../components/mainmenu"
import Paardensprong from "../components/paardensprong"
import Footer from "../components/footer"
import SEO from "../components/seo"

const SecondPage = () => {
  return (
    <>
    <SEO title="chessea"/>
    <div className="grid-container">
      <MainMenu />
      <Paardensprong />
      <Footer />
    </div>
    </>

)};
export default SecondPage
