REM script for running the application

@echo off
Title Service Registry

java -jar --add-opens java.base/java.lang=ALL-UNNAMED target\ServiceRegistry-0.0.1-SNAPSHOT.jar --PORT=9091