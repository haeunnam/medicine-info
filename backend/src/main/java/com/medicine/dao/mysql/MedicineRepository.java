package com.medicine.dao.mysql;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicine.entity.mysql.MedicineDB;

public interface MedicineRepository extends JpaRepository<MedicineDB,Integer> {
	MedicineDB findById(String id);
}
