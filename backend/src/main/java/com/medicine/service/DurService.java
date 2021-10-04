package com.medicine.service;

import com.medicine.dto.dur.DUR;
import com.medicine.dto.dur.DurOverlap;
import com.medicine.dto.dur.DurTogether;

import java.util.List;

public interface DurService {
    List<DUR> getDurCategoryInfo(List<String> idList, String category) throws Exception;
    List<DurTogether> getDurTogetherInfo(List<String> idList) throws Exception;
    void getDurOverlapInfo(List<String> idList, List<DurOverlap> overlapList, String category) throws Exception;
}
