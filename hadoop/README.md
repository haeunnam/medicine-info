# 이게뭐약?! Hadoop

## ✔ How to start project in local environment
### 1. Clone this repository
```
// 레포지토리 클론
$ git clone <https://github.com/jjuyeon/What-The-Medicine.git>

// 경로 변경
$ cd What-The-Medicine/hadoop
```

### 2. Set environment variable for hadoop classpath
```
# environment variable for hadoop classpath
# need to use external jar

export HADOOP_CLASSPATH=:/home/j5b205/What-The-Medicine/hadoop/dependencies/*
```

### 3. How to run hadoop mapReduce code
- Compile mapReduce code
```
$ cd /home/j5b205/What-The-Medicine/hadoop

$ ant
```

- Put dataset into HDFS
```
$ cd /home/j5b205/What-The-Medicine/hadoop

$ hdfs dfs -mkdir {YOUR_INPUT_DIRECTORY}

$ hdfs dfs -put data/{YOUR_INPUT_DATASET} {YOUR_INPUT_DIRECTORY}
```

- Run mapReduce algorithm code 
    - After finishing mapReduce code, this result saves in your mongoDB
```
$ cd /home/j5b205/What-The-Medicine/hadoop

$ hadoop jar medicine-hadoop.jar {HADOOP_COMMAND} {YOUR_INPUT_DIRECTORY} {YOUR_MONGODB_DATABASE}.{YOUR_MONGODB_COLLECTION}
```

<br><br>

## ✔ Project Structure
- `data/` : 하둡 HDFS에 사용할 데이터셋이 세팅되어 있다.
- `datagen/` : 데이터를 생성하는 코드들이 정의되어 있다.
- `dependencies/` : HDFS의 결과물을 몽고디비에 저장하기 위해 필요한 dependency가 세팅되어 있다.
- `src/` : 하둡 HDFS에 실제로 세팅되는 mapReduce 알고리즘 코드가 정의되어 있다.
- `template/` : 다양한 mapReduce 알고리즘 코드의 템플릿이 정의되어 있다.
- `build.xml` : mapReduce 코드를 컴파일하기 위한 build 설정 파일이다.

<br><br>

## ✔ Hadoop Command
| Command Name        | Description                                  |
| ------------------- | -------------------------------------------- |
| `overlap`           | Medicine analysis which has same efficacy    |
| `together`          | Medicine analysis which doesn't eat together |

<br><br>

## ✔ Used Processing Data
| File Name           | Description                          |
| ------------------- | ------------------------------------ |
| `DUR_overlap.csv`   | Using 'overlap' mapreduce code       |
| `DUR_together_csv`  | Using 'together' mapreduce code      |