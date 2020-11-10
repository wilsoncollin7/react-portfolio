import React from 'react';
//style
import "./style.css";

function Footer() {
  return (
    <footer>
      <span>
        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/collin.wilson.167/" target="#">
          <span className="fa fa-facebook"></span>
        </a>
        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/callingmewilson/" target="#">
          <span className="fa fa-instagram"></span>
        </a>
        <a className="btn btn-social-iconedin" href="https://www.linkedin.com/in/collin-wilson-a512351a8/" target="#">
          <span className="fa fa-linkedin"></span>
        </a>
        <a className="btn btn-social-icon btn-youtube" href="https://www.youtube.com/channel/UCxEPolHlcRK6zDetwazkm9w?view_as=subscriber" target="#">
          <span className="fa fa-youtube"></span>
        </a>
        <h6 className="mt-3">© 2020 Collin Wilson.</h6>
      </span>
    </footer>
  )
}

export default Footer;
