package com.medicine.controller;
import com.medicine.dto.review.ReviewInput;
import com.medicine.response.Response;
import com.medicine.service.ReviewService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @ApiOperation(value = "리뷰 생성", notes = "약의 리뷰를 생성한다.")
    public Response<Object> createReview(@RequestBody @Valid ReviewInput reviewInput) {
        log.info("[POST] /reviews");
        return reviewService.createReview(reviewInput);
    }
}
