import React, { useState, useLayoutEffect, useEffect } from "react"
import {graphql, useStaticQuery, Link } from "gatsby"
import "./mainmenu.css"
import { FaBars } from 'react-icons/fa';
import Parser from 'html-react-parser'

function MainMenu() {

  const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
      }, []);

  const [nav, setNav] = useState("closed");

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
            <li key={i}><Link activeStyle={{ color: "#087F8C" }} to={`/${item.object_slug}`}>{item.title}</Link></li>
    )})

return (
  <>
<h1><Link to="/"> Chessea</Link></h1>
  <nav className={nav}>
  <button className="btn btn-nav" onClick={() => nav === "open" ? setNav("closed") : setNav("open")}><FaBars /></button>
    <ul className={size[0] > 768 ? "big" : "small"}>
      <li><Link to="/">Chessea</Link></li>
      {menu}
    </ul>
  </nav>
  </>
)
}
export default MainMenu
