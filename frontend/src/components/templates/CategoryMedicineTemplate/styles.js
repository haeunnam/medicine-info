import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 30px 40px;
  padding-bottom: 50px;
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
