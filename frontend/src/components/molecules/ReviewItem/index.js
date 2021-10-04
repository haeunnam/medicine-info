import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";

const ReviewItem = ({ review, reviewUpdate, reviewDelete }) => {
  const LOGIN_USER_ID = JSON.parse(
    window.localStorage.getItem("loginUser")
  )?.id;
  return (
    <Wrapper>
      <header className="review-header">
        <div>
          <span className="username">{review.nickname}</span>
          <span className="rating">
            <Icon icon="bx:bxs-star" className="rating-star" />
            <span>{review.score}</span>
          </span>
        </div>
        {LOGIN_USER_ID === review.userId && (
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
        )}
      </header>
      <p className="review">{review.content}</p>
    </Wrapper>
  );
};

export default ReviewItem;
