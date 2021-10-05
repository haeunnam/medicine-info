import styled from "styled-components";
import theme from "../../../styles/theme";

export const DurContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 45px;
  overflow:scroll;

  .search-box{
    margin:10px 0;
  }

  .bucket{
    display:flex;
    margin:0 0 10px 0;
    .bucket-button{
      margin:0 0 5px auto;
      font-size: ${theme.fontSizes.md};
    }
  }

  .check-button{
    margin:20px auto;
  }

  .result-box{
    margin:0 0 30px 0;
    padding: 0 0 30px 0;
  }

`;

