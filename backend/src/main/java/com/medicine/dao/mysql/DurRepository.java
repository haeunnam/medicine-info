package com.medicine.dao.mysql;

import com.medicine.entity.mysql.DurDB;
import com.medicine.entity.mysql.DurPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DurRepository extends JpaRepository<DurDB, DurPK> {
    DurDB findByMedicineIdAndCategory(String medicineId, String category);
}
