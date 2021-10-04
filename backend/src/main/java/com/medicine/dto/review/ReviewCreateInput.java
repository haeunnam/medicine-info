package com.medicine.dto.review;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Getter
public class ReviewCreateInput {
    @NotBlank
    private String medicineId;

    @Min(value = 1)
    @Max(value = 5)
    private int score;

    @NotBlank
    private String content;
}
