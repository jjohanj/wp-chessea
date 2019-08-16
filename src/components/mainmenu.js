// import React from "react"
// import {graphql, useStaticQuery, Link } from "gatsby"
//
// function MainMenu() {
//   var data = useStaticQuery(graphql`
//     query {
//         allWordpressWpApiMenusMenusItems(filter: {
//           name: {
//             eq: "Navigatie"
//           }
//         }) {
//           edges {
//             node {
//               items {
//                 title
//                 object_slug
//               }
//             }
//           }
//         }
//       }
//
//   `)
//
//   var menu =  data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, i) => {
//
//     return (
//       <div key={i}>
//             <Link to={`/${item.object_slug}`}>{item.title}</Link>
//
//
//           </div>)})
//
// return (
//   <div>
//   {console.log(menu)}
//     {menu}
//   </div>
// )
// }
// export default MainMenu
