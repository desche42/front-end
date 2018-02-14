@setlocal enableextensions
@cd /d "%~dp0"
rd .\node_modules
mklink /D .\node_modules ..\node_modules
pause
