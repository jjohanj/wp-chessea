import React from "react"
import "./calendar.css"
import {graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"
import vw from "../../static/images/vw.jpg"

const Calendar = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpCalender {
        edges {
          node {
            acf {
              date
            }
            slug
            title
            featured_media {
              localFile {
                base
              }
            }
          }
        }
      }
    }
  `);
    const post =  data.allWordpressWpCalender.edges.reverse().map((item, i) => {

      return (
          <li key={i} className="poster">
            <div className="content">
              <div className="c-date">{item.node.acf.date}</div>
              <div  className="event"> {item.node.title}</div>
            </div>
            <img  src={vw} alt=""/>
          </li>
      )});
  return (
    <>
    <ul className="calendar">
      {post}
    </ul>
    </>
)};

export default Calendar
