package com.medicine.controller;
import com.medicine.dto.review.*;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.ReviewService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;

    /**
     * 사용자 리뷰 조회 API
     * [GET] /reviews/users
     * @return PageResponse<UserReviewOutput>
     */
    // Params
    @GetMapping("/users")
    @ApiOperation(value = "사용자 리뷰 조회", notes = "사용자가 작성한 리뷰를 조회한다.")
    public PageResponse<UserReviewOutput> getMedicineReview(@Valid ReviewInput reviewInput) {
        log.info("[GET] /reviews/users");
        return reviewService.getUserReview(reviewInput);
    }

    /**
     * 약 리뷰 조회 API
     * [GET] /reviews/medicines/{id}
     * @return PageResponse<MedicineReviewOutput>
     */
    // Params
    @GetMapping("/medicines/{id}")
    @ApiOperation(value = "약 리뷰 조회", notes = "약에 대한 사용자 리뷰를 조회한다.")
    public PageResponse<MedicineReviewOutput> getMedicineReview(@PathVariable("id") String id, @Valid ReviewInput reviewInput) {
        log.info("[GET] /reviews/medicines/" + id);
        return reviewService.getMedicineReview(id, reviewInput);
    }

    /**
     * 리뷰 생성 API
     * [POST] /reviews
     * @return Response<Object>
     */
    // Body
    @PostMapping
    @ApiOperation(value = "리뷰 생성", notes = "약에 대한 사용자 리뷰를 생성한다.")
    public Response<Object> createReview(@RequestBody @Valid ReviewCreateInput reviewCreateInput) {
        log.info("[POST] /reviews");
        return reviewService.createReview(reviewCreateInput);
    }

    /**
     * 리뷰 수정 API
     * [PATCH] /reviews/{id}
     * @return Response<Object>
     */
    // Path-Variable, Body
    @PatchMapping("/{id}")
    @ApiOperation(value = "리뷰 수정", notes = "약에 대한 사용자 리뷰를 수정한다.")
    public Response<Object> updateReview(@PathVariable("id") int id, @RequestBody @Valid ReviewUpdateInput reviewUpdateInput) {
        log.info("[PATCH] /reviews/" + id);
        return reviewService.updateReview(id, reviewUpdateInput);
    }

    /**
     * 리뷰 삭제 API
     * [DELETE] /reviews/{id}
     * @return Response<Object>
     */
    // Path-Variable
    @DeleteMapping("/{id}")
    @ApiOperation(value = "리뷰 삭제", notes = "약에 대한 사용자 리뷰를 삭제한다.")
    public Response<Object> deleteReview(@PathVariable("id") int id) {
        log.info("[DELETE] /reviews/" + id);
        return reviewService.deleteReview(id);
    }

    /**
     * 전체 리뷰 삭제 API
     * [DELETE] /reviews/all
     * @return Response<Object>
     */
    @DeleteMapping("/all")
    @ApiOperation(value = "사용자 리뷰 전체 삭제", notes = "사용자가 작성한 리뷰를 모두 삭제한다.")
    public Response<Object> deleteAllReview() {
        log.info("[DELETE] /reviews/all");
        return reviewService.deleteAllReview();
    }
}
