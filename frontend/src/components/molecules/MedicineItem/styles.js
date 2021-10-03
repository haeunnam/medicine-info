import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  .medicine-img {
    width: 100px;
    object-fit: cover;
    margin-right: 15px;
  }
  .content {
    .medicine-company {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
      font-weight: 400;
    }
    .medicine-name {
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.black};
    }
    .medicine-rating {
      .rating-star {
        color: ${theme.colors.yellow};
        margin-right: 4px;
      }
      font-size: ${theme.fontSizes.xs};
    }
    .medicine-kind {
      font-weight: 400;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
    }
  }
  & + & {
    margin-top: 15px;
  }
`;
