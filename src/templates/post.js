import React from "react"


function Post({ pageContext }) {

return (
  <div>
  <h1>{pageContext.title}</h1>
  <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </div>
)
}
export default Post
