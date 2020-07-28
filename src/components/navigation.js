import React, { useState, useLayoutEffect, useEffect } from "react"
import {graphql, useStaticQuery, Link } from "gatsby"
import { FaBars } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'
import "./navigation.css"

function Navigation(props) {

  const [size, setSize] = useState([0, 0]);
  const [nav, setNav] = useState("closed");

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  useEffect(() => {
    window.addEventListener('keydown', downHandler);
  }, []);

  function downHandler(event){
    if(event.keyCode === 27) {
      setNav("closed");
    }
  }

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
            <li key={i}><Link activeStyle={{ background: "#cc2675" }} to={`/${item.object_slug}`}>{item.title}</Link></li>
    )
  });

  return (
    <header className={props.font}>
    <div className="title">
      <h1><Link className="glow" to="/"> Chessea</Link></h1></div>
      <nav className={`bg-pink ${nav}`}>
        <div className="container">
        <button aria-label="navigation" className="btn btn-nav" onClick={() => nav === "open" ? setNav("closed") : setNav("open")}><FaBars className="window-open"/><FaWindowClose className="window-close" /></button>
        <ul className={size[0] > 768 ? "big list-inline" : "small list-inline"}>
          <li><Link activeStyle={{ background: "#cc2675" }} to="/">Home</Link></li>
          {menu}
          <li><Link activeStyle={{ background: "#cc2675" }} to="/page-2"   state={{
    modal: true
  }}>Competitie</Link></li>
  <li><Link activeStyle={{ background: "#cc2675" }} to="/kalender"   state={{
modal: true
}}>Kalender</Link></li>
        </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navigation
