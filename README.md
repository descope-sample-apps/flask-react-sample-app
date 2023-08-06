# Flask + Descope Authentication (and a little bit of React) 

Using the Python framework Flask + React.js + Descope Python SDK to add and manage basic authentication and roles. The project will feature multiple pages, protected routes, and logout functionality. 

<br>

## Installing Dependencies 🛠️

In the root directory of the project, run the following to install all dependencies: ```npm run setup```

### Client Setup

1. Create a ```.env``` file in the root directory of the `client` folder and add your Descope [Project ID](https://app.descope.com/settings/project) in the file: ```REACT_APP_DESCOPE_PROJECT_ID=DESCOPE_PROJECT_ID```

> **NOTE**: If you're running your flask server on a different port than 5000, change the ```"proxy":"http://127.0.0.1:5000/"``` value to wherever your server is hosted. You can edit the proxy value in your client package.json file. 

<br> 

### Server Setup

Since this app also showcases roles, it will require you to set them up in the Descope Console.

1. Create two different [roles]((https://app.descope.com/authorization)) called "teacher" and "student" <br>
2. Create a ```.env``` file in the server folder and add your project id in the file:  
    ```
    DESCOPE_PROJECT_ID=<DESCOPE_PROJECT_ID>
    ```

<br>

## Running the Application 💡

Have at least 2 different terminals open, one command for each terminal. Run the following commands in the project root directory.
- To run the server: ```npm run server```
- To run the client: ```npm run client``` 

<br>


## Testing 🧪
#### 1. Add a `.env` file in your root directory with the following:
```
REACT_APP_DESCOPE_PROJECT_ID="Your_Descope_Project_ID" // Required
REACT_APP_DESCOPE_MANAGEMENT_KEY="Your_Descope_Management_Key" // Required
```
_You can get your project-id [here](https://app.descope.com/settings/project)_.
_You can get your management-key [here](https://app.descope.com/settings/company/managementkeys)_.

#### 2. Open the Cypress App
Make sure you have the application (client and server) running at `https://localhost:3000` per the instructions above. Then, navigate to the root directory of the Flask React Sample App project (at the same level as client and server) and run the following to open the Cypress app:
```
npx cypress open
```
You'll need to select "E2E Testing" and your preferred browser for testing. For more info, check out the [Cypress Docs](https://docs.cypress.io/guides/getting-started/opening-the-app).

#### 3. Run E2E Tests
Now, simply click the "spec" you'd like to run and the test will start automatically.

<br/>

## Folder Structure 📁

- Server: the server folder contains the flask app and server that will handle session validation 
    - `app.py`: our main flask app 
    - `requirements.txt`: a txt file with a list of our dependencies
- Client: our react app 

<br>

## What is going on? 🤔

### How do I get started with Descope?
If you don't have a Descope project or unsure what a project ID is, check out the [docs](https://docs.descope.com/build/guides/gettingstarted/)

### What is Flask?
Flask is a light-weight framework written in Python. It's super simple to get your web app started and running using Flask with just a couple of lines. To learn the basics of Flask, check out the official [documentation](https://flask.palletsprojects.com/en/2.3.x/quickstart/)<br>

### What is React? 
React is a JavaScript web framework used to create beautiful user interfaces. To learn the basics of React check out the official [documentation](https://react.dev/learn)


