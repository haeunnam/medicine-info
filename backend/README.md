# 이게뭐약?! Backend

#### :star: You can change environment according to your setting
### Local Env
- Java 8
- Gradle
- MYSQL, MongoDB
- Intellij Ultimate

### Server Env
- Jenkins Server (build server)
- AWS EC2 (deploy, DB server) using docker

<br><br>

## ✔ How to start project in local environment
### 1. Clone this repository
```
// 레포지토리 클론
$ git clone <https://lab.ssafy.com/s05-bigdata-dist/S05P21B205.git>

// 경로 변경
$ cd S05P21B205/backend
```

### 2. Setup application.yml
```
# S05P21B205/backend/src/main/resources/application.yml

spring:
  datasource:
    hikari:
      driver-class-name: {YOUR_DATABASE_DIRVER_CLASS_NAME}
      jdbc-url: {YOUR_DATABASE_URL}
      username: {YOUR_DATABASE_USERNAME}
      password: {YOUR_DATABASE_PASSWORD}

  data:
    mongodb:
      host: {YOUR_DATABASE_HOST}
      port: {YOUR_DATABASE_PORT}
      database: {YOUR_DATABASE_DATABASE}
      username: {YOUR_DATABASE_USERNAME}
      password: {YOUR_DATABASE_PASSWORD}

  jpa:
    hibernate:
      use-new-id-generator-mappings: false

custom:
  constant:
      access.token.secret.key: {YOUR_ACCESS_TOKEN_SECRET_KEY}
      valid.time: {YOUR_VALID_TIME}

server:
  servlet:
    context-path: "/api"
```

### 3. Start Project
> Before starting, you need to gradle build in `build.gradle` file

> Right-click on the project folder - [Run As] - [Spring Boot App] 

<br><br>

## ✔ Tech Stack
| Usage               | Stack                    |
| ------------------- | ------------------------ |
| `Spring Boot`       | Backend Framework        |
| `Spring Data JPA`   | JPA Library(Module)      |
| `MySQL`             | Database                 |
| `MongoDB`           | Database(hadoop)         |
| `JWT`               | JSON Web Token           |
| `Swagger`           | For document RESTful API |

<br><br>

## ✔ Project Structure
- `src/` 하위 폴더들은 다음과 같은 역할을 한다.
- `configuration/` : 프로젝트를 실행하기 위한 설정이 세팅되어 있다.
- `controller/` : 클라이언트의 요청을 받아, 처리한 후 응답 데이터를 넘겨주는 역할을 한다.
- `dao/` : DB에 실질적으로 접근하는 객체들이 행하는 기능들이 정의되어 있다.
- `dto/` : 계층간 데이터 교환을 위한 객체가 정의되어 있다.
- `entity/` : DB의 엔티티가 Spring Boot JPA에 맞게 세팅되어 있다.
- `response/` : 처리에 대한 응답 구조와 응답 리스트가 정의되어 있다.
- `service/` : 실질적으로 클라이언트의 요청을 처리하는 business logic이 정의되어 있다.
- `serviceImpl/` :  service interface로부터 받은 business logic이 구현되어 있다.

<br><br>

## ✔ cf) ERD , API Document
1. ERD Document
- https://docs.google.com/spreadsheets/d/1y4Aa-XJ8GF8HixzgQI9lXpbtiwospgdH3QCWaxjTlik/edit?usp=sharing
2. API Document
- https://docs.google.com/spreadsheets/d/1_2Bn7vkMZK3BZ6Gs12vXTJpNAocZqI-emdR77tjtj8I/edit?usp=sharing
