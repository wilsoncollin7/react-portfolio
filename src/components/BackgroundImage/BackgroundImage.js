import React from 'react';
// style
import "./style.css"
// import components
import Image from "../../assets/mountians.jpg";

function BackgroundImage() {
  return (
    <>
      <img className="backgroundImage" src={Image} alt="mountians"></img>
    </>
  )
}

export default BackgroundImage;
