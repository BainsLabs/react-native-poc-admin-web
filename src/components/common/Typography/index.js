import React from "react";
import Typography from "@material-ui/core/Typography";

const Type = props => {
  const {
    gutterBottom = false,
    padding = "",
    variant = "",
    color = "inherit",
    component = "",
    align = "inherit",
    children,
    className = ""
  } = props;

  return (
    <Typography
      gutterBottom={gutterBottom}
      padding={padding}
      variant={variant}
      component={component}
      align={align}
      color={color}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default Type;
