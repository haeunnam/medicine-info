package com.medicine.dao.mysql;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.entity.mysql.MyMedicineDB;

@Repository
public interface MyMedicineRepository extends JpaRepository<MyMedicineDB, Integer> {
	Page<MyMedicineDB> findByUserId(int userid, Pageable paging);

	List<MyMedicineDB> findByMedicineId(String medicine_id);

}
