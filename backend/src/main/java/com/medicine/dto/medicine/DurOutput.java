package com.medicine.dto.medicine;

import com.medicine.dto.dur.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class DurOutput {
    private List<DurTogether> together; // 범용 금기
    private List<DurOverlap> overlap; // 효능 중복 주의
    private List<DUR> pregnancy; // 임부 주의
    private List<DUR> child; // 연령별 주의
    private List<DUR> capacity; // 용량 주의
    private List<DUR> time; // 투여기간 주의
}
