import os
import json
from flask import Flask
from flask_cors import CORS
import postgre_conex as pgc
# Flask constructor takes the name of
# current module (__name__) as argument.

absolute_path = os.path.abspath(__file__)
parent_dir_path = os.path.dirname(os.path.dirname(absolute_path))

app = Flask(__name__)
CORS(app)
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
	return 'Hello World'

@app.route('/connection')
# ‘/’ URL is bound with hello_world() function.
def connection():
	return 'You are connected to  Flask back-end'

@app.route('/dbconnection')
# ‘/’ URL is bound with hello_world() function.
def dbconnection():
	with open(os.path.join(parent_dir_path,'db_config.json')) as json_file:
		data = json.load(json_file)
	db_con=data
	conn=pgc.postgreconnect(db_con)
	query=db_con["query"]
	return pgc.postgreexec(conn,query)


    
if __name__ == '__main__':
	# run() method of Flask class runs the application
	# on the local development server.
	with open(os.path.join(parent_dir_path,'config.json')) as json_file:
		data = json.load(json_file)
	app.run(host='127.0.0.1', port=data["b_port"] ,debug = True)