import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from 'gatsby';

function Commentslist (props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://flonxchess.nl/wp-json/wp/v2/comments/',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  var comments = data.map((item, i) => {
    if (item.post === props.wpId) {
  return (
    <div key={item.id}>
      <div  className="grid-item-k">
        <div className="date">{item.content.rendered}</div>
      </div>
    </div>
  )
}
else {
  return (
    null
  )
}


  })

  console.log(data);
  return (
    <div>{comments}</div>
  )
}
export default Commentslist
