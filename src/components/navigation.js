import React, { useState, useLayoutEffect, useEffect } from "react"
import {graphql, useStaticQuery, Link } from "gatsby"

function Navigation() {


  return (
      <header className="header">
        <div className="logo">
          <Link to="/">Chessea</Link>
        </div>
        <nav>
            <Link to="/mobilenav" aria-label="navigation"><span>Menu</span></Link>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/artikelen" state={{ articleTag: "all" }}>Artikelen</Link></li>
            </ul>
        </nav>
      </header>


  );
}
export default Navigation
