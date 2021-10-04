package com.medicine.controller;

import com.medicine.dto.medicine.*;
import com.medicine.dto.medicine.DurInput;
import com.medicine.dto.medicine.DurOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.MedicineService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/medicines")
@RequiredArgsConstructor
@Slf4j
public class MedicineController {
    private final MedicineService medicineService;

    /**
     * 유사약 조회 API
     * [GET] /medicines/similar/{id}
     * @return Response<SimilarOutput>
     */
    // Params
    @GetMapping("/similar/{id}")
    @ApiOperation(value = "유사약 조회", notes = "해당 약과 유사한 약 정보를 조회한다.")
    public PageResponse<SimilarOutput> signUp(@PathVariable("id") String id, @Valid SimilarInput similarInput) {
        log.info("[GET] /medicines/similar/" + id);
        return medicineService.getSimilarMedicineInfo(id, similarInput);
    }

    /**
     * 약 상세정보 조회 API
     * [GET] /medicines/{id}
     * @return Response<DetailOutput>
     */
    // Params
    @GetMapping("/{id}")
    @ApiOperation(value = "약 상세정보 조회", notes = "약의 상세정보를 조회한다.")
    public Response<DetailOutput> getDetailMedicineInfo(@PathVariable(name="id") String id){
        log.info("[GET] /medicines/" + id);
        return medicineService.getDetailMedicineInfo(id);
    }

    /**
     * 약 이름별 조회 API
     * [GET] /medicines/names?name
     * @return Response<MedicineOutput>
     */
    @GetMapping("/names")
    @ApiOperation(value="약 이름별 조회", notes = "약 이름에 검색한 내용이 포함될 경우 약 정보를 조회한다.")
    public PageResponse<MedicineOutput> getMedicineInfoByName(@RequestParam("name") String name, @Valid MedicineSearchByNameInput medicineSearchByNameInput){
        log.info("[GET] /medicines/names?"+name);
        return medicineService.getMedicineInfoByName(name,medicineSearchByNameInput);
    }

    /**
     * 약 카테고리별 조회 API
     * [GET] /medicines/category?category="하이"
     * @return Response<MedicineOutput>
     */
    @GetMapping("/category")
    @ApiOperation(value="약 카테고리별 조회",notes="카테고리별로 약 정보를 조회한다.")
    public PageResponse<MedicineOutput> getMedicineInfoByCategory(@RequestParam String category, @Valid MedicineSearchByCategoryInput medicineSearchByCategoryInput){
        log.info("[GET] /medicines/category?"+category);
        return medicineService.getMedicineInfoByCategory(category,medicineSearchByCategoryInput);
    }

    /**
     * DUR 조회 API
     * [GET] /medicines/dur
     * @return Response<DurOutput>
     */
    // Params
    @GetMapping("/dur")
    @ApiOperation(value = "DUR 조회", notes = "범용 금기 정보를 조회한다.")
    public Response<DurOutput> getDurInfo(@Valid DurInput durInput){
        log.info("[GET] /medicines/dur");
        return medicineService.getDurMedicineInfo(durInput);
    }
}
