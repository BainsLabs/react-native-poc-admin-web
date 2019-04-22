import React from "react";
import Button from "@material-ui/core/Button";

const Btn = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default Btn;
