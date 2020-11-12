import React from 'react';
// style
import "./style.css"

function ContactCard() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="contactCard" data-aos="fade-up">
          <h1 className="contactCardHeader">CONTACT ME</h1>
          <br></br>
          <p>PHONE: (704) 254-1583</p>
          <p>EMAIL: <a href="mailto:wilsoncollin7@gmail.com" id="emailLink"> wilsoncollin7@gmail.com</a></p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="contactCard" data-aos="fade-up">
          <h1 className="contactCardHeader">CHECK ME OUT</h1>
          <br></br>
          <p><a href="assets/dev-photos/Collin Dean Wilson .pdf" target="#" id="resumeLink"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> CHECK OUT MY RESUME</a></p>
          <p><a href="https://github.com/wilsoncollin7" target="#" id="gitLink"><span className="fa fa-github"></span> CHECK OUT MY GITHUB</a></p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
 