import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container"
import Footer from "../components/Footer/Footer";


function About() {
  return (
    <>
      <Wrapper>
        <Row>
          <Container className="aboutContainer">
            <Header className="about" title="About"/>
          </Container>
        </Row>
      </Wrapper>
      <Footer />
    </>
  )
}

export default About;
