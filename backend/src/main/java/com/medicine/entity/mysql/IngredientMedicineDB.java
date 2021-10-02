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
@Table(name = "ingredient_medicine")
public class IngredientMedicineDB {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false, insertable = false, updatable = false)
    private MedicineDB medicine;

    @Column(name = "ingredient", nullable = false, insertable = false, updatable = false, columnDefinition = "TEXT")
    private String ingredient;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;
}