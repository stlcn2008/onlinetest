rem echo off
if {%1} == {} goto usage
if %1 == dev goto deployDev
if %1 == prod goto deployProd

:usage
echo Usage: deploy dev or deploy prod
goto end


:deployDev
    rd /Q /S ..\Mainserver\web-app\classic
	rd /Q /S ..\Mainserver\web-app\modern
	del /Q /F ..\Mainserver\web-app\*.*
	
    xcopy /E /Y classic\* ..\Mainserver\web-app\classic\
	xcopy /E /Y locale\* ..\Mainserver\web-app\locale\
    xcopy /E /Y app\* ..\Mainserver\web-app\app\
	xcopy /E /Y build\* ..\Mainserver\web-app\build\
    xcopy /Y *.* ..\Mainserver\web-app\
	
	if not exist ..\Mainserver\web-app\ext xcopy /E ext\* ..\Mainserver\web-app\ext\
	
	goto end
    

	
:deployProd

    rd /Q /S ..\Mainserver\web-app\classic
	rd /Q /S ..\Mainserver\web-app\app
	rd /Q /S ..\Mainserver\web-app\build
	rd /Q /S ..\Mainserver\web-app\ext
	del /Q /F ..\Mainserver\web-app\*.*
	
    xcopy /E /Y build\production\MainClient\* ..\Mainserver\web-app\
	xcopy /E /Y locale\* ..\Mainserver\web-app\locale\
    goto end
)

:end

