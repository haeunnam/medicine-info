package com.medicine.dto.likemedicine.get;

import lombok.*;

import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Data
@NoArgsConstructor
@Getter
public class GetLikeMedicineInput {
    @PositiveOrZero
    private int page;

    @Positive
    private int size;
}
