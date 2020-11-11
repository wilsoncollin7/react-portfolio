import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function About() {
  return (
    <>
      <Wrapper className="wrapper aboutWrapper">
        <Row>
          <Header className="about" title="About"/>
        </Row>
      </Wrapper>
      <Footer />
    </>
  )
}

export default About;
