package com.medicine.controller;

import com.medicine.dto.medicine.DetailOutput;
import com.medicine.dto.medicine.SimilarInput;
import com.medicine.dto.medicine.SimilarOutput;
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
    // Body
    @GetMapping("/similar/{id}")
    public PageResponse<SimilarOutput> signUp(@PathVariable("id") String id, @Valid SimilarInput similarInput) {
        log.info("[GET] /medicines/similar/" + id);
        return medicineService.getSimilarMedicineInfo(id, similarInput);
    }

    /**
     * 약 상세정보 조회 API
     * [GET] /medicines/{id}
     * @return Response<DetailOutput>
     */

    @GetMapping("/{id}")
    @ApiOperation(value = "약 상세정보 조회", notes = "약의 상세정보를 조회한다.")
    public Response<DetailOutput> getDetailMedicineInfo(@PathVariable("id") String id){
        log.info("[GET] /medicines/" + id);
        return medicineService.getDetailMedicineInfo(id);
    }
}
