rem echo off
if {%1} == {} goto usage
if %1 == dev goto deployDev
if %1 == prod goto deployProd

:usage
echo Usage: deploy dev or deploy prod
goto end


:deployDev
    rd /Q /S ..\OnlineTest\web-app\classic
	rd /Q /S ..\OnlineTest\web-app\modern
	del /Q /F ..\OnlineTest\web-app\*.*
	
    xcopy /E /Y classic\* ..\OnlineTest\web-app\classic\
    xcopy /E /Y app\* ..\OnlineTest\web-app\app\
	xcopy /E /Y build\* ..\OnlineTest\web-app\build\
	xcopy /E /Y locale\* ..\OnlineTest\web-app\locale\
    xcopy /Y *.* ..\OnlineTest\web-app\
	
	if not exist ..\OnlineTest\web-app\ext xcopy /E ext\* ..\OnlineTest\web-app\ext\
	
	goto end
    

	
:deployProd

    rd /Q /S ..\OnlineTest\web-app\classic
	rd /Q /S ..\OnlineTest\web-app\app
	rd /Q /S ..\OnlineTest\web-app\build
	rd /Q /S ..\OnlineTest\web-app\ext
	del /Q /F ..\OnlineTest\web-app\*.*
	
    xcopy /E /Y build\production\OnlineTestClient\* ..\OnlineTest\web-app\
	xcopy /E /Y locale\* ..\OnlineTest\web-app\locale\
    goto end
)

:end

