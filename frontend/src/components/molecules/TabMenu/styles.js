import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  .tabs {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.lightGray};
    margin: 10px 0;
    button {
      font-size: ${theme.fontSizes.lg};
      display: flex;
      justify-content: center;
      padding-bottom: 4px;
      width: 120px;
      cursor: pointer;
      padding-bottom: 5px;
    }
  }

  .active {
    font-weight: 500;
    border-bottom: 2px solid ${theme.colors.green};
  }
`;
