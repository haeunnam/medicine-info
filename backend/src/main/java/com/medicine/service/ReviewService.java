package com.medicine.service;

import com.medicine.dto.review.ReviewCreateInput;
import com.medicine.dto.review.ReviewUpdateInput;
import com.medicine.response.Response;

public interface ReviewService {
    Response<Object> createReview(ReviewCreateInput reviewCreateInput);
    Response<Object> updateReview(int id, ReviewUpdateInput reviewUpdateInput);
}
