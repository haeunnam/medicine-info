package com.medicine.serviceImpl;

import com.medicine.dao.mysql.MedicineRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dto.review.ReviewCreateInput;
import com.medicine.dto.review.ReviewUpdateInput;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.ReviewDB;
import com.medicine.entity.mysql.UserDB;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
            MedicineDB medicineDB = medicineRepository.findById(reviewCreateInput.getId());
            if (medicineDB == null) {
                log.error("[reviews/post] NOT FOUND MEDICINE error");
                return new Response<>(NOT_FOUND_MEDICINE);
            }
            if(reviewRepository.existsByMedicineIdAndUserId(medicineDB.getId(), loginUserDB.getId())) {
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
            log.error("[comments/post] database error", e);
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
}
