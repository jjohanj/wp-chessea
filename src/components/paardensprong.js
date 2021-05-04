import React from "react"


const Paardensprong = () => {

  return (
    <>
    <div className="igrid">
      <div className="koning iframe-container">
        <iframe title="stand koningsgroep" src="https://brambaptist.nl/competitie/2020-2021/koning/p4/" height="500" width="450"></iframe>
      </div>
      <div className="dame iframe-container">
        <iframe title="stand damegroep" src="https://brambaptist.nl/competitie/2020-2021/dame/p4/" height="500" width="450"></iframe>
      </div>
      <div className="iframe-container toren">
        <iframe title="stand torengroep" src="https://brambaptist.nl/competitie/2020-2021/toren/p4/" height="500" width="450"></iframe>
      </div>
    </div>
    </>
)};

export default Paardensprong
