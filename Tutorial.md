# Flask + Descope Authentication

Using the python framework Flask + Descope python SDK + React.js to add authentication and manage basic login


### Descope

- Create a new project in Descope 
- Choose Consumer App
- I chose Social Login + One-time Password & Magic-link as secondary
- You will be then given multiple options. I chose the first one. Now click next to generate your authentication! 


### 1. Setup (New)

- create 2 folders name backend & frontend 
- cd into frontend and install dependencies
    - react.js: ```npx create-react-app descope-flask```
    - react-sdk: ```npm i --save @descope/react-sdk```
- cd in backend and create a virtual environment: ```python3 -m venv env``` 
    - install flask: ```pip3 install flask```
    - install descope python sdk: ```pip3 install descope```
    - install python-dotenv: ```pip3 install python-dotenv```
- In package.json add the following to allow react to access our flask server: ```"proxy":"http://127.0.0.1:5000/"```


### React Setup

- App.js: Let's wrap our app with the AuthProvider and our projectID from our descope project that we created (https://app.descope.com/gettingStarted)
- Create components folder and Login.js component (https://docs.descope.com/build/guides/gettingstarted/#install-sdk)

