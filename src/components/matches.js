import React from "react"
import Image from "../components/image"
import Parser from 'html-react-parser'
import {graphql, useStaticQuery } from "gatsby"
import { FaExternalLinkAlt } from 'react-icons/fa';

const Matches = () => {
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

  `);

   let handleClick = (i) => {
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName('matches-'+i)[0].getElementsByTagName('a')[0].click();

    };

    const matches =  data.allWordpressWpMatch.edges.map((item, i) => {

      return (
        <div className={`matches matches-${i}`} key={i}  onClick={() => handleClick(i)} >
          <div className="hero">
            <Image imgName={item.node.featured_media.localFile.base}/>
          </div>
          <div className="content">
            <FaExternalLinkAlt />
            <h3><a href={item.node.acf.link} target="blank" rel="noopener" >{item.node.title}</a></h3>
            <div>{Parser(item.node.content)}</div>
          </div>
        </div>

      )});
  return (
    <>
      {matches}
    </>

)};

export default Matches
