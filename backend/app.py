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
import os


app = Flask(__name__) # initialize flask app


try:
    # You can configure the baseURL by setting the env variable Ex: export DESCOPE_BASE_URI="https://auth.company.com  - this is useful when you utilize CNAME within your Descope project."
    descope_client = DescopeClient(project_id=os.environ.get("PROJECT_ID"))
except Exception as error:
    # handle the error
    print ("failed to initialize. Error:")
    print (error)
  
  
@app.route('/validate_session', methods=['GET'])
def validate_session():
    auth_request = request.headers['Authorization']
    session_token = auth_request.replace('Bearer ', '')

    try:
        jwt_response = descope_client.validate_session(session_token=session_token)
        print ("Successfully validated user session:")
        print (jwt_response)
    except Exception as error:
        print ("Could not validate user session. Error:")
        print (error)

    return { "status": "good" }
  
      
if __name__ == '__main__':
    app.run(debug=True)