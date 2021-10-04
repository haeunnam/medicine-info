package com.medicine.serviceImpl;

import com.medicine.dao.mysql.MedicineRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dto.review.*;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.ReviewDB;
import com.medicine.entity.mysql.UserDB;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.medicine.response.ResponseStatus.*;

@Service("ReviewService")
@RequiredArgsConstructor
@Slf4j
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final MedicineRepository medicineRepository;
    private final JwtService jwtService;

    @Override
    @Transactional
    public Response<Object> createReview(ReviewCreateInput reviewCreateInput) {
        // 1. 값 형식 체크
        if (reviewCreateInput == null) return new Response<>(NO_VALUES);
        // 2. 리뷰 정보 생성
        ReviewDB reviewDB;
        try {
            UserDB loginUserDB = jwtService.getUserDB();
            if (loginUserDB == null) {
                log.error("[reviews/post] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            MedicineDB medicineDB = medicineRepository.findById(reviewCreateInput.getMedicineId()).orElse(null);
            if (medicineDB == null) {
                log.error("[reviews/post] NOT FOUND MEDICINE error");
                return new Response<>(NOT_FOUND_MEDICINE);
            }
            if (reviewRepository.existsByMedicineIdAndUserId(medicineDB.getId(), loginUserDB.getId())) {
                log.error("[reviews/post] DUPLICATE REVIEW error");
                return new Response<>(EXISTS_INFO);
            }

            // 리뷰 저장
            reviewDB = ReviewDB.builder()
                    .user(loginUserDB)
                    .medicine(medicineDB)
                    .score(reviewCreateInput.getScore())
                    .content(reviewCreateInput.getContent())
                    .build();
            reviewRepository.save(reviewDB);

        } catch (Exception e) {
            log.error("[reviews/post] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(null, CREATED_REVIEW);
    }

    @Override
    @Transactional
    public Response<Object> updateReview(int id, ReviewUpdateInput reviewUpdateInput) {
        // 1. 값 형식 체크
        if (reviewUpdateInput == null) return new Response<>(NO_VALUES);
        // 2. 리뷰 정보 수정
        ReviewDB reviewDB;
        try {
            UserDB loginUserDB = jwtService.getUserDB();
            if (loginUserDB == null) {
                log.error("[reviews/patch] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            reviewDB = reviewRepository.findById(id).orElse(null);
            if (reviewDB == null || reviewDB.getUser().getId() != loginUserDB.getId()) {
                log.error("[reviews/patch] NOT FOUND REVIEW error");
                return new Response<>(NOT_FOUND_REVIEW);
            }
            reviewDB.setScore(reviewUpdateInput.getScore());
            reviewDB.setContent(reviewUpdateInput.getContent());

            reviewRepository.save(reviewDB);
        } catch (Exception e) {
            log.error("[reviews/patch] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(null, SUCCESS_UPDATE_REVIEW);
    }

    @Override
    @Transactional
    public Response<Object> deleteReview(int id) {
        // 1. 값 형식 체크
        if (id <= 0) return new Response<>(BAD_REQUEST);
        // 2. 리뷰 정보 삭제
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[reviews/delete] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            ReviewDB reviewDB = reviewRepository.findById(id).orElse(null);
            if (reviewDB == null || reviewDB.getUser().getId() != loginUserId) {
                log.error("[reviews/delete] NOT FOUND COMMENT error");
                return new Response<>(NOT_FOUND_REVIEW);
            }

            reviewRepository.deleteById(id);
        } catch (Exception e) {
            log.error("[reviews/delete] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(null, SUCCESS_DELETE_REVIEW);
    }

    @Override
    @Transactional
    public Response<Object> deleteAllReview() {
        // 1. 리뷰 정보 전체 삭제
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[reviews/all/delete] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }

            reviewRepository.deleteByUserId(loginUserId);
        } catch (Exception e) {
            log.error("[reviews/all/delete] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 2. 결과 return
        return new Response<>(null, SUCCESS_DELETE_REVIEW);
    }

    @Override
    public PageResponse<MedicineReviewOutput> getMedicineReview(String id, ReviewInput reviewInput) {
        // 1. 값 형식 체크
        if (reviewInput == null) return new PageResponse<>(NO_VALUES);
        // 2. 리뷰 정보 가져오기
        Page<MedicineReviewOutput> medicineReviewOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[reviews/medicines/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(reviewInput.getPage(), reviewInput.getSize(), Sort.Direction.DESC, "id");
            Page<ReviewDB> reviewDBList = reviewRepository.findByMedicineId(id, paging);

            // 3. 약 리뷰 리스트에 필요한 최종 결과 가공
            medicineReviewOutput = reviewDBList.map(reviewDB ->
                    MedicineReviewOutput.builder()
                            .reviewId(reviewDB.getId())
                            .userId(reviewDB.getUser().getId())
                            .nickname(reviewDB.getUser().getNickname())
                            .score(reviewDB.getScore())
                            .content(reviewDB.getContent())
                            .createdAt(reviewDB.getCreated_at())
                            .updatedAt(reviewDB.getUpdated_at()).build());
        } catch (Exception e) {
            log.error("[reviews/medicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(medicineReviewOutput, SUCCESS_GET_MEDICINE_REVIEW_LIST);
    }

    @Override
    public PageResponse<UserReviewOutput> getUserReview(ReviewInput reviewInput) {
        // 1. 값 형식 체크
        if (reviewInput == null) return new PageResponse<>(NO_VALUES);
        // 2. 리뷰 정보 가져오기
        Page<UserReviewOutput> userReviewOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[reviews/users/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(reviewInput.getPage(), reviewInput.getSize(), Sort.Direction.DESC, "id");
            Page<ReviewDB> reviewDBList = reviewRepository.findByUserId(loginUserId, paging);

            // 3. 사용자 리뷰 리스트에 필요한 최종 결과 가공
            userReviewOutput = reviewDBList.map(reviewDB ->
                    UserReviewOutput.builder()
                            .reviewId(reviewDB.getId())
                            .medicineId(reviewDB.getMedicine().getId())
                            .name(reviewDB.getMedicine().getName())
                            .company(reviewDB.getMedicine().getCompany())
                            .category(reviewDB.getMedicine().getCategory())
                            .score(reviewDB.getScore())
                            .content(reviewDB.getContent())
                            .createdAt(reviewDB.getCreated_at())
                            .updatedAt(reviewDB.getUpdated_at()).build());
        } catch (Exception e) {
            log.error("[reviews/users/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(userReviewOutput, SUCCESS_GET_USER_REVIEW_LIST);
    }
}
