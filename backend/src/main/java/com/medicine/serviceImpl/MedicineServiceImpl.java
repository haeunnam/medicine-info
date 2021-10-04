package com.medicine.serviceImpl;

import com.medicine.dao.mysql.DetailMedicineRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dao.mysql.SimilarMedicineRepository;
import com.medicine.dto.medicine.DetailOutput;
import com.medicine.dto.medicine.SimilarInput;
import com.medicine.dto.medicine.SimilarOutput;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.ReviewDB;
import com.medicine.entity.mysql.SimilarMedicineDB;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.MedicineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import static com.medicine.response.ResponseStatus.*;

@Service("MedicineService")
@RequiredArgsConstructor
@Slf4j
public class MedicineServiceImpl implements MedicineService {

    private final SimilarMedicineRepository similarMedicineRepository;
    private final ReviewRepository reviewRepository;
    private final DetailMedicineRepository detailMedicineRepository;
    private final JwtService jwtService;

    @Override
    public PageResponse<SimilarOutput> getSimilarMedicineInfo(String id, SimilarInput similarInput) {
        // 1. 값 형식 체크
        if(id == null || id.equals(" "))  return new PageResponse<>(NO_VALUES);

        // 2. 유사 약 정보 가져오기
        Page<SimilarOutput> similarOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[medicines/similar/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(similarInput.getPage(), similarInput.getSize(), Sort.Direction.DESC, "count");
            Page<SimilarMedicineDB> similarMedicineDBList = similarMedicineRepository.findByMedicineId(id, paging);

            // 3. 유사약 리스트에 필요한 최종 결과 가공
            similarOutput = similarMedicineDBList.map(similarMedicineDB -> {
                MedicineDB detailInfoDB = similarMedicineDB.getSimilarMedicine();

                double reviewAvgScore = reviewRepository.findByMedicineId(detailInfoDB.getId()).stream()
                        .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
                reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

                return SimilarOutput.builder()
                        .id(detailInfoDB.getId())
                        .name(detailInfoDB.getName())
                        .image(detailInfoDB.getImage())
                        .company(detailInfoDB.getCompany())
                        .category(detailInfoDB.getCategory())
                        .score(reviewAvgScore)
                        .build();
            });
        } catch (Exception e) {
            log.error("[medicines/similar/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(similarOutput, SUCCESS_GET_SIMILAR_MEDICINE_LIST);
    }

    @Override
    public Response<DetailOutput> getDetailMedicineInfo(String id) {
        // 1. 값 형식 체크
        if(id==null || id.equals(" ")) return new Response<>(NO_VALUES);

        // 2. 약 상세정보 가져오기
        DetailOutput detailOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[medicines/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }

            double reviewAvgScore = reviewRepository.findByMedicineId(id).stream()
                    .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
            reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

            MedicineDB medicineDB=detailMedicineRepository.findById(id);
            detailOutput = DetailOutput.builder()
                            .id(medicineDB.getId())
                            .name(medicineDB.getName())
                            .image(medicineDB.getImage())
                            .company(medicineDB.getCompany())
                            .category(medicineDB.getCategory())
                            .efficacy(medicineDB.getEfficacy())
                            .usage(medicineDB.getUsage())
                            .reaction(medicineDB.getReaction())
                            .storage((medicineDB.getStorage()))
                            .avgScore(reviewAvgScore)
                            .build();

        } catch (Exception e){
            log.error("[medicines/get] database error",e);
            return new Response<>(DATABASE_ERROR);
        }

        return new Response<>(detailOutput,SUCCESS_GET_DETAIL_MEDICINE);

    }
}
