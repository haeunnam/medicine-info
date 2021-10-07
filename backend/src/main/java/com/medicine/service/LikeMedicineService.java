package com.medicine.service;

import com.medicine.dto.likemedicine.create.CreateLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;

public interface LikeMedicineService {
    Response<Object> createLikeMedicine(CreateLikeMedicineInput createLikeMedicineInput);
    Response<Object> deleteLikeMedicine(int id);
    PageResponse<GetLikeMedicineOutput> getLikeMedicine(GetLikeMedicineInput getLikeMedicineInput);
}
