import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyledLabel = styled.label`
  display: block;
  color: ${theme.colors.black};
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  margin:5px 0;

  .icon{
    font-size: ${theme.fontSizes.xl};
    padding:5px 0 0 0;
  }
`;