import os
from flask import Flask, request
from descope import (
    REFRESH_SESSION_TOKEN_NAME,
    SESSION_TOKEN_NAME,
    AuthException,
    DeliveryMethod,
    DescopeClient,
    AssociatedTenant,
    RoleMapping,
    AttributeMapping,
    LoginOptions
)


app = Flask(__name__) # initialize flask app


try:
    descope_client = DescopeClient(project_id=os.environ.get("PROJECT_ID")) # initialize the descope client
except Exception as error:
    print ("failed to initialize. Error:")
    print (error)
  
  
@app.route('/validate_session', methods=['GET']) 
def validate_session():
    auth_request = request.headers['Authorization']
    session_token = auth_request.replace('Bearer ', '') # get the session token

    try:
        jwt_response = descope_client.validate_session(session_token=session_token)
        print ("Successfully validated user session:")
        print (jwt_response)
        return { "secretMessage": "You are now a trained Descope user!" }
    except Exception as error:
        print ("Could not validate user session. Error:")
        print (error)
        return { "status": "❌" }
  
      
if __name__ == '__main__':
    app.run(debug=True)