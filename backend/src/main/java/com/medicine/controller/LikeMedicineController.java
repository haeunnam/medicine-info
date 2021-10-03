package com.medicine.controller;

import com.medicine.dto.likemedicine.create.CreateLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.LikeMedicineService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/like-medicines")
@RequiredArgsConstructor
@Slf4j
public class LikeMedicineController {
    private final LikeMedicineService likeMedicineService;

    /**
     * 약바구니 생성 API
     * [POST] /like-medicines
     * @return Response<Object>
     */
    @PostMapping()
    @ApiOperation(value="약바구니 생성",notes="약바구니에 약을 추가한다.")
    public Response<Object> createLikeMedicine(@RequestBody @Valid CreateLikeMedicineInput createLikeMedicineInput){
        log.info("[POST] /like-medicines");
        return likeMedicineService.createLikeMedicine(createLikeMedicineInput);
    }

    /**
     * 약바구니 삭제 API
     * [DELETE] /like-medicines/{id}
     * @return Response<Object>
     */
    @DeleteMapping("/{id}")
    @ApiOperation(value="약바구니 삭제",notes="약바구니에서 선택한 약을 삭제한다.")
    public Response<Object> deleteLikeMedicine(@PathVariable int id){
        log.info("[DELETE] /like-medicines/" + id);
        return likeMedicineService.deleteLikeMedicine(id);
    }

    /**
     * 약바구니 조회 API
     * [GET] /like-medicines?page=&size=
     * @return Response<LikeMedicineOutput>
     */
    @GetMapping()
    @ApiOperation(value="약바구니 조회",notes="약바구니 정보를 조회한다.")
    public PageResponse<GetLikeMedicineOutput> getLikeMedicine(@Valid GetLikeMedicineInput getLikeMedicineInput){
        log.info("[GET] /like-medicines");
        return likeMedicineService.getLikeMedicine(getLikeMedicineInput);
    }
}
