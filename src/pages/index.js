import React, { lazy, Suspense } from 'react';
import Articles from "../components/articles"
import Layout from "../components/layout"

const ArticlesSecond = lazy(() => import('../components/articles-second'));

const renderLoader = () => <p>Loading</p>;
const IndexPage = () => {

  return (
    <Layout aPage="grid-container home">
        <Articles liststart ="0"  listend="4" type="main"/>
        <Suspense fallback={renderLoader()}>
        <ArticlesSecond liststart ="4"  listend="8" type="secondary"/>
        </Suspense>
    </Layout>
  )
}

export default IndexPage
