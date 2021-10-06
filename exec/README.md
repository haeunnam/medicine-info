# How to build & deploy `What The Medicine?! (wtm)` project

## 1. Setting
- JVM: OpenJDK-8 
- Web Server: Nginx
- WAS: Gradle
- Database: MYSQL, MongoDB
- Frontend IDE: Visual Studio
- Backend IDE: Intellij Ultimate

<br>

## 2. Setup Hadoop Cluster Server
- Download dependencies
```
1. commons-lang-2.6.jar
2. mongo-java-driver-3.8.2.jar
3. mongo-hadoop-core-1.3.0.jar
4. mongodb-driver-core-3.8.2.jar
```

- Set environment variable for hadoop classpath
```
# environment variable for hadoop classpath
# need to use external jar

export HADOOP_CLASSPATH=:{YOUR_DEPENDENCIES_FOLDER_PATH}/*
```

- Compile mapReduce code
```
$ cd {YOUR_HADOOP_PROJECT_FORDER_PATH}

$ ant
```

- Put dataset into HDFS
```
$ cd {YOUR_HADOOP_PROJECT_FORDER_PATH}

$ hdfs dfs -mkdir {YOUR_INPUT_DIRECTORY}

$ hdfs dfs -put {YOUR_INPUT_DATASET} {YOUR_INPUT_DIRECTORY}
```

- Run mapReduce algorithm code 
    - After finishing mapReduce code, this result saves in your mongoDB
```
$ cd {YOUR_HADOOP_PROJECT_FORDER_PATH}

$ hadoop jar medicine-hadoop.jar {HADOOP_COMMAND} {YOUR_INPUT_DIRECTORY} {YOUR_MONGODB_DATABASE}.{YOUR_MONGODB_COLLECTION}
```

<br>

## 3. Setup Web Server
- Issue `let's encrypt` certificate
``` 
$ docker run -it --rm --name cert_tmp -p 80:80 -v /home/ubuntu/cert:/etc/letsencrypt certbot/certbot certonly \ --standalone -d {YOUR_SERVER_DOMAIN} -m {YOUR_MAIL} 
```

- Install Nginx
```
$ sudo apt-get update

$ sudo apt-get upgrade

// nginx install
$ sudo apt-get install nginx
```

- Move build file to Nginx root directory(/usr/share/nginx/html)
```
$ cd S05P21B205/frontend

// npm package install
$ npm install

// project build
$ npm run build

// project deploy
$ cp build/* /usr/share/nginx/html
```

- Set up Nginx conf file
```
$ cd /etc/nginx/sites-available

$ vi default
```

```
# 80 port 용도
server {
    listen      80 default_server;
    listen [::]:80 default_server;

    location / {
        # 영구적으로 https로 redirect 처리
        return 301 https://$host$request_uri;
    }
}

# 기존 설정을 https(443)용으로 설정
server {
    listen      443 ssl default_server;
    listen [::]:443 ssl default_server;

    # 인증서 설정 (managed by Certbot)
    ssl_certificate /etc/ssl/certs/fullchain.pem;
    ssl_certificate_key /etc/ssl/certs/privkey.pem;
    ssl_session_cache shared:le_nginx_SSL:10m;
    ssl_session_timeout 1440m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers "SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384";

    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri /index.html;

    location /api {
        proxy_pass http://docker-nginx/api;
        proxy_redirect off;
        charset utf-8;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
    }
}

```

- Restart Nginx
```
$ sudo service nginx start
```

<br>

## 4. Setup application.yml
- Set environment variables according to your project. 
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

<br>

## 5. Setup Web Application Server
- Before deploying, you have to set application.yml in your project
```
$ cd S05P21B205/backend

$ chmod +x gradlew

// project build
$ ./gradlew build

// project deploy
$ cd build/libs
$ java -jar medicine_api-1.0.jar
```

<br>

## 6. Open Data
- [e약은요, 의약품개요 정보](https://nedrug.mfds.go.kr/searchEasyDrug)
- [의약품 낱알식별 정보](https://nedrug.mfds.go.kr/pbp/CCBGA01/getItem?totalPages=4&limit=10&page=2&&openDataInfoSeq=11)
- [한국의약품안전관리원_DUR정보_임부주의약물](https://www.data.go.kr/data/15039479/fileData.do)
- [한국의약품안전관리원_DUR정보_어린이주의약물](https://www.data.go.kr/data/15039470/fileData.do)
- [한국의약품안전관리원_DUR정보_용량주의](https://www.data.go.kr/data/15039480/fileData.do)
- [한국의약품안전관리원_DUR정보_투여기간주의약물](https://www.data.go.kr/data/15039474/fileData.do)
- [한국의약품안전관리원_DUR정보_효능군중복주의약물](https://www.data.go.kr/data/15039477/fileData.do)
- [DUR유형별 품목현황, 병용금기 정보](https://nedrug.mfds.go.kr/pbp/CCBGA01/getItem?&openDataInfoSeq=2)
- [의약품 제품 허가정보_의약품 상세조회(주성분)](https://nedrug.mfds.go.kr/pbp/CCBGA01/getItem?totalPages=5&limit=10&page=3&&openDataInfoSeq=31)

<br>

## 7. ERD Description
[이게뭐약?! ERD](https://docs.google.com/spreadsheets/d/1y4Aa-XJ8GF8HixzgQI9lXpbtiwospgdH3QCWaxjTlik/edit?usp=sharing)