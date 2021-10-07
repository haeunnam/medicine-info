package com.medicine.dao.mysql;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.entity.mysql.MyMedicineDB;

@Repository
public interface MyMedicineRepository extends JpaRepository<MyMedicineDB, Integer> {
	Page<MyMedicineDB> findByUserId(int userid, Pageable paging);
    boolean existsByMedicineIdAndUserId(String medicineId, int userId);
    MyMedicineDB findByMedicineIdAndUserId(String medicineId, int userId);
}
