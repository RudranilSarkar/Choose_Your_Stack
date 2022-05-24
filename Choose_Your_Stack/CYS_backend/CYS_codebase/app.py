# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from cmath import pi
from flask import Flask, redirect, url_for, request,Response,send_file
import util
import os
import zipfile

absolute_path = os.path.abspath(__file__)
parent_dir_path = os.path.dirname(os.path.dirname(os.path.dirname(absolute_path)))
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
	#return 'Hello World'
   return absolute_path

@app.route('/download')

def download_Object():
   temp_dict=dict()
   temp_dict["f_name"] = request.form.get("f_name")
   temp_dict["f_port"] = request.form.get("f_port")
   temp_dict["b_name"] = request.form.get("b_name")
   temp_dict["b_port"] = request.form.get("b_port")
   #for testing only
   data = dict()
   data["f_name"]="React"
   data["f_port"]=8010
   data["b_name"]="Flask"
   data["b_port"]=8011
   try:
      srcFileName=util.get_template(data)
      return send_file(srcFileName, as_attachment=True)

   except Exception as e:
      print(e)
      return ("Not Executed:"+e)

if __name__ == '__main__':
	# run() method of Flask class runs the application
	# on the local development server.
	app.run(host='127.0.0.1', port=5002 ,debug = True)
