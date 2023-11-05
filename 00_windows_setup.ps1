# Written by: Mikhail Ortiz-Lunyov (https://github.com/mportizlunyov)
# For:        UW-Madison CheeseHacks 2023
#
# This powershell script is intended for setting up and running our
#  application created for UW-Madison CheeseHacks 2023

# You may need to enable PowerShell script execution, see:
#  https:/go.microsoft.com/fwlink/?LinkID=135170
# Easiest (but potentially most dangerous):
#  Set-ExecutionPolicy Bypass


$install_python_q
$install_pip_q
$install_flask_q
$install_pandas_q

# Check for Python
try {python --version}
catch {
    Write-Host "Python is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        $install_python_q = Read-Host
        if ($install_python_q -eq "Y") {
            winget install python
            Write-Host "Done"
            $valid_response = $true
        }
        elseif ($install_python_q -eq "N") {
            Write-Host "Install and try again later"
            exit
        }
        else {
            Write-Host "Sorry, only 'y' or 'n' accepted"
        }
    }
}
# Check for Pip
try {pip --version}
catch {
    Write-Host "Pip is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        $install_pip_q = Read-Host
        if ($install_pip_q -eq "Y") {
            python -m ensurepip --upgrade
            Write-Host "Done"
            $valid_response = $true
        }
        elseif ($install_pip_q -eq "N") {
            Write-Host "Install and try again later"
            exit
        }
        else {
            Write-Host "Sorry, only 'y' or 'n' accepted"
        }
    }
}
# Check for Flask
try {flask --version}
catch {
    Write-Host "Flask is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        $install_flask_q = Read-Host
        if ($install_flask_q -eq "Y") {
            pip install flask
            Write-Host "Done"
            $valid_response = $true
        }
        elseif ($install_flask_q -eq "N") {
            Write-Host "Install and try again later"
            exit
        }
        else {
            Write-Host "Sorry, only 'y' or 'n' accepted"
        }
    }
}
# Check for Pandas
$command = 'pip list | findstr "pandas"'
if ($command -ne $null) {
    Write-Host "Pandas is required to run this application"
    $valid_response = $false
    while ($valid_response -ne "") {
        Write-Host "Install [Y/n]?"
        $install_pandas_q = Read-Host
        if ($install_pandas_q -eq "Y") {
            pip install pandas
            Write-Host "Done"
            $valid_response = $true
        }
        elseif ($install_pandas_q -eq "N") {
            Write-Host "Install and try again later"
            exit
        }
        else {
            Write-Host "Sorry, only 'y' or 'n' accepted"
        }
    }
}


# Set up environmental values
#  Name may change with development

$env:FLASK_ENV='development'

# Execute Python backends
python .\backend.py
$env:FLASK_APP='views.py'
python .\views.py
$env:FLASK_APP='app.py'
python .\app.py
