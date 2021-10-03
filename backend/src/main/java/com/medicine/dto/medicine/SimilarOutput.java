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
    String id;
    String name;
    String image;
    String company;
    String category;
    double score;
}
