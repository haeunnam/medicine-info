package com.medicine.dao.mongo;

import com.medicine.entity.mongo.DurOverlapDoc;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DurOverlapRepository extends MongoRepository<DurOverlapDoc, String> {
}
