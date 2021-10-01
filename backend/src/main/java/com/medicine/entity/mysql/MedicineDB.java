package com.medicine.entity.mysql;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Getter
@Entity
@Table(name="medicine")
public class MedicineDB {
    @Id
    @Column(name="id",nullable=false,updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @JoinColumn(name="name",insertable=false,updatable=false)
    private String name;

    @Column(name="company",insertable=false,nullable = false,updatable = false)
    private String company;

    @Column(name="image",insertable=false,updatable = false)
    private String image;

    @Column(name="category",insertable=false,nullable = false,updatable = false)
    private String category;

    @Column(name="efficacy",insertable=false,updatable = false)
    private String efficacy;

    @Column(name="usage",insertable=false,updatable = false)
    private String usage;

    @Column(name="before_know",insertable=false,updatable = false)
    private String before_know;

    @Column(name="precaution",insertable=false,updatable = false)
    private String precaution;

    @Column(name = "caution_food",insertable=false,updatable = false)
    private String caution_food;

    @Column(name="reaction",insertable=false,updatable = false)
    private String reaction;

    @Column(name="storage",insertable=false,updatable = false)
    private String storage;

    @CreationTimestamp
    @Column(name="created_at",insertable=false,nullable=false,updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name="updated_at",insertable=false,nullable=false)
    private Date updated_at;

    @Builder
    public MedicineDB(String id, String name,String company,String efficacy){
        this.id=id;
        this.name=name;
        this.company=company;
        this.efficacy=efficacy;
    }
}
