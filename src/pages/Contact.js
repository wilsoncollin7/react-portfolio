import React from 'react';
// import components
import Wrapper from "../components/Wrapper/Wrapper";
import Row from "../components/Row/Row";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Contact() {
  return (
    <>
      <Wrapper>
        <Row>
          <Header title="Contact"/>
        </Row>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Contact;
