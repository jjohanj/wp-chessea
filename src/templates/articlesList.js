import React from "react"
import Articles from "../components/articles"
import Articles2 from "../components/articles2"
import MainMenu from "../components/mainmenu"
import SEO from '../components/seo';
import Footer from "../components/footer"


const ArticlesList = ({location}) => {

return (
  <>
  <SEO title="Artikelen"/>
  <div className="grid-container article-list test">
    <MainMenu />

    <div className="list">
      <Articles type="list" />
    </div>
    <Footer />
  </div>
    </>
)
}
export default ArticlesList
