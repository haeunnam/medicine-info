import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { request } from "../../../api";
import ReviewTemplate from "../../../components/templates/ReviewTemplate";
import { showToast } from "../../../modules/feedback";

function ReviewCreate({ location }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const medicine = location.state.medicineInfo;
  const review = location.state?.review;
  const operation = location.state.operation;
  const [starRatingState, setStarRatingState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (operation === "update") {
      handleStarRating(review.score);
    }
  }, []);
  const [newReview, setNewReview] = useState(
    operation === "update" ? review : ""
  );
  function handleStarRating(num) {
    let clickStates = [...starRatingState];
    let score = 0;
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        clickStates[i] = true;
        score++;
      } else clickStates[i] = false;
    }
    setStarRatingState(clickStates);
    setNewReview({ ...newReview, score });
  }

  function validCheck() {
    if (!newReview.score) {
      dispatch(showToast("별점을 선택하세요."));
      return false;
    }
    if (!newReview.content) {
      dispatch(showToast("리뷰를 입력하세요."));
      return false;
    }
    return true;
  }

  async function handleReview() {
    const valid = validCheck();
    if (!valid) return;
    const reviewData = { medicineId: medicine.id, ...newReview };
    if (operation === "create") {
      const response = await request("post", "/reviews", reviewData);
      if (response.isSuccess) {
        dispatch(showToast("리뷰가 작성되었습니다."));
        history.go(-1);
      } else if (response.code === 420) {
        dispatch(showToast("이미 리뷰를 작성하셨습니다."));
      }
    } else if (operation === "update") {
      const response = await request(
        "patch",
        `/reviews/${review.reviewId}`,
        reviewData
      );
      if (response.isSuccess) {
        dispatch(showToast("리뷰가 수정되었습니다."));
        history.go(-1);
      }
    }
  }

  return (
    <ReviewTemplate
      starRatingState={starRatingState}
      handleStarRating={handleStarRating}
      medicine={medicine}
      handleReview={handleReview}
      setNewReview={setNewReview}
      newReview={newReview}
    />
  );
}

export default ReviewCreate;
