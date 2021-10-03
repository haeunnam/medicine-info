package com.medicine.entity.mongo;

import com.medicine.dto.dur.Medicine;
import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document("overlaps")
@Getter
public class DurOverlapDoc {
    @Id
    private String _id;
    private List<Medicine> value;
}
