import React from 'react';
// style
import "./style.css"

function Header(props) {
  return (
  <h1 className={props.class} >{props.title}</h1>
  )
}

export default Header;
 