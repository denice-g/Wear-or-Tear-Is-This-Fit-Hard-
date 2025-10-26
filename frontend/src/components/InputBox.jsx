import React from "react";

function InputBox({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-box"
    />
  );
}

export default InputBox;
