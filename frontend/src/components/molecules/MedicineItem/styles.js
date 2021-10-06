import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .medicine-img {
    width: 140px;
    height: auto;
    margin-right: 35px;
  }
  .content {
    .medicine-company {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
      font-weight: 400;
    }
    .medicine-name {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.black};
    }
    .medicine-rating {
      display: inline-flex;
      align-items: center;
      .rating-star {
        color: ${theme.colors.yellow};
        margin-right: 4px;
      }
      font-size: ${theme.fontSizes.md};
    }
    .medicine-kind {
      font-weight: 400;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray};
    }
  }
  & + & {
    margin-top: 32px;
  }
`;
