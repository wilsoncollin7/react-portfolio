import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

function Home() {
  return (
    <Wrapper>
      <Row>
        <BackgroundImage />
        <Header class="home" title="COLLIN WILSON"/>
      </Row>
    </Wrapper>
  )
}

export default Home;
