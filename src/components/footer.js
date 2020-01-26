import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaChess } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
    <div className="contact">
      <h5>Contact:</h5>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="mailto:johanjorritsma@hotmail.com"><FaEnvelopeSquare />E-mail</a></li>
        <li className="list-inline-item"><a  href="https://nl.linkedin.com/in/johan-jorritsma" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linkedin</a></li>
      </ul>
    </div>
    <div className="clubs">
      <h5>Clubs:</h5>
      <ul className="list-inline">
        <li className="list-inline-item"><a  href="https://www.scdepaardensprong.nl" target="_blank" rel="noopener noreferrer"><FaChess />SC de Paardensprong</a></li>
        <li className="list-inline-item"><a  href="https://www.groningercombinatie.nl/" target="_blank" rel="noopener noreferrer"><FaChess />Groninger Combinatie</a></li>
      </ul>
    </div>
    </footer>
  )


}

export default Footer
