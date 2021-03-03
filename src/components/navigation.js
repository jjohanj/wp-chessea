import React, { useState, useLayoutEffect, useEffect } from "react"
import {graphql, useStaticQuery, Link } from "gatsby"
import "./navigation.css"
import {AiOutlineMenu} from "react-icons/ai"

function Navigation() {

  // const [size, setSize] = useState([0, 0]);
  const [nav, setNav] = useState("closed");
  // const [scroll, setScroll] = useState("");
  // //
  // useLayoutEffect(() => {
  //   function updateSize() {
  //     setSize([window.innerWidth, window.innerHeight]);
  //   }
  //   window.addEventListener('resize', updateSize);
  //   updateSize();
  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);


  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', downHandler);
  }, []);

  function downHandler(event){
    if(event.keyCode === 27) {
      setNav("closed");
    }
  }
  // function handleScroll(event) {
  //   let scrollTop = event.srcElement.body.scrollTop;
  //   if (scrollTop > "152") {
  //     setScroll("scrolled");
  //   }
  // }
  // handleScroll();


  return (
      <header className={`container ${nav}`}>
        <div className="logo">
          <Link to="/">Chessea</Link>
        </div>
        <nav>
            <button aria-label="navigation" className="btn btn-nav " onClick={() => nav === "open" ? setNav("closed") : setNav("open")}><span>Menu</span><AiOutlineMenu /></button>
            <ul className={nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/artikelen" state={{ articleTag: "all" }}>Artikelen</Link></li>
              <li><Link to="/competitie">Competitie</Link></li>
            </ul>
        </nav>
      </header>


  );
}
export default Navigation
