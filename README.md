# Flask + Descope Authentication (and a little bit of React) 

Using the Python framework Flask + React.js + Descope Python SDK to add and manage basic authentication, tenants, and roles. The project will feature multiple pages, protected routes, and logout functionality. 

<br>

## Installing Dependencies 🛠️

### Frontend Setup

1. Install all dependencies with the command: ```npm run setup``` 
2. Create a ```.env``` file in the root directory of the `frontend` folder and add your Descope [Project ID](https://app.descope.com/settings/project) in the file: ```REACT_APP_PROJECT_ID=DESCOPE_PROJECT_ID```

> **NOTE**: If you're running your flask backend on a different port than 5000, change the ```"proxy":"http://127.0.0.1:5000/"``` value to wherever your backend is hosted.

<br> 

### Backend Setup

Since this app also showcases tenants/roles, it will require you to set them up in the Descope Console.

1. Create two different [Tenants](https://app.descope.com/tenants) called "Teachers" and "Students." A Tenant is just a way of organizing a group of users who share similar characteristics 
2. Next, you'll need to add your [Roles](https://app.descope.com/authorization). Create two different roles called "teacher" and "student" <br>
3. Create a ```.env``` file and inside the backend folder and add your project id, student tenant id, and teacher tenant id in  the file:  
    ```
    PROJECT_ID=<DESCOPE_PROJECT_ID>
    STUDENT_TENANT_ID=<YOUR_STUDENT_TENANT_ID>
    TEACHER_TENANT_ID=<YOUR_STUDENT_TENANT_ID>
    ```
5. Finally, cd into the `backend` folder and setup the flask server using the command: ```make setup``` <br>
This will create a virtual environment and install all dependencies for you.

<br>

## Running the Application 💡

- To run the server, cd into `backend` folder and run the command: ```flask run```
- To run the client, run the command from the root directory: ```npm run client``` 

<br>

## Folder Structure 📁

- Backend: the backend folder contains the flask app and server that will handle session validation 
    - `app.py`: our main flask app (server)
    - `requirements.txt`: a txt file with a list of our dependencies
- Frontend: our react app 

<br>

## What is going on? 🤔

### How do I get started with Descope?
If you don't have a Descope project or unsure what a project ID is, check out the [docs](https://docs.descope.com/build/guides/gettingstarted/)

### What is Flask?
Flask is a light-weight framework written in Python. It's super simple to get your web app started and running using Flask with just a couple of lines. To learn the basics of Flask, check out the official [documentation](https://flask.palletsprojects.com/en/2.3.x/quickstart/)<br>

### What is React? 
React is a JavaScript web framework used to create beautiful user interfaces. To learn the basics of React check out the official [documentation](https://react.dev/learn)


