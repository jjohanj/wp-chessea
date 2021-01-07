import React, {useEffect, useState} from 'react'
import Image from '../components/image'
import {graphql, useStaticQuery, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout';

function Artikelen({location}) {

  const [tag, setTag] = useState();
  const [filterMenu, setFilterMenu] = useState();
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
            date
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
         <React.Fragment key={i}><li className="d-inline"><button className="btn btn-light btn-sm m-2" onClick={() => setTag(item.node.name)}>{item.node.name}</button></li>
        </React.Fragment>
      )
    });
  }

  var blog = articles.filter(item => item.node.categories.nodes.some(obj => obj.name !== "game")
).map((item, i) => {
    return (
      <li className="col-lg-6" key={i}>
      <article className="row bg-white-lm pointer mr-10 h-full shadow border-pink p-20" onClick = {() => clickLink(item.node.uri)}>

      <div className="col-lg-6">
        <Image imgName={item.node.featuredImage.node.localFile.base} />
      </div>
      <div className="col-6">
       <div className="d-flex justify-content-center p-20 flex-column h-full">
        <h2 className="h5">
          <Link className="text-dark font-weight-bold" to={item.node.uri} itemProp="url">
            <span itemProp="headline">{item.node.title}</span>
          </Link>
        </h2>
        <small className="date text-primary-lm">{item.node.date}</small>
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
        <div className="row mt-20">
        <ul className="list-unstyled col-md-9 row list">
        {blog}
        </ul>
          <ul className="tags col-md-3 list-unstyled order-first order-md-1 p-10 p-md-0 pr-md-20">
                <li><div className="h5 bg-secondary shadow-yellow text-center mt-0 p-5">Tags</div></li>
                <li className="d-inline"><button className="btn btn-light btn-sm"onClick={() => setTag("all")}>Toon alles</button></li>{menu}</ul>
          </div>
      </Layout>
    </>

  )
}
export default Artikelen
