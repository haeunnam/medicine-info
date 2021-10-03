package com.medicine.dto.likemedicine.create;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
public class CreateLikeMedicineInput {
    @NotNull
    String medicineId;
}
