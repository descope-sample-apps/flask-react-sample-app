# Flask + Descope Authentication (and a little bit of React) 

Using the Python framework Flask + React.js + Descope Python SDK to add authentication and manage basic authentication.
You will also be able to see roles based on tenants.

<br>

## Installing Dependencies 🛠️

### Frontend Setup

cd into frontend/descope-flask: ```npm install``` 
<br>

In ```package.json``` add the following to allow react to access our flask server (or whatever url your flask server is locally hosted): ```"proxy":"http://127.0.0.1:5000/"``` 
<br>

Create a ```.env``` file in the root directory of the descope-flask folder and add your project id in the file: ```REACT_APP_PROJECT_ID=YOUR_PROJECT_ID```
<br>

<br> 

### Backend Setup

To get all the required ids and information to setup the backend, first make sure that you have a descope project. <br>
Then create two different [tenants](https://app.descope.com/tenants) called "Teachers" and "Students." A tenant is just a way of organizing a group of users who share similar characteristics. <br>
Next add your [roles](https://app.descope.com/authorization). Create two different roles called "teacher" and "student." <br>

<br>

cd into backend and setup: ```make setup```
This will create a virtual environment and install all dependencies for you.

<br>

Create a ```.env``` file and inside the backend folder and add your project id, student tenant id, and teacher tenant id in the file:  
```
PROJECT_ID=YOUR_PROJECT_ID
STUDENT_TENANT_ID=YOUR_STUDENT_TENANT_ID
TEACHER_TENANT_ID=YOUR_STUDENT_TENANT_ID
```

<br>

## Running the Application 💡

- cd into backend: ```flask run```
- cd into frontend/descope-flask: ```npm start```

<br>

## Folder Structure 📁

- backend: the backend folder contains the flask app and server that will handle session validation 
    - app.py: our main flask app (server)
    - requirements.txt: a txt file with a list of our dependencies
- frontend: the frontend folder contains our react app which is the client 
    - descope-flask: this is our react app 

<br>

## What is going on? 🤔

### How do I get started with Descope?
If you don't have a Descope project or unsure what a project ID is, check out the [docs](https://docs.descope.com/build/guides/gettingstarted/)

### What is Flask?
Flask is a light-weight framework written in Python. It's super simple to get your web app started and running using Flask with just a couple of lines. To learn the basics of Flask, check out the official [documentation](https://flask.palletsprojects.com/en/2.3.x/quickstart/)<br>

### What is React? 
React is a JavaScript web framework used to create beautiful user interfaces. To learn the basics of React check out the official [documentation](https://react.dev/learn)


