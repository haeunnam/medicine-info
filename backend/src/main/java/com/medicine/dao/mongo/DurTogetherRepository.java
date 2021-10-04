package com.medicine.dao.mongo;

import com.medicine.entity.mongo.DurTogetherDoc;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DurTogetherRepository extends MongoRepository<DurTogetherDoc, String> {
}
