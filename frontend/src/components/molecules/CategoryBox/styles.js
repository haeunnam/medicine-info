import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: rgba(253, 203, 110, 0.4);
  width: 135px;
  height: 135px;
  .category-img {
    width: 80%;
    padding: 10%;
  }
  .category-name {
    font-weight: 400;
    font-size: ${theme.fontSizes.md};
  }
  margin: 10px;
`;
