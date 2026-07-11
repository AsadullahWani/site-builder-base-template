import React from "react";
import "./form-controls.css";

const FormField = ({ label, error, hint, children, className = "" }) => {
  return (
    <div className={`fs-field ${className}`}>
      {label ? <label className="fs-label">{label}</label> : null}
      {children}
      {error ? <div className="fs-error">{error}</div> : null}
      {!error && hint ? <small className="fs-hint">{hint}</small> : null}
    </div>
  );
};

export default FormField;