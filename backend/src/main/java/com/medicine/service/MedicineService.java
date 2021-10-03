package com.medicine.service;

import com.medicine.dto.medicine.DetailOutput;
import com.medicine.dto.medicine.SimilarInput;
import com.medicine.dto.medicine.SimilarOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;

public interface MedicineService {
    PageResponse<SimilarOutput> getSimilarMedicineInfo(String id, SimilarInput similarInput);
    Response<DetailOutput> getDetailMedicineInfo(String id);
}
