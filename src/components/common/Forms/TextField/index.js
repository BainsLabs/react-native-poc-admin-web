import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = props => {
  const {
    required = false,
    id = "",
    name = "",
    label = "",
    fullWidth = false,
    autoComplete = "",
    helperText = "",
    placeholder = "",
    type = "text",
    rowsMax = "",
    select = false,
    disabled = false,
    SelectProps = {},
    onChange = () => console.log("change"),
    multiline = false,
    margin = "none",
    variant = "standard",
    InputLabelProps = {}
  } = props;
  return (
    <TextField
      required={required}
      id={id}
      select={select}
      SelectProps={SelectProps}
      multiline={multiline}
      helperText={helperText}
      name={name}
      margin={margin}
      variant={variant}
      label={label}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      autoComplete={autoComplete}
      onChange={onChange}
      rowsMax={rowsMax}
      InputLabelProps={InputLabelProps}
    >
      {props.children}
    </TextField>
  );
};

export default Input;
