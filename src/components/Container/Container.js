import React from "react";
// style
import "./style.css"

function Container(props) {
  return <div className={props.className} {...props} />;
}

export default Container;
