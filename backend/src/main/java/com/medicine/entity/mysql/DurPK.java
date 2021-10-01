package com.medicine.entity.mysql;

import java.io.Serializable;
import java.util.Objects;

public class DurPK implements Serializable {

    private static final long serialVersionUID = 1L;

    private MedicineDB medicine;
    private String category;

    public DurPK(){

    }

    public DurPK(MedicineDB medicine, String category){
        this.medicine = medicine;
        this.category = category;
    }

    // Getter, Setter
    @Override
    public boolean equals(Object obj) {
        if(this == obj) {
            return true;
        }

        if(obj == null || this.getClass() != obj.getClass()) {
            return false;
        }

        DurPK durPK = (DurPK)obj;
        if(this.medicine.getId().equals(durPK.medicine.getId()) && this.category.equals(durPK.category)) {
            return true;
        }

        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(medicine, category);
    }
}