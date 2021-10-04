package com.medicine.service;

import com.medicine.dto.review.*;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;

public interface ReviewService {
    Response<Object> createReview(ReviewCreateInput reviewCreateInput);
    Response<Object> updateReview(int id, ReviewUpdateInput reviewUpdateInput);
    Response<Object> deleteReview(int id);
    Response<Object> deleteAllReview();
    PageResponse<MedicineReviewOutput> getMedicineReview(String id, ReviewInput reviewInput);
    PageResponse<UserReviewOutput> getUserReview(ReviewInput reviewInput);
}
