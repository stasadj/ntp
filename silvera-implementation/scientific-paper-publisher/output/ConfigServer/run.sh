#!/bin/bash

mvn clean
mvn package

java -jar --add-opens java.base/java.lang=ALL-UNNAMED target/ConfigServer-0.0.1-SNAPSHOT.jar --PORT=9090