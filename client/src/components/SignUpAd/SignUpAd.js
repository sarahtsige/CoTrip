import React from "react";
import "./SignUpAd.css";
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
// Function based React Component
const SignUpAd = props => {
  // Default Class to apply to Component

  return (
    <div className="SignUpAd">
      <h3>{props.heading}</h3>
      <h5>{props.subheading}</h5>
      <div className="inputs">
        <InputTextField type="text" variation="small" name="first name" placeholder="First Name" />
        <InputTextField type="text" variation="small" name="last name" placeholder="Last Name" />
        <InputTextField type="text" variation="small" name="email" placeholder="Email" />
      </div>
      <Button text="Join the Tribe" color="pink" handleClick={props.handleClick} />
    </div>
  );
};
SignUpAd.defaultProps = {
  heading: "This is the header",
  subheading: "this is the sub heading"
}

export default SignUpAd;
