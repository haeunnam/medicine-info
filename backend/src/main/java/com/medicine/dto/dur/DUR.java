package com.medicine.dto.dur;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DUR {
    private final Medicine medicine;
    private final String content;
}
