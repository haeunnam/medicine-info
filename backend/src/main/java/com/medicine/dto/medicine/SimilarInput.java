package com.medicine.dto.medicine;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Data
@NoArgsConstructor
@Getter
public class SimilarInput {
    @PositiveOrZero
    int page;

    @Positive
    int size;
}
