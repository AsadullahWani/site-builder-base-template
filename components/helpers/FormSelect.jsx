import React from "react";
import "./form-controls.css";

const FormSelect = ({ className = "", children, ...props }) => {
  return (
    <div className={`fs-select-wrap ${props.disabled ? "is-disabled" : ""}`}>
      <select className={`fs-control fs-select ${className}`} {...props}>
        {children}
      </select>

      <span className="fs-select-icon" aria-hidden="true" />
    </div>
  );
};

export default FormSelect;