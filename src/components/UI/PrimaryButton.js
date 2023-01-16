import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton(props) {
  const { type, onClick, children, className = "" } = props;
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
