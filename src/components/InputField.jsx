import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

InputField.defaultProps = {
  text: "",
  label: "",
  placeholder: "",
  disabled: false,
  type: "text",
  isLoading: false,
};

function InputField(props) {
  const { field, label, placeholder, disabled, type, form } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      {showError && (
        <p
          style={{
            color: "red",
          }}
        >
          {errors[name]}
        </p>
      )}
    </FormGroup>
  );
}

export default InputField;
