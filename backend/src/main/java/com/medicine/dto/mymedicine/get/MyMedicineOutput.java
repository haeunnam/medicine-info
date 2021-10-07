package com.medicine.dto.mymedicine.get;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class MyMedicineOutput {
	private int id;
    private String medicineId;
    private String name;
    private String image;
    private String efficacy;
    private Date dateTime;
}
