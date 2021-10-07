package com.medicine.dto.dur;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class DurOverlap {
    private final String efficacy;
    private final List<Medicine> medicines;
}
