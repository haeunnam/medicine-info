import styled from "styled-components";
import theme from "../../../styles/theme";
export const LikeContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;
  background-color: ${theme.colors.brightGray};
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
`