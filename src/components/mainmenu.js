import React from "react"
import {graphql, useStaticQuery, Link } from "gatsby"
import "./mainmenu.css"

function MainMenu() {
  var data = useStaticQuery(graphql`
    query {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq: "Navigation"
          }
        }) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
  `)

  var menu =  data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, i) => {

    return (
            <li key={i}><Link to={`/${item.object_slug}`}>{item.title}</Link></li>
    )})

return (
  <>
  <h1><Link to="/"> Chessea </Link></h1>
  <nav>
    <ul>
      {menu}
    </ul>
  </nav>
  </>
)
}
export default MainMenu
