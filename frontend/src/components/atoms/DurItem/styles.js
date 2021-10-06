import styled from "styled-components";
import theme from "../../../styles/theme";

export const DurContainer = styled.div`
  display:flex;
  width: 100%
  padding: 10px 0;
  margin: 5px 0;
  .content-box{
    margin:0 20px;
    font-size: ${theme.fontSizes.md};
    .name-box{
      font-weight: bold;
    }
  }


`