package com.medicine.controller;
import com.medicine.dto.review.ReviewCreateInput;
import com.medicine.dto.review.ReviewUpdateInput;
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
     * [PATCH] /reviews
     * @return Response<Object>
     */
    // Body
    @PatchMapping("/{id}")
    @ApiOperation(value = "리뷰 수정", notes = "약에 대한 사용자 리뷰를 수정한다.")
    public Response<Object> updateReview(@PathVariable("id") int id, @RequestBody @Valid ReviewUpdateInput reviewUpdateInput) {
        log.info("[PATCH] /reviews/" + id);
        return reviewService.updateReview(id, reviewUpdateInput);
    }
}
