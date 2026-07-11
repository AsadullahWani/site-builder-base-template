import React from "react";
import "./form-controls.css";

const FormInput = ({
  className = "",
  allowAutoFill = false,
  autoComplete = "off",
  autoCorrect = "off",
  autoCapitalize = "off",
  spellCheck = false,
  ...props
}) => {
  return (
    <input
      {...props}
      className={`fs-control ${className}`}
      autoComplete={allowAutoFill ? autoComplete : "off"}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
    />
  );
};

export default FormInput;