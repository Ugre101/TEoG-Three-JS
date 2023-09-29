@ echo off

start cmd /k Powershell.exe -executionpolicy remotesigned -File "C:\TEoG Backup\TEoG Three JS\RunViteCommand.ps1"

start chrome /new-window http://localhost:5173/