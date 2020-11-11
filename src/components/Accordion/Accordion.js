import React from "react";
// style
import "./style.css"

function Accordion() {
  return (
    <div className="accordion" id="aboutAccordion" data-aos="fade-up">
      <div className="aboutItem">
        <div className="card-body" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-block collapsed aboutBtn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            UNC WILMINGTON GRADUATE
            </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#aboutAccordion">
          <div className="card-body">
              I graduated from UNC Wilmington in 2018. I have a bachelors in Political Science where I focused on international politics and terrorism. At university I was a pioneer student in their study abroad program to Aberdeen, Scotland. There I lived in Scotland for a year and traveled all over the continent!                      
          </div>
        </div>
      </div>
      <div className="aboutItem">
        <div className="card-body" id="headingTwo">
          <h2 className="mb-0">
            <button className="btn btn-block collapsed aboutBtn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            UNC CHAPEL HILL TRAINED WEB DEVELOPER
            </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#aboutAccordion">
          <div className="card-body">
            I am currently enrolled at UNC Chapel Hill with their Full Stack Web Development program. Here I am learning everything there is to know about Full Stack Development. I am set to graduate the program in December of 2020!                      
          </div>
        </div>
      </div>
      <div className="aboutItem">
        <div className="card-body" id="headingThree">
          <h2 className="mb-0">
            <button className="btn btn-block collapsed aboutBtnLast" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            MAKER WITH A PASSION FOR ART AND DESIGN
            </button>
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#aboutAccordion">
          <div className="card-body">
            I have a passion for working with my hands! I come from an artistic family where I was pushed to pursue my design skills and ideas. I have always had a great knack for graphic design and engineering. With my talents I have even broken into jewelry design!                      
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;
