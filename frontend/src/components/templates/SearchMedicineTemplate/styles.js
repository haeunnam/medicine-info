import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 40px;
  .input-box {
    margin-bottom: 30px;
  }
  .category {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 10px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 75vh;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.green};
  }
`;

export const MedicineContainer = styled.div`
  padding-bottom: 40px;
  height: 75vh;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.green};
  }
`;
