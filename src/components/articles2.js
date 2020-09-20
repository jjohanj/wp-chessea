import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import {graphql, useStaticQuery } from "gatsby"
import Parser from 'html-react-parser'
import "./articles.css"


function Articles2 (props) {

  const [tag, setTag] = useState();
  const [filterMenu, setFilterMenu] = useState();
  const [articles, setArticles] = useState([]);
  const data = useStaticQuery(graphql`
    query {
        allWordpressTag(sort: {fields: name}) {
          edges {
            node {
              name
              id
            }
          }
        }
        allWordpressPost(sort: {fields: date, order: DESC})
        {
          edges
          {
            node
            {
              date
              title,
              content,
              path,
              slug
              acf {
                datum
              }
              featured_media {
                localFile {
                  base
                }
              }
              tags {
                name
              }
            }
          }
        }
      }
  `);

  useEffect(() => {
    console.log(props.tag);
    setFilterMenu(data.allWordpressTag.edges);
    setArticles(props.list);
    if (tag && tag != "all" ) {
       setArticles(data.allWordpressPost.edges.filter(item =>{
         return item.node.tags.some(obj => obj.name === tag)
     }));
    }
    else if (tag === "all" ) {
      setArticles(props.list);
    }
    else if ( props.tag ) {
       setArticles(data.allWordpressPost.edges.filter(item =>{
         return item.node.tags.some(obj => obj.name === props.tag)
     }));
    }
  },[tag, props.tag]
  );

   let handleClick = (type, val) => {
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName(type+'-article-'+val)[0].getElementsByTagName('a')[0].click();
    };


    var menu = null;
    var options = null;

    if (filterMenu) {
     options = filterMenu.map((item, i) => {
      return (
         <React.Fragment key={item.id}><option value={item.node.name}>{item.node.name}</option>
        </React.Fragment>
      )
    });
  }
  let handleChange = (event) => {
      let value = event.target.value;
      setTag(value);
  }
    if (filterMenu) {
     menu = filterMenu.map((item, i) => {
      return (
         <React.Fragment key={item.id}><li><button className="btn btn-pink btn-xs" onClick={() => setTag(item.node.name)}>{item.node.name}</button></li>
        </React.Fragment>
      )
    });
  }

    if (filterMenu) {
     menu = filterMenu.map((item, i) => {
      return (
         <React.Fragment key={item.id}><li><button className="btn btn-pink btn-xs" onClick={() => setTag(item.node.name)}>{item.node.name}</button></li>
        </React.Fragment>
      )
    });
  }
    const post =  articles.map((item, i) => {
      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
          {props.type !== 'main' ?
                    <><p className="date"><span>{item.node.acf.datum}</span></p><h3><Link to={`/articles/${item.node.slug}`}>{Parser(item.node.title)}</Link></h3><div>{Parser(item.node.content.substring(0,70) + ' ...' )} </div></> :
                    <><h3><Link to={`/articles/${item.node.slug}`}>{Parser(item.node.title)}</Link></h3><p className="date"><span>{item.node.acf.datum}</span></p><div>{Parser(item.node.content.substring(0,130) + ' ...' )} </div></> }
          </div>
        </article>

      )});

  return (
    <>
    <div className="filter-select">
    <select className="filter-select" onChange={(e) => handleChange(e)}>
    <option disabled selected>Tags</option>
    <option value="all">Toon alles</option>
    {options}
    </select>
</div>
    <ul className="filter-menu">
      {menu}
      <li><button className="btn btn-pink btn-block btn-xs"onClick={() => setTag("all")}>Toon alles</button></li>
    </ul>
    {post}
    </>
)};

export default Articles2
