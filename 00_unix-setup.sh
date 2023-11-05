# Written by: Mikhail Ortiz-Lunyov (https://github.com/mportizlunyov)
# For:        UW-Madison CheeseHacks 2023
#
# This UNIX shell script is intended for setting up and running our
#  application created for UW-Madison CheeseHacks 2023

INSTALL_PANDAS_Q=""
INSTALL_PIP_Q=""
INSTALL_FLASK_Q=""
INSTALL_Pandas_Q=""

# Checks for python
python3 --version
if [ "$?" == "127" ] ; then
    echo "Python is required to run this application"
    echo "Install and try again later"
    exit 1
fi
# Checks for pip
pip --version
if [ "$?" == "127" ] ; then
    echo "Pip is required to run this application"
    VALID_RESPONSE=false
    while [ "$VALID_RESPONSE" != true ] ; do
        echo "Install [Y/n]?"
        read INSTALL_PIP_Q
        if [ "$INSTALL_PIP_Q" == "y" ] || [ "$INSTALL_PIP_Q" == "Y" ] ; then
            python3 -m ensurepip --upgrade
            echo "Done"
            VALID_RESPONSE=true
        elif [ "$INSTALL_PIP_Q" == "n" ] || [ "$INSTALL_PIP_Q" == "N" ] ; then
            echo "Install and try again later"
            exit 1
        else
            echo "Sorry, only 'y' or 'n' accepted"
        fi
    done
fi
# Checks for flask
flask --version
if [ "$?" == "127" ] ; then
    echo "Flask is required to run this application"
    VALID_RESPONSE=false
    while [ "$VALID_RESPONSE" != true ] ; do
        echo "Install [Y/n]?"
        read INSTALL_FLASK_Q
        if [ "$INSTALL_FLASK_Q" == "y" ] || [ "$INSTALL_FLASK_Q" == "Y" ] ; then
            pip install flask
            echo "Done"
            VALID_RESPONSE=true
        elif [ "$INSTALL_FLASK_Q" == "n" ] || [ "$INSTALL_FLASK_Q" == "N" ] ; then
            echo "Install and try again later"
            exit 1
        else
            echo "Sorry, only 'y' or 'n' accepted"
        fi
    done
fi
if [ "$(pip list | grep "pandas")" == "" ] ; then
    echo "Pandas is required to run this application"
    VALID_RESPONSE=false
    while [ "$VALID_RESPONSE" != true ] ; do
        echo "Install [Y/n]?"
        read INSTALL_Pandas_Q
        if [ "$INSTALL_Pandas_Q" == "y" ] || [ "$INSTALL_Pandas_Q" == "Y" ] ; then
            pip install pandas
            echo "Done"
            VALID_RESPONSE=true
        elif [ "$INSTALL_Pandas_Q" == "n" ] || [ "$INSTALL_Pandas_Q" == "N" ] ; then
            echo "Install and try again later"
            exit 1
        else
            echo "Sorry, only 'y' or 'n' accepted"
        fi
    done
fi

# Set up environmental values
#  Name may change with development
export FLASK_ENV=development

# Execute Python backends
python3 ./backend.py
export FLASK_APP="views.py"
python3 ./views.py
export FLASK_APP="app.py"
python3 ./app.py
