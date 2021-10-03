package com.medicine.entity.mysql;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.util.Date;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "similar_medicine")
public class SimilarMedicineDB {
    @Id
    @Column(name = "id", nullable = false, insertable = false, updatable = false)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false, insertable = false, updatable = false)
    private MedicineDB medicine;

    @Column(name = "count", nullable = false, insertable = false, updatable = false)
    private int count;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "similar_id", nullable = false, insertable = false, updatable = false)
    private MedicineDB similarMedicine;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;
}