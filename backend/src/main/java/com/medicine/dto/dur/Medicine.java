package com.medicine.dto.dur;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Medicine {
    private final String number;
    private final String name;
    private final String company;
}
