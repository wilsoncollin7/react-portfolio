import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import ContactCard from "../components/ContactCard/ContactCard";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Wrapper>
        <Container className="contactContainer">
          <Header title="Contact"/>
          <ContactCard />
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Contact;
