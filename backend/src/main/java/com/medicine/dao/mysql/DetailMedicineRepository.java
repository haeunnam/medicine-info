package com.medicine.dao.mysql;

import com.medicine.dto.medicine.DetailOutput;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.response.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailMedicineRepository extends JpaRepository<MedicineDB,Integer> {
    MedicineDB findById(String id);
}
