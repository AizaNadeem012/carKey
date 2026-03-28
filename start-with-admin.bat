@echo off
echo Starting Car Key Stockport with Service Hub Pro Integration...
echo.
echo Starting Service Hub Pro Backend (Port 3001)...
start cmd /k "cd service-hub-pro-main\service-hub-pro-main && npx tsx server.ts"
timeout /t 3 /nobreak >nul
echo.
echo Starting Car Key Stockport Frontend (Port 3000)...
start cmd /k "pnpm dev"
echo.
echo Both servers are starting...
echo - Service Hub Pro Admin Panel: http://localhost:5173
echo - Car Key Stockport Website: http://localhost:3000
echo.
pause
