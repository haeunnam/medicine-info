package com.medicine.dao.mysql;

import com.medicine.entity.mysql.LikeMedicineDB;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeMedicineRepository extends JpaRepository<LikeMedicineDB,Integer> {
    Page<LikeMedicineDB> findByUserId(int userid,Pageable pageable);
    boolean existsByMedicineIdAndUserId(String medicineId, int userId);
    LikeMedicineDB findByMedicineIdAndUserId(String medicineId, int userId);
}
