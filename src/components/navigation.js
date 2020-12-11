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
     <header className={`mb-md-20 bg-white-lm ${nav}`}>
      <div className="container text-center d-flex align-items-center ">
        <div className="h1 main-heading py-10 m-0 pl-15 pl-md-0">
          <Link to="/">Chessea</Link>
        </div>
        <nav className="navbar p-0">
          <div className="title navbar-content">
            <button aria-label="navigation" className="btn btn-light btn-lg btn-nav mr-15 mr-md-0 d-flex d-md-none align-items-center" onClick={() => nav === "open" ? setNav("closed") : setNav("open")}><AiOutlineMenu className="font-size-20 mr-10"/>Menu</button>
            <ul className={nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/competitie">Competitie</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>


  );
}
export default Navigation
