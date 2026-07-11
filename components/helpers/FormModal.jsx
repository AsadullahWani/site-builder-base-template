import React from "react";
import ReusableModal from "../common/ReusableModal";
import FormButton from "./FormButton";
import "./form-controls.css";

const FormModal = ({
  open,
  title,
  width = "760px",
  submitting = false,
  submitText = "Save",
  submittingText = "Saving...",
  cancelText = "Cancel",
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <ReusableModal
      open={open}
      title={title}
      onClose={onClose}
      width={width}
      closeOnBackdrop={false}
    >
      <form
        className="fm-form"
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      >
        <div className="fm-content">{children}</div>

        <div className="fm-actions">
          <FormButton type="submit" variant="primary" disabled={submitting}>
            {submitting ? submittingText : submitText}
          </FormButton>

          <FormButton
            type="button"
            variant="secondary"
            onClick={onClose}
            disabled={submitting}
          >
            {cancelText}
          </FormButton>
        </div>
      </form>
    </ReusableModal>
  );
};

export default FormModal;