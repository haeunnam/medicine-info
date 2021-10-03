package com.medicine.service;

import com.medicine.dto.review.ReviewInput;
import com.medicine.response.Response;

public interface ReviewService {
    Response<Object> createReview(ReviewInput reviewInput);
}
