import React from "react"
import Articles from "../components/articles"
import ArticlesSecond from "../components/articles-second"
import Calender from "../components/calender"
import Layout from "../components/layout"
import LazyLoadComponent from 'react-intersection-observer-lazy-load'


const IndexPage = () => {

  return (
    <Layout aPage="grid-container home">
        <Articles liststart ="0"  listend="4" type="main"/>
        <LazyLoadComponent>
        <ArticlesSecond liststart ="4"  listend="8" type="secondary"/>
        </LazyLoadComponent>
    </Layout>
  )
}

export default IndexPage
