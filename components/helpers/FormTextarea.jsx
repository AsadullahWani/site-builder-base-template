import React from "react";
import "./form-controls.css";

const FormTextarea = ({
  className = "",
  allowAutoFill = false,
  autoComplete = "off",
  autoCorrect = "off",
  autoCapitalize = "off",
  spellCheck = false,
  ...props
}) => {
  return (
    <textarea
      {...props}
      className={`fs-control fs-textarea ${className}`}
      autoComplete={allowAutoFill ? autoComplete : "off"}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
    />
  );
};

export default FormTextarea;