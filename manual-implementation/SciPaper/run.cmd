@echo off
Title SCI PAPER

call ..\..\venv\Scripts\activate
@echo on

call python manage.py runserver
@echo on