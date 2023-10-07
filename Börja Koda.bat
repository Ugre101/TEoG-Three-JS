@ echo off

:: Start the vite server
start cmd /k Powershell.exe -executionpolicy remotesigned -File "%~dp0RunViteCommand.ps1"

:: Start the browser, if you are using a different browser than chrome, change the path to the executable
start chrome /new-window http://localhost:5173/