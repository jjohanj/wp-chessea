import React from "react"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"

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

  `)

    const post =  data.allWordpressWpCalender.edges.map((item, i) => {

      return (
          <li key={i}>{item.node.acf.date} - {item.node.title}</li>
      )})
  return (
    <ul className="calender">
      {post}
    </ul>
)}

export default Calender
