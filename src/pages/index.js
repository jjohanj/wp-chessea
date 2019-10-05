import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import MainMenu from "../components/mainmenu"
import SEO from "../components/seo"
import {graphql, StaticQuery, useStaticQuery } from "gatsby"
import Articles from "../components/articles"
import Calender from "../components/calender"
import Page from "../templates/articlesList"

const IndexPage = () => {

  return (
    <Layout>
    <MainMenu />
    <Articles />
    <Calender />
  </Layout>
)}

export default IndexPage
