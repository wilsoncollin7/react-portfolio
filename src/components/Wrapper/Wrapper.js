import React from "react";
// style
import "./style.css";

function Wrapper(props) {
  return <main className={props.className} {...props} />;
}

export default Wrapper;
