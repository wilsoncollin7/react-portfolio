import React from "react";
// style
import "./style.css"
// import components
import Anvil from "../../assets/anvil.png"
import Jeep from "../../assets/jeep.png"
import Hiking from "../../assets/hiking.png"
import Computer from "../../assets/computer.png"

function Hobbies() {
  return (
    <div className="row hobbies">
      <div className="col-lg-1"></div>
      <div className="col-lg-5">
        <img className="icon" src={Anvil} alt="anvil" data-aos="fade-up"></img>
        <p className="hobbyText" data-aos="fade-up">I am an amateur blacksmith with a focus on knives and jewelry! I have been practicing for over 4 years and have created beautiful pieces! I have always loved working with metal and creating amazing works out of nothing. Growing up I didn’t have much, so I had to learn to use what I had; I have trained myself to use mostly hand tools and what ever medium I can get my hands on! If you are interested in seeing my work, please contact me!</p>
        <img className="icon" src={Jeep} alt="jeep" data-aos="fade-up"></img>
        <p className="hobbyText" data-aos="fade-up">I have always loved the outdoors and being in nature, with this love I have recently broken into the world of overlanding and 4x4 exploration! I have an Orange Jeep Gladiator which I am building up to be the ultimate exploring vehicle! I hope to one day take it out to the west and explore the vast wilderness! I love getting out and finding new places to explore, soon I will be starting a YouTube channel about my exploration in my Gladiator!</p>
      </div>
      <div className="col-lg-5">
        <img className="icon" src={Hiking} alt="hiking" data-aos="fade-up"></img>
        <p className="hobbyText" data-aos="fade-up">Nothing is more fun to me than getting out and exploring the world. While I was in Europe I fell in love with hiking and exploring the wilderness. In Scotland there were so many mind-blowing places to explore. Everyday I try to get out in nature and have a hike or walk; I believe being in nature as much as possible is key to a healthy body and mind.</p>
        <img className="icon" src={Computer} alt="computer" data-aos="fade-up"></img>
        <p className="hobbyText" data-aos="fade-up">As long as I can remember I have been a hardcore computer gamer. My father taught me at a young age to experiment with game files and mods to make any game perfect for me. From there I have always been draw to modifying games to make them better. I have a deep love for games such as Skyrim, Fallout New Vegas, and Gary’s Mod. I have put THOUSANDS of hours into those games and still to this day I find new things to do and explore! I hope to one day work for a game developer and build amazing worlds I can explore!</p>
      </div>
      <div className="col-lg-1"></div>
    </div>
  )
}

export default Hobbies;
