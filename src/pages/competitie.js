import React, {useEffect, useState} from 'react'
import Image from '../components/image'
import {graphql, useStaticQuery, Link, navigate } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo'
import Paardensprong from '../components/paardensprong'

function Competitie({location}) {

  return (
    <Layout isHomePage>
      <SEO title="All posts" />

      <ul className="grid-container">
        <Paardensprong />
      </ul>
    </Layout>
  )
}

export default Competitie
