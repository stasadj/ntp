REM script for running the application

@echo off
Title SCI PAPER

java -jar --add-opens java.base/java.lang=ALL-UNNAMED target\SciPaper-0.0.1b-SNAPSHOT.jar --PORT=50002