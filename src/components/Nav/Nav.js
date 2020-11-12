import React from 'react';
import { Link } from "react-router-dom";
import Resume from "../../assets/Collin Dean Wilson.pdf"
// style
import "./style.css"

function Nav() {
  return (
    <nav className="navbar-expand-lg">
        <button className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target=".navbar-collapse" 
          aria-controls="navbar-collapse" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" >CONTACT</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={Resume} target="#" >RESUME</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;
