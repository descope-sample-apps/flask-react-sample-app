# Flask + Descope Authentication (and a little bit of React) 

Using the Python framework Flask + React.js + Descope Python SDK to add authentication and manage basic authentication

<br>

## Installing Dependencies 🛠️

### Frontend Setup ⚙️
- cd into frontend/descope-flask: ```npm install```
    - In ```package.json``` add the following to allow react to access our flask server (or whatever url your flask server is locally hosted): ```"proxy":"http://127.0.0.1:5000/"```
    - Create a ```.env``` file and the root directory of the descope-flask folder and add your project id in the file: ```REACT_APP_PROJECT_ID=YOUR_PROJECT_ID```
        - If you don't have a descope project or don't know what a project ID is check out the [docs](https://docs.descope.com/build/guides/gettingstarted/)

### Backend Setup ⚙️
- cd into backend: ```pip3 install -r requirements.txt```
    - You can choose to create a virtual environment before you install all the dependencies:
        - ```python3 -m venv ENV_NAME``` -> ```source ENV_NAME/bin/activate```
    - Create a ```.env``` file and inside the backend folder and add your project id in the file:  ```PROJECT_ID=YOUR_PROJECT_ID```
        - If you don't have a descope project or don't know what a project ID is check out the [docs](https://docs.descope.com/build/guides/gettingstarted/)


## Running the Application 💡

- cd into backend: ```flask run```
- cd into frontend/descope-flask: ```npm start```


<br>

## Folder Structure 📁

- backend: the backend folder contains the flask app and server that will handle session validation 
    - app.py: our main flask app (server)
- frontend: the frontend folder contains our react app which is the client 
    - descope-flask: this is our react app 

<br>

## What is going on? 🤔

### What is Flask?
Great question! Flask is a light-weight framrwork written in Python. It's super simple to get your web app started and running using Flask with just a couple of lines. <br>

Here is a basic example! 

```
# app.py
from flask import Flask # <-- import Flask

app = Flask(__name__) # <-- initializes flask app


@app.route('/hello', methods=['GET']) 
def hello_world():
    return {"hello: "Hello"}
  
      
if __name__ == '__main__':
    app.run(debug=True)
```

