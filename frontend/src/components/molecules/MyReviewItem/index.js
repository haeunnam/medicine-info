import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";
import MedicineItem from "../MedicineItem";

const MyReviewItem = ({ review, reviewUpdate, reviewDelete }) => {
  const 
  return (
    <Wrapper>
      <header className="review-header">
          <MedicineItem />
          <div className="btn">
            <button className="update-btn" onClick={() => reviewUpdate(review)}>
              수정
            </button>
            <button
              className="delete-btn"
              onClick={() => reviewDelete(review.reviewId)}
            >
              삭제
            </button>
          </div>
      </header>
      <p className="review">{review.content}</p>
    </Wrapper>
  );
};

export default MyReviewItem;
