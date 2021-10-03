package com.medicine.dao.mysql;

import com.medicine.entity.mysql.ReviewDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewDB, Integer> {
    List<ReviewDB> findByMedicineId(String id);
    boolean existsByMedicineIdAndUserId(String medicineId, int userId);
    void deleteByUserId(int userId);
}
