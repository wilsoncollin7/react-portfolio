import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Accordion from "../components/Accordion/Accordion";
import Hobbies from "../components/Hobbies/Hobbies";
import Footer from "../components/Footer/Footer";


function About() {
  return (
    <>
      <Wrapper>
        <Container className="aboutContainer">
          <Header className="about" title="About"/>
          <Accordion />
          <Hobbies />
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export default About;
