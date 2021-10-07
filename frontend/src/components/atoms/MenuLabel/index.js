import React from "react";
import { StyledLabel } from "./styles";

function Label({ children = "", ...rest }) {
  return (
    <StyledLabel {...rest}>
      {children}
    </StyledLabel>
  );
}

export default Label;
