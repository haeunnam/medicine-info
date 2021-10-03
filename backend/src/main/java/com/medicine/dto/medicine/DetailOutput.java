package com.medicine.dto.medicine;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class DetailOutput {
    String id;
    String name;
    String image;
    String company;
    String category;
    String efficacy;
    String usage;
    String reaction;
    String storage;
}
