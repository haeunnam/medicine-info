import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  & {
    .modal-overlay {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(1.5px);
      -webkit-backdrop-filter: blur(1.5px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      .modal-window {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        width: 80%;
        background-color: ${theme.colors.lightGray};
        border-radius: 10px;
        box-shadow: 0 8px 32px 0 rgba(29, 29, 31, 0.37);
        position: relative;
        top: -5%;
        padding: 30px;
        .title {
          font-size: ${theme.fontSizes.xl};
          font-weight: bold;
          margin-bottom: 20px;
          overflow: scroll;
        }
        .footer-btn {
          margin: 20px 0 0 0;
          font-size: ${theme.fontSizes.xs};
        }
        .medicine-box {

        }
      }
    }
  }
`;
