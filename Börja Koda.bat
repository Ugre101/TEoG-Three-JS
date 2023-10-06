@ echo off

:: Start the vite server, note that you might need to change the path to the vite executable
start cmd /k Powershell.exe -executionpolicy remotesigned -File "C:\TEoG Backup\TEoG Three JS\RunViteCommand.ps1"

:: Start the browser, if you are using a different browser than chrome, change the path to the executable
start chrome /new-window http://localhost:5173/