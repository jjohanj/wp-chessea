import React, { useState, useLayoutEffect } from "react"
import {graphql, useStaticQuery, Link } from "gatsby"
import { FaBars } from 'react-icons/fa';


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

  const data = useStaticQuery(graphql`
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
  `);


  const menu =  data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, i) => {

    return (
            <li key={i}><Link activeStyle={{ color: "#087F8C" }} to={`/${item.object_slug}`}>{item.title}</Link></li>
    )});

return (
  <>
    <h1><Link to="/"> Chessea</Link></h1>
      <nav className={nav}>
        <button aria-label="navigation" className="btn btn-nav" onClick={() => nav === "open" ? setNav("closed") : setNav("open")}><FaBars /></button>
        <ul className={size[0] > 768 ? "big" : "small"}>
          <li><Link to="/">Chessea</Link></li>
          {menu}
          <li><Link activeStyle={{ color: "#087F8C" }} to="page-2">Competitie</Link></li>
        </ul>
      </nav>
  </>
);
}
export default MainMenu
