import React, { useState, useLayoutEffect, useEffect } from "react"
import { FaMoon } from 'react-icons/fa'
import {navigate, Link } from "gatsby"
function Mobilenav() {

  // const [size, setSize] = useState([0, 0]);
  const [nav, setNav] = useState("closed");
  const [darkmode, setDarkmode] = useState(JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('colorscheme')));
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
    typeof window !== 'undefined' && sessionStorage.setItem('colorscheme', JSON.stringify(darkmode))
    window.addEventListener('keydown', downHandler);
    return () => window.removeEventListener("keydown", downHandler);
    }, [darkmode]);

    let toggleDarkmode = () => {
      darkmode !== "darkmode" ? setDarkmode("darkmode") : setDarkmode("");
    }

    function downHandler(event){
      if(event.keyCode === 27) {
        navigate(-1);
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
    <div className={`${darkmode} page-content-wrapper`}>
      <div className="container">
        <header>
          <div className="logo">
            <Link to="/">Chessea</Link>
          </div>
        <nav>
          <button className="toggle btn-pink" onClick={toggleDarkmode}><span className="visually-hidden">Lichte / donkere modus</span><FaMoon /></button>
          <Link className="close" to="/mobilenav" aria-label="navigation" onClick={() => { navigate(-1) }}><span>Sluiten</span></Link>
        </nav>
        </header>
      <ul className='mobilenav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artikelen" state={{ articleTag: "all" }}>Artikelen</Link></li>
      </ul>
      </div>
    </div>
  );
}
export default Mobilenav
