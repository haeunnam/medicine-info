package com.medicine.service;

import com.medicine.dto.medicine.*;
import com.medicine.dto.medicine.DurInput;
import com.medicine.dto.medicine.DurOutput;
import com.medicine.response.PageResponse;
import com.medicine.response.Response;

public interface MedicineService {
    PageResponse<SimilarOutput> getSimilarMedicineInfo(String id, SimilarInput similarInput);
    Response<DetailOutput> getDetailMedicineInfo(String id);
    PageResponse<MedicineOutput> getMedicine(MedicineSearchInput medicineSearchInput, boolean isSearchByName);
    Response<DurOutput> getDurMedicineInfo(DurInput durInput);
}
