import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-outline"];

export const Button = ({ children, to, type, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to={to} className="btn__link">
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
