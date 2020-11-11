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
    <Wrapper>
      <Row>
        <BackgroundImage />
        <Header class="home" title="COLLIN WILSON"/>
        <Subheader class="homeSubHeader" title="DESIGNER | MAKER | CREATOR"/>
        <SocialOverlay />
      </Row>
    </Wrapper>
  )
}

export default Home;
