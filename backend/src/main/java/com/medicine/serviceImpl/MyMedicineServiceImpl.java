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
import com.medicine.service.JwtService;
import com.medicine.service.MyMedicineService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import static com.medicine.response.ResponseStatus.*;

@Service("MyMedicineService")
@RequiredArgsConstructor
@Slf4j
public class MyMedicineServiceImpl implements MyMedicineService{
	private final JwtService jwtService;
	private final MyMedicineRepository myMedicineRepository;
	private final MedicineRepository medicineRepository;
	
	@Override
	public PageResponse<MyMedicineOutput> getMyMedicineList(MyMedicineInput myMedicineInput) {
		// 2. 복용약 정보 가져오기
        Page<MyMedicineOutput> myMedicineOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[my-medicines/get] NOT FOUND LOGIN USER error");
                return new PageResponse<>(NOT_FOUND_USER);
            }

            Pageable paging = PageRequest.of(myMedicineInput.getPage(), myMedicineInput.getSize(), Sort.Direction.DESC, "datetime");
            Page<MyMedicineDB> myMedicineDBList = myMedicineRepository.findByUserId(loginUserId, paging);

            // 3. 복용약 리스트에 필요한 최종 결과 가공
            myMedicineOutput = myMedicineDBList.map(myMedicineDB -> {
                MedicineDB detailInfoDB = myMedicineDB.getMedicine();

                return MyMedicineOutput.builder()
						.id((myMedicineDB.getId()))
						.medicineId(detailInfoDB.getId())
						.name(detailInfoDB.getName())
						.efficacy(detailInfoDB.getEfficacy())
						.dateTime(myMedicineDB.getDatetime())
						.build();
            });

        } catch (Exception e) {
            log.error("[my-medicines/get] database error", e);
            return new PageResponse<>(DATABASE_ERROR);
        }
        // 4. 결과 return
        return new PageResponse<>(myMedicineOutput, SUCCESS_GET_MY_MEDICINE_LIST);
	}

	@Override
    @Transactional
	public Response<Object> createMyMedicine(MyMedicineCreateInput myMedicineCreateInput) {
		MyMedicineDB myMedicineDB;
		try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[my-medicines/post] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            MedicineDB medicineDB = medicineRepository.findById(myMedicineCreateInput.getMedicineId());
            if(medicineDB == null) {
                log.error("[my-medicines/post] NOT FOUND MEDICINE INFO error");
                return new Response<>(NOT_FOUND_MEDICINE);
            }
            if(myMedicineRepository.existsByMedicineIdAndUserId(myMedicineCreateInput.getMedicineId(), loginUserId)) {
                log.error("[my-medicines/post] DUPLICATE MY MEDICINE INFO error");
                return new Response<>(EXISTS_INFO);
            }

            myMedicineDB = MyMedicineDB.builder()
					            		.userId(loginUserId)
					            		.medicine(medicineDB)
					            		.datetime(myMedicineCreateInput.getDateTime())
					            		.build();
            myMedicineRepository.save(myMedicineDB);

            return new Response<>(null, CREATED_MY_MEDICINE);
		} catch (Exception e) {
            log.error("[my-medicines/post] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
	}

	@Override
    @Transactional
	public Response<Object> deleteMyMedicine(int id) {
        if (id <= 0) return new Response<>(BAD_REQUEST);
		try {
            int loginUserId = jwtService.getUserId();
            if(loginUserId <= 0) {
                log.error("[my-medicines/delete] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            myMedicineRepository.deleteById(id);
		} catch (Exception e) {
            log.error("[my-medicines/delete] database error", e);
            return new Response<>(DATABASE_ERROR);
        }
        return new Response<>(null, SUCCESS_DELETE_MY_MEDICINE);
    }
}
