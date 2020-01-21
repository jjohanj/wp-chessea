import React from "react"
import {graphql, useStaticQuery } from "gatsby"

const Calender = () => {
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
            content
          }
        }
      }
    }
  `);

    const post =  data.allWordpressWpCalender.edges.map((item, i) => {

      return (
          <li key={i}><a href="#"><span className="calender-date">{item.node.acf.date}</span><span  className="event"> {item.node.title}</span></a></li>
      )});
  return (
    <>

    <ul className="calender">
    <li><h2>Kalender</h2></li>
      {post}
    </ul>
    </>
)};

export default Calender
