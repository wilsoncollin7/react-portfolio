import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";

function NoMatch() {
  return (
    <Wrapper>
      <Header className="notFound" title="404 NOT FOUND"/>
    </Wrapper>
  )
}

export default NoMatch;
