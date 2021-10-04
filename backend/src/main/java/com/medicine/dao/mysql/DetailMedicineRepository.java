package com.medicine.dao.mysql;

import com.medicine.entity.mysql.MedicineDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailMedicineRepository extends JpaRepository<MedicineDB, String> {
}
