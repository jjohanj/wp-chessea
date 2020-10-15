import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaChess } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import "./footer.css"

function Footer(props) {
  return (
  <footer>
    <div className="contact">
      <div className="social">
        <h5>Contact:</h5>
        <ul>
          <li><a href="mailto:johanjorritsma@hotmail.com"><FaEnvelopeSquare />E-mail</a></li>
          <li><a  href="https://nl.linkedin.com/in/johan-jorritsma" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linkedin</a></li>
        </ul>
      </div>
      <div className="clubs">
        <h5>Club:</h5>
        <ul>
          <li><a  href="https://www.scdepaardensprong.nl" target="_blank" rel="noopener noreferrer"><FaChess />SC de Paardensprong</a></li>
        </ul>
        </div>
        <button className="toggle bg-pink" onClick={props.dark}><FaMoon /></button>
      </div>
    </footer>
  )


}

export default Footer
