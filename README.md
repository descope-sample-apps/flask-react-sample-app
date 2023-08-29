# Flask-React Sample app with Descope Auth

Add Descope's Python SDK to add authentication to a Flask + React.js app. The project will feature multiple pages, protected routes, and logout functionality. 

## ⚙️ Setup

1. Clone the repository:

```
git clone https://github.com/descope-sample-apps/flask-react-sample-app.git
```

2. Install dependencies:

```
npm run setup
```

3.  Client Setup

Create a ```.env``` file in the root directory of the `client` folder and add your Descope [Project ID](https://app.descope.com/settings/project) in the file: ```REACT_APP_PROJECT_ID=YOUR_DESCOPE_PROJECT_ID```

> **NOTE**: If you're running your flask server on a different port than 5000, change the ```"proxy":"http://127.0.0.1:5000/"``` value to wherever your server is hosted. You can edit the proxy value in your client package.json file.  

4. Server Setup

Since this app also showcases roles, it will require you to set them up in the Descope Console.

- Create two different [roles]((https://app.descope.com/authorization)) called "teacher" and "student" <br>
- Create a ```.env``` file in the server folder and add your project id in the file:  
```
PROJECT_ID="YOUR_DESCOPE_PROJECT_ID"
```

## 🔮 Running the Application 

To run the server: 

```
npm run server
```

To run the client: 

```
npm run client
``` 

## 📁 Folder Structure 

- Server: the server folder contains the flask app and server that will handle session validation 
    - `app.py`: our main flask app 
    - `requirements.txt`: a txt file with a list of our dependencies
- Client: our react app 

## ⚠️ Issue Reporting

For any issues or suggestions, feel free to open an issue in the GitHub repository.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




