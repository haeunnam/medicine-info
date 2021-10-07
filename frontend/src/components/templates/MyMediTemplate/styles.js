import styled from "styled-components";

export const MyPillContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  padding: 0 45px;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;

`
export const LikeContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;
`