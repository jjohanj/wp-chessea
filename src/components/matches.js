import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import Parser from 'html-react-parser'
import {graphql, StaticQuery, useStaticQuery } from "gatsby"
import { FaExternalLinkAlt } from 'react-icons/fa';

const Matches = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpMatch {
        edges {
          node {
            featured_media {
              localFile {
                base
              }
            }
            acf {
              link
            }
            title
            content
          }
        }
      }
    }

  `)

   var handleClick = (i) => {
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName('matches-'+i)[0].getElementsByTagName('a')[0].click();

    }

    var matches =  data.allWordpressWpMatch.edges.map((item, i) => {

      return (
        <div className={`matches matches-${i}`} key={i}  onClick={() => handleClick(i)} >
          <div class="hero">
            <Image imgName={item.node.featured_media.localFile.base}/>
          </div>
          <div className="content">
          <FaExternalLinkAlt />
            <h3><a href={item.node.acf.link} target="blank" rel="noopener" >{item.node.title}</a></h3>
            <div>{Parser(item.node.content)}</div>
          </div>
        </div>

      )})
  return (
    <>
      {matches}
    </>

)}

export default Matches
