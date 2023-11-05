# $ flask --app hello run
# export FLASK_ENV=development
# export FLASK_APP=CheeseHacks_Calorie_Reboot_Beta0
#  * Serving Flask app 'hello'
#  * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    #return "<p>Hello, World!</p>"
    return render_template('index.html')
