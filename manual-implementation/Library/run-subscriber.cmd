@echo off
Title LIBRARY - SUBSCRIBER

call ..\..\venv\Scripts\activate
@echo on

call python manage.py subscriber
@echo on