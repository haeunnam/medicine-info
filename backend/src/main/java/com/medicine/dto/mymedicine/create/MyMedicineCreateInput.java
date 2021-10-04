package com.medicine.dto.mymedicine.create;

import java.util.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MyMedicineCreateInput {
	@NotNull
	private String medicineId;
	
	@NotNull
    @Past
	private Date dateTime;
}
