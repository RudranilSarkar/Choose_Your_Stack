# Choose_Your_Stack

Team Name: Futurists

Summary:

This is a Webapp (Backend + Frontend) which can help you build cross-platform Full stack apps easily! This webapp is developed as a prototype/POC for the Finale Problem statement of Aerotho-4.0. The Backend is created using Flask(Python) and for Frontend we have used React.js.

Funtionality:
Users(Mainly Developers) will be able to Select the followings:
    1. Backend-Stack
    2. Back end port(where it will run after download)
    3. Front-end Stack
    4.Front-end port(where it will run after download)
    3. Database 
Once clicked the "Download Template" button it will connect to the APP's backend and choose the corresponding templates from pre-made templates. It will also create a config.json file,db_config.json file and a readme.md file. And then Download a Zip file containing all the files.

config.json file :  The config file will have your responses from the APP(port numbers and all). This config file will be reffered by both the backend and frontend templates to choose the ports dynamically.

db_config.json file : This file will need to be populated by the developer/user. This is a json file mainly consisting of Credentials for the database you chose along with a query running feature. To get the query executed,first populate the query section of db_config.json and then the developer/user can do a GET Request in the following end point once the backend template is hosted.
                            http://localhost:{backend_port_you_selected}/dbconnection

readme.md : This will help hte developer/user to host the backend and frontend templates with minimalistic steps.

*Point to note- Once both the backend and frontend templates are hosted ,they will be preconnected that means frontend will fetch the data sent from backend and the API end point it will fetch the data from is "/connection".

CICD Implementation :

This Repo has been implemented in a ec2 t2.micro ubuntu 20.04 instance via Github Actions and github secrets. you can refer to ".github/workflow/github-action-ec2.yml" file in the repo.

Directory Structure:

-Choose_Your_Stack
    -CYS_backend
        -CYS_codebase
            -{all of backend code of the webapp}
    -CYS_frontend
        -CYS_codebase
            -{all of frontend code of the webapp}
    -template_stack
        -back_end_template
            -{Backend template Folders}(More of theese can can be added later on)
        -front_end_template
            -{frontend template Folders}(More of theese can can be added later on)
    -temp
-.github
    -workflows
        -github-action-ec2.yml
-README.md
-version.txt


Installation guide:

*This guide is for installing it locally. To host it in a public ip/domain, You will need to install nginx/apache or any similar web servers and follow their guide line

Prerequisites-
    1.Node is needed to be installed.
    2.Python is needed to be installed.
Steps-
    Clone the repo to your local machine. Go to the folder "Choose_Your_Stack/CYS_backend/CYS_codebase/" and run the command :
                                python app.py
    *Notes* You may have to install some dependant python libraries when promted.

    Go to the folder "Choose_Your_Stack/CYS_frontend/CYS_codebase/" and run the following commands :
                                npm install package.json
                                npm start
    This should Start the webapp of CYS. The web app should be accessible via "hittp://localhost:3000".


Environment details:

	dev Environment:
        OS:Windows 11
        Techstack:React.js, flask(python)
        tools:Vs code, git, postman, PuTTY

	prod environment: 
        OS: Ubuntu 20.04
        Techstack:React.js,flask(python)
        hosting: nginx,uwsgi
        Cloud: aws ec2 (t2.micro)
        Tools: vi, postman

