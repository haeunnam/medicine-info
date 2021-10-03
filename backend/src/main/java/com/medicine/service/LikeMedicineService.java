package com.medicine.service;

import com.medicine.dto.likemedicine.create.CreateLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineInput;
import com.medicine.dto.likemedicine.get.GetLikeMedicineOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LikeMedicineService {
    Response<Object> createLikeMedicine(CreateLikeMedicineInput createLikeMedicineInput);
    Response<Object> deleteLikeMedicine(int id);
    PageResponse<GetLikeMedicineOutput> getLikeMedicine(GetLikeMedicineInput getLikeMedicineInput);
}
