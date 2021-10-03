package com.medicine.dto.likemedicine.create;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@NoArgsConstructor
@Getter
public class CreateLikeMedicineInput {
    @NotNull
    String medicineId;
}
