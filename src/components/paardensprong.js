import React from "react"
import Iframe from 'react-iframe'


const Paardensprong = () => {

  return (
    <>
    <div className="igrid">
    <Iframe url="https://brambaptist.nl/competitie/2019-2020/koning/p3/"
            width="450px"
            height="500px"
            id="myId"
            className="koning"
            display="initial"
            position="relative"
            />
            <Iframe url="https://brambaptist.nl/competitie/2019-2020/dame/p3/"
                    width="450px"
                    height="500px"
                                className="dame"
                    display="initial"
                    position="relative"
                    />
                    <Iframe url="https://brambaptist.nl/competitie/2019-2020/toren/p3/"
                            width="450px"
                            height="560px"
                            id="myId"
                            className="toren"
                            display="initial"
                            position="relative"
                            />
                            </div>
    </>
)};

export default Paardensprong
