import React from "react"
import MainMenu from "../components/mainmenu"
import Articles from "../components/articles"
import Calender from "../components/calender"
import Comments from "../components/comments1"
import "../components/layout.css"

const IndexPage = () => {

  return (
    <div className="grid-container">
      <h1>Chessea</h1>
      <MainMenu />
      <Articles liststart ="0"  listend="2" />
      <Calender />
    </div>

)}

export default IndexPage
