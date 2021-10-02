package com.medicine.entity.mysql;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@Getter
@Entity
@IdClass(DurPK.class)
@Table(name = "DUR")
public class DurDB implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "medicine_id", nullable = false, insertable = false, updatable = false)
    private MedicineDB medicine;

    @Id
    @Column(name = "category", nullable = false, insertable = false, updatable = false, length = 10)
    private String category;

    @Column(name = "content", insertable = false, updatable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "age", insertable = false, updatable = false)
    private int age;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;
}