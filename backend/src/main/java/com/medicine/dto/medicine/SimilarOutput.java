package com.medicine.dto.medicine;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class SimilarOutput {
    private String id;
    private String name;
    private String image;
    private String company;
    private String category;
    private double score;
}
