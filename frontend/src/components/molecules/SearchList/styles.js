import styled from "styled-components";
import theme from "../../../styles/theme";
export const LikeContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;
  overflow: scroll;
  background-color: ${theme.colors.brightGray};
`