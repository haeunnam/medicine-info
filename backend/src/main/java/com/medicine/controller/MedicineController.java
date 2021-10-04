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

import static com.medicine.response.ResponseStatus.BAD_REQUEST;

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
    // Path-Variable, Params
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
    // Path-Variable
    @GetMapping("/{id}")
    @ApiOperation(value = "약 상세정보 조회", notes = "약의 상세정보를 조회한다.")
    public Response<DetailOutput> getDetailMedicineInfo(@PathVariable(name="id") String id){
        log.info("[GET] /medicines/" + id);
        return medicineService.getDetailMedicineInfo(id);
    }

    /**
     * 약 조회 API
     * [GET] /medicines?name=
     * [GET] /medicines?category=
     * @return Response<MedicineOutput>
     */
    // Params
    @GetMapping
    @ApiOperation(value="약 조회", notes = "'카테고리' 또는 '이름' 으로 약 정보를 조회한다.")
    public PageResponse<MedicineOutput> getMedicineInfoByName(@Valid MedicineSearchInput medicineSearchInput){
        if(medicineSearchInput.getName() == null && medicineSearchInput.getCategory() == null) {
            log.info("[GET] /medicines?NO_VALID_STATUS");
            return new PageResponse<>(BAD_REQUEST);
        }
        if(medicineSearchInput.getName() != null) {
            log.info("[GET] /medicines?name="+medicineSearchInput.getName());
            return medicineService.getMedicine(medicineSearchInput, true);
        } else {
            log.info("[GET] /medicines?category="+medicineSearchInput.getCategory());
            return medicineService.getMedicine(medicineSearchInput, false);
        }
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
