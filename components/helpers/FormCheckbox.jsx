import React from "react";
import "./form-controls.css";

const FormCheckbox = ({ label, className = "", ...props }) => {
  return (
    <label className={`fs-check ${className}`}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
};

export default FormCheckbox;