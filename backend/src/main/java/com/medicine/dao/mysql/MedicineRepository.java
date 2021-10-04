package com.medicine.dao.mysql;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.medicine.entity.mysql.MedicineDB;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<MedicineDB, String> {
	Page<MedicineDB> findByNameContaining(String name, Pageable paging);
	Page<MedicineDB> findByCategory(String category, Pageable paging);
}
