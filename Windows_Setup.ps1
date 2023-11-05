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

# Check for Python
try {python --version}
catch {
    Write-Host "Python is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        Read-Host $install_python_q
        if ($install_python_q -eq "Y") {
            winget install python
            Write-Host "Done"
            valid_response = $true
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
    #
    Write-Host "Pip is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        Read-Host $install_pip_q
        if ($install_pip_q -eq "Y") {
            python -m ensurepip --upgrade
            Write-Host "Done"
            valid_response = $true
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
    #
    Write-Host "Flask is required to run this application"
    $valid_response = $false
    while ($valid_response -ne $true) {
        Write-Host "Install [Y/n]?"
        Read-Host $install_flask_q
        if ($install_pip_q -eq "Y") {
            pip install flask
            Write-Host "Done"
            valid_response = $true
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


# Set up environmental values
#  Name may change with development
$env:FLASK_APP='CheeseHacks_Calorie_Reboot_Beta0'
$env:FLASK_ENV='development'

# Execute flask
flask run
