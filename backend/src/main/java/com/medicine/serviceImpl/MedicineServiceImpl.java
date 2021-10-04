package com.medicine.serviceImpl;

import com.medicine.dao.mongo.DurOverlapRepository;
import com.medicine.dao.mongo.DurTogetherRepository;
import com.medicine.dao.mysql.MedicineRepository;
import com.medicine.dao.mysql.DurRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dao.mysql.SimilarMedicineRepository;
import com.medicine.dto.dur.DUR;
import com.medicine.dto.dur.DurOverlap;
import com.medicine.dto.dur.DurTogether;
import com.medicine.dto.dur.Medicine;
import com.medicine.dto.medicine.*;
import com.medicine.dto.medicine.DurInput;
import com.medicine.dto.medicine.DurOutput;
import com.medicine.entity.mongo.DurOverlapDoc;
import com.medicine.entity.mongo.DurTogetherDoc;
import com.medicine.entity.mysql.DurDB;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.ReviewDB;
import com.medicine.entity.mysql.SimilarMedicineDB;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.DurService;
import com.medicine.service.JwtService;
import com.medicine.service.MedicineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.medicine.response.ResponseStatus.*;

@Service("MedicineService")
@RequiredArgsConstructor
@Slf4j
public class MedicineServiceImpl implements MedicineService, DurService {

    private final SimilarMedicineRepository similarMedicineRepository;
    private final MedicineRepository medicineRepository;
    private final ReviewRepository reviewRepository;
    private final DurRepository durRepository;
    private final DurTogetherRepository durTogetherRepository;
    private final DurOverlapRepository durOverlapRepository;
    private final JwtService jwtService;

    @Override
    public PageResponse<SimilarOutput> getSimilarMedicineInfo(String id, SimilarInput similarInput) {
        // 1. 값 형식 체크
        if (id == null || id.equals(" ")) return new PageResponse<>(NO_VALUES);

        // 2. 유사 약 정보 가져오기
        Page<SimilarOutput> similarOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
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
        if (id == null || id.equals(" ")) return new Response<>(NO_VALUES);

        // 2. 약 상세정보 가져오기
        DetailOutput detailOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[medicines/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            MedicineDB medicineDB = medicineRepository.findById(id).orElse(null);
            if (medicineDB == null) {
                log.error("[medicines/get] NOT FOUND MEDICINE error");
                return new Response<>(NOT_FOUND_MEDICINE);
            }

            double reviewAvgScore = reviewRepository.findByMedicineId(id).stream()
                    .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
            reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

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

        } catch (Exception e) {
            log.error("[medicines/get] database error", e);
            return new Response<>(DATABASE_ERROR);
        }

        return new Response<>(detailOutput, SUCCESS_GET_DETAIL_MEDICINE);

    }

