import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import loadable from '@loadable/component'

const ArticlesSecond = loadable(() => import('../components/articles-second'))

const IndexPage = () => {

  return (
    <Layout aPage="grid-container home">
        <Articles  type="main"/>
    </Layout>
  )
}

export default IndexPage
