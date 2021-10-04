package com.medicine.dao.mysql;

import com.medicine.entity.mysql.ReviewDB;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewDB, Integer> {
    List<ReviewDB> findByMedicineId(String id);
    Page<ReviewDB> findByMedicineId(String id, Pageable paging);
    Page<ReviewDB> findByUserId(int id, Pageable paging);
    boolean existsByMedicineIdAndUserId(String medicineId, int userId);
    void deleteByUserId(int userId);
}
