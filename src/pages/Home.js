import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";
import Subheader from "../components/Subheader/Subheader";
import SocialOverlay from "../components/SocialOverlay/SocialOverlay";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

function Home() {
  return (
    <Wrapper className="wrapper">
      <Row>
        <BackgroundImage />
        <div className="homeHeaderDiv">
          <Header className="home" title="COLLIN WILSON"/>
          <Subheader className="homeSubHeader" title="DESIGNER | MAKER | CREATOR"/>
        </div>
        <SocialOverlay />
      </Row>
    </Wrapper>
  )
}

export default Home;
