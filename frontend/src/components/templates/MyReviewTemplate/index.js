import { Wrapper,Button } from "./styles";
import Header from "../../molecules/Header";
import MyReviewItem from '../../molecules/MyReviewItem'

function MyReviewTemplate({
  myReviews,
  reviewDelete,
  reviewUpdate,
  handleInfiniteScroll,
  deleteAllReviews,

}) {
  return (
    <>
      <Header title="내가 쓴 리뷰" isBack={true} />
      <Wrapper handleInfiniteScroll={handleInfiniteScroll}>
        {myReviews ? 
          (myReviews.map((review, idx) => (
            <MyReviewItem
              review={review}
              key={idx}
              reviewDelete={reviewDelete}
              reviewUpdate={reviewUpdate}
            />
          ))) :
          ("")}
        <Button>
          <button
          className="delete-all-btn"
          onClick={deleteAllReviews}
          >
            리뷰 전체삭제
          </button>
        </Button>

      </Wrapper>
    </>
  )
}

export default MyReviewTemplate;