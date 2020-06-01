import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import {graphql, useStaticQuery } from "gatsby"
import Parser from 'html-react-parser'


const ArticlesSecond = (props) => {

  const data = useStaticQuery(graphql`
    query {
        allWordpressPost
        {
          edges
          {
            node
            {
              id,
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

   let handleClick = (type, val) => {
    // document.getElementById(type+'-link-'+val).click();
    document.getElementsByClassName(type+'-article-'+val)[0].getElementsByTagName('a')[0].click();
    };

    const post =  data.allWordpressPost.edges.slice(props.liststart, props.listend).map((item, i) => {
      return (
        <article className={`${props.type}-articles ${props.type}-article-${i}`} key={i}  onClick={() => handleClick(props.type, i)} >
          <Image imgName={item.node.featured_media.localFile.base}/>
          <div className="content">
            <p className="date">
              <span>{item.node.acf.datum}</span>
            </p>
            <h3><Link to={`/articles/${item.node.slug}`}>{Parser(item.node.title)}</Link></h3>
            <div>{Parser(item.node.content.substring(0,70) + ' ...' )} </div>
          </div>
        </article>

      )});

  return (
    <>
      {post}
    </>
)};

export default ArticlesSecond
