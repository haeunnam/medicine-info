import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .medicine-img {
    width: 80px;
    height: auto;
    margin-right: 15px;
  }
  .content {
    .medicine-name {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.black};
    }
    .medicine-taking {
      font-size: ${theme.fontSizes.sm};
      color : ${theme.colors.green};
    }
    .medicine-kind {
      font-weight: 400;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
    }
    flex:2;

  }
  & + & {
    margin-top: 28px;
  }

  `;
  
  export const SelectionButton = styled.button`
  decoration: none;
  margin:0 0 0 10px;
  .icon-box{
    font-size : ${theme.fontSizes.lg};
  }
`