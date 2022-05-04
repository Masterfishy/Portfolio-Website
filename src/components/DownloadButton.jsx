import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn-outline"];

export const DownloadButton = ({ children, to, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <a href={to} className="btn__link">
      <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
        {children}
      </button>
    </a>
  );
};
