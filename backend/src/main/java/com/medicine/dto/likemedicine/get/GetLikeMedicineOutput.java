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
    private int id;
    private String medicineId;
    private String name;
    private String image;
    private String company;
    private String category;
    double score;
}
