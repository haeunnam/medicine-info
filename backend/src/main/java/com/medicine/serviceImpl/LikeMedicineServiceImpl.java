package com.medicine.serviceImpl;

import com.medicine.dao.mysql.LikeMedicineRepository;
import com.medicine.dao.mysql.MedicineRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dto.likemedicine.create.CreateLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineOutput;
import com.medicine.entity.mysql.*;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.response.ResponseStatus;
import com.medicine.service.JwtService;
import com.medicine.service.LikeMedicineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.medicine.response.ResponseStatus.*;

@Service("LikeMedicineService")
@RequiredArgsConstructor
@Slf4j
public class LikeMedicineServiceImpl implements LikeMedicineService {

    private final LikeMedicineRepository likeMedicineRepository;
    private final ReviewRepository reviewRepository;
    private final MedicineRepository medicineRepository;
    private final JwtService jwtService;

    @Override
    public Response<Object> createLikeMedicine(CreateLikeMedicineInput createLikeMedicineInput) {
        // 1. 값 형식 체크
        if (createLikeMedicineInput == null) return new Response<>(NO_VALUES);
        // 2. 약바구니에 약 추가
        LikeMedicineDB likeMedicineDB;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[like-medicines/post] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            List<LikeMedicineDB> likeMedicineDBList = likeMedicineRepository.findByMedicineId(createLikeMedicineInput.getMedicineId());
            if (likeMedicineDBList.size() > 0) {
                return new Response<>(ResponseStatus.BAD_REQUEST);
            }
            likeMedicineDB = LikeMedicineDB.builder()
                    .userId(loginUserId)
                    .medicineId(medicineRepository.findById(createLikeMedicineInput.getMedicineId()))
                    .build();
            likeMedicineRepository.save(likeMedicineDB);
        } catch (Exception e) {
            log.error("[like-medicines/post] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(null, CREATED_LIKE_MEDICINE);
    }

    @Override
    public Response<Object> deleteLikeMedicine(int id) {
        // 1. 값 형식 체크
        if (id <= 0) return new Response<>(BAD_REQUEST);
        // 2. 약바구니에서 선택한 약 삭제
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[like-medicines/delete] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            likeMedicineRepository.deleteById(id);
        } catch (Exception e) {
            log.error("[like-medicines/delete] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(null, SUCCESS_DELETE_LIKE_MEDICINE);
    }

    @Override
    public PageResponse<GetLikeMedicineOutput> getLikeMedicine(GetLikeMedicineInput getLikeMedicineInput) {
        // 1. 값 형식 체크
        if (getLikeMedicineInput == null) return new PageResponse<>(NO_VALUES);
        // 2. 약바구니 정보 가져오기
        Page<GetLikeMedicineOutput> likeMedicineOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[like-medicines/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(getLikeMedicineInput.getPage(), getLikeMedicineInput.getSize(), Sort.Direction.DESC, "id");
            Page<LikeMedicineDB> likeMedicineDBList = likeMedicineRepository.findByUserId(loginUserId, paging);

            // 3. 약바구니 리스트에 필요한 최종 결과 가공
            likeMedicineOutput = likeMedicineDBList.map(likeMedicineDB -> {
                MedicineDB detailInfoDB = likeMedicineDB.getMedicine();
                double reviewAvgScore = reviewRepository.findByMedicineId(detailInfoDB.getId()).stream()
                        .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
                reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

                return GetLikeMedicineOutput.builder()
                        .id(likeMedicineDB.getId())
                        .medicineId(detailInfoDB.getId())
                        .name(detailInfoDB.getName())
                        .company(detailInfoDB.getCompany())
                        .category(detailInfoDB.getCategory())
                        .score(reviewAvgScore)
                        .build();
            });
        } catch (Exception e) {
            log.error("[like-medicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(likeMedicineOutput, SUCCESS_GET_LIKE_MEDICINE_LIST);

    }
}
