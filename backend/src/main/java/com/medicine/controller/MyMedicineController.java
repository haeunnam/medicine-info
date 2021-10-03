package com.medicine.controller;

import javax.validation.Valid;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicine.dto.mymedicine.create.MyMedicineCreateInput;
import com.medicine.dto.mymedicine.get.MyMedicineInput;
import com.medicine.dto.mymedicine.get.MyMedicineOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.service.MyMedicineService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/my-medicines")
@RequiredArgsConstructor
@Slf4j
public class MyMedicineController {

	private final MyMedicineService myMedicineService;
	
	/**
     * 복용약 조회 API
     * [GET] /my-medicines
     * @return Response<MyMedicineOutput>
     */
	@GetMapping
	@ApiOperation(value = "복용약 조회", notes = "유저가 복용하고 있는 약 정보를 조회한다.")
	public PageResponse<MyMedicineOutput> getMyMedicines(@Valid MyMedicineInput myMedicineInput) {
		log.info("[GET] /my-medicines");
		return myMedicineService.getMyMedicineList(myMedicineInput);
	}
	
	/**
     * 복용약 생성 API
     * [POST] /my-medicines
     * @return Response<CreateOutput>
     */
	@PostMapping
	@ApiOperation(value = "복용약 생성", notes = "유저가 복용하고 있는 약 정보를 생성한다.")
	public Response<Object> createMyMedicines(@RequestBody MyMedicineCreateInput createInput) {
		log.info("[POST] /my-medicines");
		return myMedicineService.createMyMedicine(createInput);
	}
	
	/**
     * 복용약 생성 API
     * [DELETE] /my-medicines
     * @return Response<Integer>
     */
	@DeleteMapping("/{id}")
	@ApiOperation(value = "복용약 삭제", notes = "유저가 복용하고 있는 약 정보를 삭제한다.")
	public Response<Object> deleteMyMedicines(@PathVariable("id") String id) {
		log.info("[DELETE] /my-medicines/" + id);
		return myMedicineService.deleteMyMedicine(id);
	}
}
