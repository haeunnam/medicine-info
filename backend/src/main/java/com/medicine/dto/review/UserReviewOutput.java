package com.medicine.dto.review;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class UserReviewOutput {
    private int reviewId;
    private String medicineId;
    private String image;
    private String name;
    private String company;
    private String category;
    private int score;
    private String content;
    private Date createdAt;
    private Date updatedAt;
}
