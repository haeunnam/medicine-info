import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    .modal-overlay {
      width: 500px;
      height: 100vh;
      position: fixed;
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
        z-index: 1;
        width: 70%;
        background-color: ${theme.colors.lightGray};
        border-radius: 10px;
        box-shadow: 0 8px 32px 0 rgba(29, 29, 31, 0.37);
        position: relative;
        top: -5%;
        padding: 30px;
        .title {
          font-size: ${theme.fontSizes.xl};
          font-weight: 500;
          margin-bottom: 20px;
        }
        .calendar {
          margin-bottom: 15px;
        }
        .footer-btn {
          font-size: ${theme.fontSizes.md};
        }
      }
    }
`;
