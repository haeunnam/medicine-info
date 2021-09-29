#!/bin/bash


hadoop namenode -format

start-dfs.sh

hdfs dfs -mkdir -p .

jps

