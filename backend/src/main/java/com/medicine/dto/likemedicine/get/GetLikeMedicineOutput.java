package com.medicine.dto.likemedicine.get;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class GetLikeMedicineOutput {
    int id;
    String medicineId;
    String name;
    String company;
    String category;
    double score;
}
