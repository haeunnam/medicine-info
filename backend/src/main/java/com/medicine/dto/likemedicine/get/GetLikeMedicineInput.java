package com.medicine.dto.likemedicine.get;

import lombok.*;

import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Data
@NoArgsConstructor
@Getter
public class GetLikeMedicineInput {
    @PositiveOrZero
    int page;

    @Positive
    int size;
}
