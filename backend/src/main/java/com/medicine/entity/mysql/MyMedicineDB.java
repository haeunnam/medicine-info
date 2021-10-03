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
@Table(name = "my_medicine")
public class MyMedicineDB {
    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id", nullable = false, updatable = false)
    private int userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false, updatable = false)
    private MedicineDB medicine;

    @Column(name="datetime",nullable=false,updatable=false)
    private Date datetime;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;

    @Builder
    public MyMedicineDB(int userId, MedicineDB medicine, Date datetime) {
        this.userId = userId;
        this.medicine = medicine;
        this.datetime = datetime;
    }
}
