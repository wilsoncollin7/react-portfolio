import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer";
import projects from "../data/projects.json";


function Projects() {
  return (
    <>
    <Wrapper>
      <Container className="projectContainer">
        <Header className="projectHeader" title="Projects"/>
        <ProjectsContainer projects={projects}/>
      </Container>
    </Wrapper> 
    <Footer />
  </>
  )
}

export default Projects;
