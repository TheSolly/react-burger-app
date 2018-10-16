import React from "react";

import classes from "./Logo.css";
import burgerLogo from "../../assets/Images/127 burger-logo.png";

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="burgerLogo" />
  </div>
);

export default Logo;
