import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: rgba(253, 203, 110, 0.4);
  width: 145px;
  height: 140px;
  .category-img {
    width: 80%;
    padding: 10%;
  }
  .category-name {
    font-weight: 500;
    font-size: ${theme.fontSizes.md};
    padding-bottom: 20px;
    
  }
  margin: 15px;
`;
