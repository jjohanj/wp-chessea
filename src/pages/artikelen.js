import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Image from '../components/image'
import {graphql, useStaticQuery, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout';
import Seo from '../components/seo';

function Artikelen({location}) {

  const [tag, setTag] = useState();
  const [filterMenu, setFilterMenu] = useState([]);
  const [articles, setArticles] = useState([]);


  const data = useStaticQuery(graphql`
    query {
      allWpTag(sort: {fields: name}) {
        edges {
          node {
            name
          }
        }
      }
      allWpPost(sort: {fields: databaseId, order: DESC}) {
        edges {
          node {
            title
            slug
            uri
            date (formatString: "D MMMM, YYYY", locale: "nl")
            databaseId
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                name
              }
            }
            featuredImage {
                node {
                  localFile {
                    name
                    base
                  }
                }
              }
            }
          }
        }
      }

  `);

  useEffect(() => {
    setFilterMenu(data.allWpTag.edges);
    setArticles(data.allWpPost.edges);

    if (tag && tag != "all" ) {
      setArticles(data.allWpPost.edges.filter(item => {
         return item.node.tags.nodes.some(obj => obj.name === tag);
     })
    );
    }
    else if (tag === "all") {
      setArticles(data.allWpPost.edges);
    }
    else if ( location.state && location.state.articleTag !== "all") {
       setArticles(data.allWpPost.edges.filter(item =>{
         return item.node.tags.nodes.some(obj => obj.name === location.state.articleTag)
     }));
   }
 },[tag, location.state]
  );

  var clickLink = (i) => {
    navigate(i);
  }

  var menu = null;
  var options = null;
  var blog = null;

  if (filterMenu) {
    options = filterMenu.map((item, i) => {
    return (
       <React.Fragment key={i}><option value={item.node.name}>{item.node.name}</option>
      </React.Fragment>
    )
    });
     menu = filterMenu.map((item, i) => {
      return (
         <React.Fragment key={i}><li className="d-inline"><button onClick={() => setTag(item.node.name)}>{item.node.name}</button></li>
        </React.Fragment>
      )
    });
  }
  // var blog = articles.filter(item => item.node.categories.nodes.some(obj => obj.name !== "game")
  // ).map((item, i) => {
  if (articles.length === 0 && filterMenu.length === 0) {
    return (
            <Layout>
      <div className="vh-100"></div>
            </Layout >
    )
  }

  var blog = articles.map((item, i) => {

    var className = i % 2 === 0 || i == 0 ? "grid-1" : "grid-2";
    return (
      <li className={className} key={i}>
      <article onClick = {() => clickLink(item.node.uri)}>
      <div>
        <Image imgName={item.node.featuredImage.node.localFile.base} />
      </div>
      <div className="content border-right">
       <div>
        <h2>
          <Link className="text-dark font-weight-bold" to={item.node.uri} itemProp="url">
            <span itemProp="headline">{item.node.title}</span>
          </Link>
        </h2>
        <small className="date">{item.node.date}</small>
        </div>
      </div>
      </article>
      </li>
    )
  }
);


  return (
    <>
      <Layout >
        <ul className="list grid-container-4">
          {blog}
          <li className="tags-list row-1">
            <ul>
              <li><h3>Tags</h3></li>
              <li className="d-inline"><button onClick={() => setTag("all")}>Toon alles</button></li>
              {menu}
            </ul>
          </li>
        </ul>
      </Layout>
    </>

  )
}
export default Artikelen
