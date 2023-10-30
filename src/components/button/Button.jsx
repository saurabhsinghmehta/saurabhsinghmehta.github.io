import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <button type="button" id="custumButton">
      {text}
    </button>
  );
}

export default Button;
