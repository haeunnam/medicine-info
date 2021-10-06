import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { request } from "../../../api";
import MyReviewTemplate from "../../../components/templates/ReviewTemplate";

function MyReview() {
  const history = useHistory();


  return (
    <MyReviewTemplate
    />
  );
}

export default MyReview;
