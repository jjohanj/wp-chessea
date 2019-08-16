import React from "react"
import Layout from "../components/layout"


function Page({ pageContext }) {

return (
  <Layout>
  <h1>{pageContext.title}</h1>
   <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
)
}
export default Page
