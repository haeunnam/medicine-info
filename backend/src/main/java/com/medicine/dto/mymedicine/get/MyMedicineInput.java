package com.medicine.dto.mymedicine.get;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Data
@NoArgsConstructor
@Getter
public class MyMedicineInput {
	@PositiveOrZero
    private int page;

    @Positive
    private int size;

}
