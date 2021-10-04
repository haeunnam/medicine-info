package com.medicine.dto.dur;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DurTogether {
    private final Medicine medicine1;
    private final Medicine medicine2;
    private final String content;
}
