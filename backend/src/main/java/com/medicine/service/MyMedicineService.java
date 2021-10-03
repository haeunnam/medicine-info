package com.medicine.service;

import com.medicine.dto.mymedicine.create.MyMedicineCreateInput;
import com.medicine.dto.mymedicine.get.MyMedicineInput;
import com.medicine.dto.mymedicine.get.MyMedicineOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;

public interface MyMedicineService {
	PageResponse<MyMedicineOutput> getMyMedicineList(MyMedicineInput myMedicineInput);
	Response<Object> createMyMedicine(MyMedicineCreateInput createInput);
	Response<Object> deleteMyMedicine(String id);
}
