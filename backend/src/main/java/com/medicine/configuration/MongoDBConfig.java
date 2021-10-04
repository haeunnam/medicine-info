package com.medicine.configuration;

import org.hibernate.ogm.jpa.HibernateOgmPersistence;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import java.util.HashMap;
import java.util.Map;

@Configuration
@PropertySource("classpath:application.yml")
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages = "com.medicine.dao.mongo",
        transactionManagerRef = "mongoDB_transactionManager",
        entityManagerFactoryRef = "mongoDB_entityManagerFactory"
)
public class MongoDBConfig {
    @Value("${spring.data.mongodb.host}")
    private String host;
    @Value("${spring.data.mongodb.port}")
    private String port;
    @Value("${spring.data.mongodb.database}")
    private String database;

    @Bean(name = "mongoDB_entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        Map<String, String> map = new HashMap<>();
        map.put("javax.persistence.transactionType", "RESOURCE_LOCAL");
//        map.put("hibernate.ogm.datastore.grid_dialect", "org.hibernate.ogm.datastore.mongodb.MongoDBDialect");
        map.put("hibernate.ogm.datastore.provider", "mongodb");
        map.put("hibernate.ogm.datastore.host", host);
        map.put("hibernate.ogm.datastore.port", port);
        map.put("hibernate.ogm.datastore.database", database);

        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setPackagesToScan("com.medicine.entity.mongo");
        em.setJpaPropertyMap(map);
        em.setPersistenceUnitName("persistence.mongo");
        em.setPersistenceProviderClass(HibernateOgmPersistence.class);
        return em;
    }

    @Bean(name = "mongoDB_transactionManager")
    public PlatformTransactionManager transactionManager(
            @Qualifier("mongoDB_entityManagerFactory") EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        return transactionManager;
    }
}
