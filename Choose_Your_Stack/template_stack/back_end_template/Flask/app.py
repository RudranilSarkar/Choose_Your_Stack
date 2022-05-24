import os
import json
from flask import Flask
# Flask constructor takes the name of
# current module (__name__) as argument.

absolute_path = os.path.abspath(__file__)
parent_dir_path = os.path.dirname(os.path.dirname(absolute_path))

app = Flask(__name__)
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
	return 'Hello World'
    
if __name__ == '__main__':
	# run() method of Flask class runs the application
	# on the local development server.
	with open(os.path.join(parent_dir_path,'config.json')) as json_file:
		data = json.load(json_file)
	app.run(host='127.0.0.1', port=data["b_port"] ,debug = True)