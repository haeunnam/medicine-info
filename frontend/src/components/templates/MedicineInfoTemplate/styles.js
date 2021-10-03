import styled from "styled-components";
import theme from "../../../styles/theme";

export const ReviewsContainer = styled.div`
  font-size: ${theme.fontSizes.lg};
  padding: 12px 18px 24px;
  .total-rating {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 12px;
  }
  .header {
    margin-bottom: 30px;
    padding: 0 4px;
    display: flex;
    justify-content: space-between;
    .icon-star {
      color: ${theme.colors.yellow};
      font-size: ${theme.fontSizes.xl};
      margin-right: 6px;
    }
    .rating-score {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .rating-num {
      font-weight: 500;
    }
    .icon-write {
      color: ${theme.colors.green};
      font-size: ${theme.fontSizes.xxl};
    }
  }
`;
