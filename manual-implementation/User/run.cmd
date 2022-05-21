@echo off
Title USER

call ..\..\venv\Scripts\activate
@echo on

call python manage.py runserver
@echo on