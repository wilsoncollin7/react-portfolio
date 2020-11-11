import React from "react";
// style
import "./style.css";

function Wrapper(props) {
  return <div className={props.className || "wrapper"} {...props} />;
}

export default Wrapper;
