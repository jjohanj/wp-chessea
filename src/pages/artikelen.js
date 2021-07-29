import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import {graphql, useStaticQuery, Link, navigate } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
                    childImageSharp {
                      gatsbyImageData (
                         formats: [AUTO, WEBP, AVIF]
                       )
                    }
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
  var handleClick = (i) => {
    setTag("test");
    setTimeout(function(){ setTag(i); }, 10);
  }
  var clickLink = (i) => {
    navigate(i);
  }

  let menu = null;
  let options = null;
  let blog = null;

  if (filterMenu) {
    options = filterMenu.map((item, i) => {
    return (
       <React.Fragment key={i}><option value={item.node.name}>{item.node.name}</option>
      </React.Fragment>
    )
    });
     menu = filterMenu.map((item, i) => {
      return (
         <React.Fragment key={i}><li className="d-inline"><button onClick = {() => handleClick(item.node.name)}>{item.node.name}</button></li>
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
 if (articles.length > 0) {
   blog = articles.map((item, i) => {
        const image = getImage(item.node.featuredImage.node.localFile)

    let className = i % 2 === 0 || i == 0 ? "grid-1 pointer" : "grid-2 pointer";
    return (
      <li className={className} key={i}>
      <article onClick = {() => clickLink(item.node.uri)}>
      <div>
        <GatsbyImage className="h-full" image={image} alt="" />
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
}

  return (
    <>
      <Layout >
        <ul className="list grid-container-4">
          {blog}
          <li className="tags-list row-1">
            <ul className="tags-list">
              <li><h3>Tags</h3></li>
              <li className="d-inline"><button onClick = {() => handleClick('all')}>Toon alles</button></li>
              {menu}
            </ul>
          </li>
        </ul>
      </Layout>
    </>

  )
}
export default Artikelen
