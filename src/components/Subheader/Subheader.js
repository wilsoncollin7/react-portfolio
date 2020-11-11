import React from 'react';
// style
import "./style.css"

function Subheader(props) {
  return (
  <p className={props.className} >{props.title}</p>
  )
}

export default Subheader;
 