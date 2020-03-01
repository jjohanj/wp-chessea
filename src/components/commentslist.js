import React, { useState, useEffect } from "react"
import axios from "axios"

function Commentslist (props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var result = await axios(
        'https://flonxchess.nl/wp-json/wp/v2/comments/?per_page=100',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  var comments = data.reverse().map((item, i) => {
  if (item.post === props.wpId) {
  return (
    <div className="comment" key={i} dangerouslySetInnerHTML={{__html: "<p class='comment-author'>" + item.author_name + ":</p>" + item.content.rendered }}/>
    )
  }
  else {
    return (
      null
    )
  }
  })

  return (
    <div className="comments-list">{comments}</div>
  )
}
export default Commentslist
