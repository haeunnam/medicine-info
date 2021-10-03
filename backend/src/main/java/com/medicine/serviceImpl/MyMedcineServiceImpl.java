package com.medicine.serviceImpl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.medicine.dao.mysql.MedicineRepository;
import com.medicine.dao.mysql.MyMedicineRepository;
import com.medicine.dto.mymedicine.create.MyMedicineCreateInput;
import com.medicine.dto.mymedicine.get.MyMedicineInput;
import com.medicine.dto.mymedicine.get.MyMedicineOutput;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.MyMedicineDB;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import com.medicine.response.ResponseStatus;
import com.medicine.service.JwtService;
import com.medicine.service.MyMedicineService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import static com.medicine.response.ResponseStatus.*;

import java.util.List;

@Service("MyMedicineService")
@RequiredArgsConstructor
@Slf4j
public class MyMedcineServiceImpl implements MyMedicineService{
	private final JwtService jwtService;
	private final MyMedicineRepository myMedicineRepository;
	private final MedicineRepository medicineRepository;
	
	@Override
	public PageResponse<MyMedicineOutput> getMyMedicineList(MyMedicineInput myMedicineInput) {
		// 2. 복용약 정보 가져오기
        Page<MyMedicineOutput> myMedicineOutput;
        try {
            int loginUserId = 22;//jwtService.getUserId();
            if(loginUserId < 0) {
                log.error("[mymedicines//get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(myMedicineInput.getPage(), myMedicineInput.getSize(), Sort.Direction.DESC, "id");
            Page<MyMedicineDB> myMedicineDBList = myMedicineRepository.findByUserId(loginUserId, paging);

            // 3. 복용약 리스트에 필요한 최종 결과 가공
            myMedicineOutput = myMedicineDBList.map(myMedicineDB -> {
                MedicineDB detailInfoDB = myMedicineDB.getMedicine();

                return MyMedicineOutput.builder()
						.id((myMedicineDB.getId()))
						.medicineid(detailInfoDB.getId())
						.name(detailInfoDB.getName())
						.efficacy(detailInfoDB.getEfficacy())
						.datetime(myMedicineDB.getDatetime())
						.build();
            });
        } catch (Exception e) {
            log.error("[mymedicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(myMedicineOutput, SUCCESS_GET_MY_MEDICINE_LIST);
	}

	@Override
	public Response<Long> createMymedicine(MyMedicineCreateInput myMedicineCreateInput) {
		MyMedicineDB mymedicinesDB;
		try {
            int loginUserId = 22;//jwtService.getUserId();
            if(loginUserId < 0) {
                log.error("[mymedicines/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            List<MyMedicineDB> MyMedicineDBList = myMedicineRepository.findByMedicineId(myMedicineCreateInput.getMedicine_id());
            if(MyMedicineDBList.size() > 0) {
            	return new Response<>(ResponseStatus.BAD_REQUEST);
            }
            mymedicinesDB = MyMedicineDB.builder()
					            		.userId(loginUserId)
					            		.medicine(medicineRepository.findById(myMedicineCreateInput.getMedicine_id()))
					            		.datetime(myMedicineCreateInput.getDateime())
					            		.build();
            myMedicineRepository.save(mymedicinesDB);
            return new Response<>((long)1, ResponseStatus.SUCCESS);
		} catch (Exception e) {
            log.error("[mymedicines/get] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
	}

	@Override
	public Response<Long> deleteMymedicine(String id) {
		try {
            int loginUserId = 22;//jwtService.getUserId();
            if(loginUserId < 0) {
                log.error("[mymedicines/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            List<MyMedicineDB> MyMedicineDBList = myMedicineRepository.findByMedicineId(id);
            myMedicineRepository.deleteById(MyMedicineDBList.get(0).getId());
            return new Response<>((long)1, ResponseStatus.SUCCESS);
		} catch (Exception e) {
            log.error("[mymedicines/get] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
	}
}
