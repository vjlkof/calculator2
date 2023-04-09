import React from "react";
import "./commonButton.css";

function CommonButton({ onHandlerClick, children }) {
  return (
    <button onClick={(event) => onHandlerClick(event.target.textContent)}>
      {children}
    </button>
  );
}

export default CommonButton;