    @Override
    public PageResponse<MedicineOutput> getMedicineInfoByName(String name, MedicineSearchByNameInput medicineSearchByNameInput) {
        // 1. 값 형식 체크
        if(name == null || name.equals(" "))  return new PageResponse<>(NO_VALUES);

        // 2. 약 정보 가져오기
        Page<MedicineOutput> medicineOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[medicines/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(medicineSearchByNameInput.getPage(), medicineSearchByNameInput.getSize(), Sort.Direction.DESC, "name");
            Page<MedicineDB> medicineDBList=medicineRepository.findByNameContaining(name,paging);

            // 3. 이름으로 검색한 약 리스트에 필요한 최종 결과 가공
            medicineOutput = medicineDBList.map(medicineDB -> {

                double reviewAvgScore = reviewRepository.findByMedicineId(medicineDB.getId()).stream()
                        .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
                reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

                return MedicineOutput.builder()
                        .medicineId(medicineDB.getId())
                        .name(medicineDB.getName())
                        .image(medicineDB.getImage())
                        .company(medicineDB.getCompany())
                        .category(medicineDB.getCategory())
                        .score(reviewAvgScore)
                        .build();
            });
        } catch (Exception e) {
            log.error("[medicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(medicineOutput, SUCCESS_GET_MEDICINE_LIST_BY_NAME);
    }

    @Override
    public PageResponse<MedicineOutput> getMedicineInfoByCategory(String category, MedicineSearchByCategoryInput medicineSearchByCategoryInput) {
        // 1. 값 형식 체크
        if(category == null || category.equals(" "))  return new PageResponse<>(NO_VALUES);

        // 2. 약 정보 가져오기
        Page<MedicineOutput> medicineOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[medicines/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(medicineSearchByCategoryInput.getPage(), medicineSearchByCategoryInput.getSize(), Sort.Direction.DESC, "category");
            Page<MedicineDB> medicineDBList=medicineRepository.findByCategory(category,paging);

            // 3. 카테고리별 약 리스트에 필요한 최종 결과 가공
            medicineOutput = medicineDBList.map(medicineDB -> {

                double reviewAvgScore = reviewRepository.findByMedicineId(medicineDB.getId()).stream()
                        .mapToDouble(ReviewDB::getScore).average().orElse(Double.NaN);
                reviewAvgScore = Math.round(reviewAvgScore * 10) / 10.0; // 소수점 1자리까지 보내도록 가공

                return MedicineOutput.builder()
                        .medicineId(medicineDB.getId())
                        .name(medicineDB.getName())
                        .image(medicineDB.getImage())
                        .company(medicineDB.getCompany())
                        .category(medicineDB.getCategory())
                        .score(reviewAvgScore)
                        .build();
            });
        } catch (Exception e) {
            log.error("[medicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(medicineOutput, SUCCESS_GET_MEDICINE_LIST_BY_NAME);
    }

    @Override
    public Response<DurOutput> getDurMedicineInfo(DurInput durInput) {
        // 1. 값 형식 체크
        if (durInput == null) return new Response<>(NO_VALUES);
        // 2. 범용 금기(DUR) 약 정보 가져오기
        DurOutput durOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[medicines/dur/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }

            List<String> idList = durInput.getId();
            Collections.sort(idList); // 오름차순

            List<DUR> capaList = getDurCategoryInfo(idList, "capa"); // 용량 주의
            List<DUR> childList = getDurCategoryInfo(idList, "child"); // 연령별 주의
            List<DUR> pregList = getDurCategoryInfo(idList, "preg"); // 임부 주의
            List<DUR> timeList = getDurCategoryInfo(idList, "time"); // 투여기간 주의

            List<DurTogether> togetherList = getDurTogetherInfo(idList); // 범용 금기
            List<DurOverlap> overlapList = new ArrayList<>(); // 효능 중복 주의
            getDurOverlapInfo(idList, overlapList, "해열진통소염제");
            getDurOverlapInfo(idList, overlapList, "호흡기관용약");

            // 최종 출력값 정리
            durOutput = DurOutput.builder()
                    .together(togetherList)
                    .overlap(overlapList)
                    .pregnancy(pregList)
                    .child(childList)
                    .capacity(capaList)
                    .time(timeList).build();

        } catch (Exception e) {
            log.error("[medicines/dur/get] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        // 3. 결과 return
        return new Response<>(durOutput, SUCCESS_GET_DUR_MEDICINE_LIST);
    }

    @Override
    public List<DUR> getDurCategoryInfo(List<String> idList, String category) {
        List<DUR> result = new ArrayList<>();
        for (String id : idList) {
            DurDB durDB = durRepository.findByMedicineIdAndCategory(id, category);
            if (durDB != null) {
                StringBuilder content = new StringBuilder();
                if (category.equals("child")) {
                    content.append(durDB.getAge()).append("세 미만 주의,");
                }
                content.append(durDB.getContent());

                result.add(DUR.builder()
                        .medicine(Medicine.builder()
                                .number(durDB.getMedicine().getId())
                                .name(durDB.getMedicine().getName())
                                .company(durDB.getMedicine().getCompany()).build())
                        .content(content.toString())
                        .build());
            }
        }
        return result;
    }

    @Override
    public List<DurTogether> getDurTogetherInfo(List<String> idList) {
        List<DurTogether> result = new ArrayList<>();
        for (int i = 0; i < idList.size(); i++) {
            for (int j = i + 1; j < idList.size(); j++) {
                DurTogetherDoc durTogetherDoc = durTogetherRepository.findById(idList.get(i) + "," + idList.get(j)).orElse(null);
                if (durTogetherDoc != null) {
                    MedicineDB medicineDB1 = medicineRepository.findById(idList.get(i)).orElse(null);
                    MedicineDB medicineDB2 = medicineRepository.findById(idList.get(j)).orElse(null);
                    if (medicineDB1 != null && medicineDB2 != null)
                        result.add(DurTogether.builder()
                                .medicine1(Medicine.builder()
                                        .number(medicineDB1.getId())
                                        .name(medicineDB1.getName())
                                        .company(medicineDB1.getCompany()).build())
                                .medicine2(Medicine.builder()
                                        .number(medicineDB2.getId())
                                        .name(medicineDB2.getName())
                                        .company(medicineDB2.getCompany()).build())
                                .content(durTogetherDoc.getValue())
                                .build());
                }
            }
        }
        return result;
    }

    @Override
    public void getDurOverlapInfo(List<String> idList, List<DurOverlap> overlapList, String category) {
        List<Medicine> result = new ArrayList<>();
        DurOverlapDoc durOverlapDoc = durOverlapRepository.findById(category).orElse(null);
        if(durOverlapDoc != null) {
            for (Medicine medicine : durOverlapDoc.getValue()) {
                if(idList.contains(medicine.getNumber())) {
                    result.add(medicine);
                }
            }
        }
        overlapList.add(DurOverlap.builder()
                .efficacy(category)
                .medicines(result)
                .build());
    }
}
