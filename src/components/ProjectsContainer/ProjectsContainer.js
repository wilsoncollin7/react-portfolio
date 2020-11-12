import React from 'react';
// style
import "./style.css"


function ProjectsContainer(props) {
  return (
    <ul className="list-group">
      {props.projects.map(item => (
        <div class="projectImgContainer projectTile">
          <img className="projectImag" src={`/dev-photos/${item.image}`} alt={item.name}></img>
          <div class="projectImgOverlay">
            <h5>{item.name}</h5>
            <a href={item.live} class="btn portBtn" target="#">Let's see it!</a>
            <a href={item.github} class="btn portGitBtn" target="#">GitHub</a>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default ProjectsContainer;
 