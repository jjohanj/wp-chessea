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
        <ul key={i}>
          <li>{item.node.acf.date} - {item.node.title}</li>
        </ul>

      )})
  return (
    <>
      {post}
    </>
)}

export default Calender
