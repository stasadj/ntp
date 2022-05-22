@echo off
Title LIBRARY

call ..\..\venv\Scripts\activate
@echo on

call python manage.py runserver
@echo on