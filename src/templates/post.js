import React from "react"


function Post({ pageContext }) {

return (
  <div>
  <h1>{pageContext.title}</h1>
  <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </div>
)
}
export default Post
