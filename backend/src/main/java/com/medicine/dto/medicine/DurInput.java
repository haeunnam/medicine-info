package com.medicine.dto.medicine;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;
import java.util.List;

@Data
@NoArgsConstructor
@Getter
public class DurInput {
    @Size(min = 2, max = 5)
    private List<String> id;
}
