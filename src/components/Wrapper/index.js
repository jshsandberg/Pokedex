import React from "react";
import "./style.css";
import Background from "../../utils/backgroundImage.jpeg"

const sectionStyle = {
  backgroundImage: `url(${Background})`
}

function Wrapper(props) {
  return <div style={ sectionStyle }className="wrapper">{props.children}</div>;
}

export default Wrapper;
