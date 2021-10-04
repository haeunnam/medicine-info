package com.medicine.entity.mysql;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@DynamicInsert
@NoArgsConstructor
@Getter
@Entity
@Table(name = "like_medicine")
public class LikeMedicineDB {
    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", nullable = false, updatable = false)
    private int userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false, updatable = false)
    private MedicineDB medicine;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;

    @Builder
    public LikeMedicineDB(int userId, MedicineDB medicine) {
        this.userId = userId;
        this.medicine = medicine;
    }


}
