import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  .medicine-img {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 32px;
  .medicine-title {
    .medicine-name {
      font-size: ${theme.fontSizes.xl};
    }
    .medicine-kind {
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.gray};
      span::after {
        content: "|";
        margin: 6px;
      }
      span:last-child::after {
        content: "";
      }
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 4px;
    color: ${theme.colors.green};
    .icon {
      margin: 0 2px;
    }
  }
`;
