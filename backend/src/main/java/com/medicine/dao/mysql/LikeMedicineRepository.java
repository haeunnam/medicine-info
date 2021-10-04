package com.medicine.dao.mysql;

import com.medicine.entity.mysql.LikeMedicineDB;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeMedicineRepository extends JpaRepository<LikeMedicineDB,Integer> {
    List<LikeMedicineDB> findByMedicineId(String id);
    Page<LikeMedicineDB> findByUserId(int userid,Pageable pageable);
}
