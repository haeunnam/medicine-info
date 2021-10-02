package com.medicine.service;

import com.medicine.dto.medicine.SimilarInput;
import com.medicine.dto.medicine.SimilarOutput;
import com.medicine.response.PageResponse;

public interface MedicineService {
    PageResponse<SimilarOutput> getSimilarMedicineInfo(String id, SimilarInput similarInput);
}
