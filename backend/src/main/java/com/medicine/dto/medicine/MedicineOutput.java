package com.medicine.dto.medicine;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class MedicineOutput {
    private String medicineId;
    private String name;
    private String image;
    private String company;
    private String category;
    private double score;
}
