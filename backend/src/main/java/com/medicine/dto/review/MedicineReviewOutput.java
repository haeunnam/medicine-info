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
public class MedicineReviewOutput {
    private int reviewId;
    private int userId;
    private String nickname;
    private int score;
    private String content;
    private Date createdAt;
    private Date updatedAt;
}
