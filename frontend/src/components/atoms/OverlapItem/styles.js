import styled from "styled-components";
import theme from "../../../styles/theme";

export const DurContainer = styled.div`
  display:column;
  width: 100%
  padding: 5px 0;
  .content-box{
    margin:0 20px;
    font-size: ${theme.fontSizes.md};
  }
`
export const DurName = styled.div`
  font-size : ${theme.fontSizes.sm};
  margin:3px 0 0 30px;
`