import { Wrapper, StyledTextarea } from "./styles";
import Header from "../../molecules/Header";
import MyReviewItem from '../../molecules/MyReviewItem'

function MyReviewTemplate({
  myReviews,
  reviewDelete,
  reviewUpdate
}) {
  return (
    <>
      <Header title="내가 쓴 리뷰" is Back />
      <Wrapper>
      {myReviews ?.map((review, idx) => (
          <MyReviewItem
            review={review}
            key={idx}
            reviewDelete={reviewDelete}
            reviewUpdate={reviewUpdate}
          />
        ))}
      <div className="btn">
        <button
        className="delete-all-btn"
        onClick={() => reviewDelete(review.reviewId)}
        >
          리뷰전체삭제
        </button>
      </div>
      </Wrapper>
    </>
  )
}

export default MyReviewTemplate;