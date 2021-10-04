package com.medicine.entity.mysql;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@DynamicInsert
@NoArgsConstructor
@Getter @Setter
@Entity
@Table(name = "review")
public class ReviewDB {
    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private UserDB user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medicine_id", nullable = false, updatable = false)
    private MedicineDB medicine;

    @Column(name = "score", nullable = false)
    private int score;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;

    @Builder
    public ReviewDB(UserDB user, MedicineDB medicine, int score, String content) {
        this.user = user;
        this.medicine = medicine;
        this.score = score;
        this.content = content;
    }
}