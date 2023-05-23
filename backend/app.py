import os
from flask import Flask, request
from descope import DescopeClient


app = Flask(__name__) # initialize flask app


print(os.environ.get("PROJECT_ID"))

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

        role = ""
        tenants = jwt_response["tenants"] 
        
        if (len(tenants) > 0): # check if tenant exists
            student_tenant_id = os.environ.get("STUDENT_TENANT_ID")
            teacher_tenant_id = os.environ.get("TEACHER_TENANT_ID")

            if (student_tenant_id in tenants):
                role = tenants[student_tenant_id]["roles"]
            elif (teacher_tenant_id in tenants):
                role = tenants[teacher_tenant_id]["roles"]
        else:
            print("No role found!")

        return { "secretMessage": "You are now a trained Descope user!", "role": role }
    except Exception as error:
        print ("Could not validate user session. Error:")
        print (error)
        return { "status": "❌" }
  
      
if __name__ == '__main__':
    app.run(debug=True)