import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`

  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content:center;
  margin:10px 0;
  
  .icon-box{
    outline: none;
    background-color: ${theme.colors.brightGray};
    border-radius: 0 6px 6px 0 ;
    border-width: none;
    height: 40px;
    text-align:center;
    padding:0 3px 0 0;
  }


`;
/* top-left | top-right | bottom-right | bottom-left */
export const StyledInput = styled.input`
  outline: none;
  background-color: ${theme.colors.brightGray};
  border-radius: 6px 0 0 6px;
  font-size: ${theme.fontSizes.lg};
  height: 40px;
  border-width:0;
  width: 100%;
  padding:0 10px;
`;

