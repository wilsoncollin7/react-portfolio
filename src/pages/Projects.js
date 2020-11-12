import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";


function Projects() {
  return (
    <>
    <Wrapper>
      <Container className="projectContainer">
        <Header title="Projects"/>
      </Container>
    </Wrapper> 
    <Footer />
  </>
  )
}

export default Projects;
