import React from 'react';
import Resume from "../../assets/Collin Dean Wilson.pdf"

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="/home">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projects">PROJECTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact" >CONTACT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={Resume} target="#" >RESUME</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;
