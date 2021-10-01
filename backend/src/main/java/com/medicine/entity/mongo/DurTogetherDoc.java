package com.medicine.entity.mongo;

import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document("togethers")
@Getter
public class DurTogetherDoc {
    @Id
    private String _id;
    private String value;
}
