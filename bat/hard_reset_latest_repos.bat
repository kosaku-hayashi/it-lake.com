@echo off
setlocal

chcp 65001

set CURRENT_DIR=%~dp0
set CURRENT_DIR=%CURRENT_DIR:\=/%

cd %CURRENT_DIR%
cd ..
set PARENT_DIR=%CD%
set PARENT_DIR=%PARENT_DIR:\=/%

"C:\Program Files\Git\bin\bash.exe" -l -c "%CURRENT_DIR%\hard_reset_latest_repos.sh '%PARENT_DIR%'"

endlocal
pause