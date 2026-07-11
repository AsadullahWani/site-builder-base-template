import React from "react";
import "./form-controls.css";

const FormButton = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const variantClass =
    variant === "secondary"
      ? "fs-btn-secondary"
      : variant === "danger"
      ? "fs-btn-danger"
      : "fs-btn-primary";

  return (
    <button
      type={type}
      className={`fs-btn ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FormButton;