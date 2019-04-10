import React from "react";
import Button from "@material-ui/core/Button";

const Btn = props => {
  const {
    onClick,
    className = "",
    variant = "text",
    color = "inherit",
    children,
    disabled = false
  } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
};

export default Btn;
