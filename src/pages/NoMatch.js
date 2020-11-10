import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";

function NoMatch() {
  return (
    <Wrapper>
      <Row>
        <Header title="404 NOT FOUND"/>
      </Row>
    </Wrapper>
  )
}

export default NoMatch;
