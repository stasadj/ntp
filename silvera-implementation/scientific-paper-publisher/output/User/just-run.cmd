REM script for running the application

@echo off
Title USER

java -jar --add-opens java.base/java.lang=ALL-UNNAMED target\User-0.0.1b-SNAPSHOT.jar --PORT=50000