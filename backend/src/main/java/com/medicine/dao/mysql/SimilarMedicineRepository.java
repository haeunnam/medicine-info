package com.medicine.dao.mysql;

import com.medicine.entity.mysql.SimilarMedicineDB;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SimilarMedicineRepository extends JpaRepository<SimilarMedicineDB, Integer> {
    Page<SimilarMedicineDB> findByMedicineId(String id, Pageable paging);
}
