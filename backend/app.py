import os
from flask import Flask, request, make_response, jsonify
from descope import DescopeClient
from functools import wraps


app = Flask(__name__) # initialize flask app


try:
    descope_client = DescopeClient(project_id=os.environ.get("PROJECT_ID")) # initialize the descope client
except Exception as error:
    print ("failed to initialize. Error:")
    print (error)


def token_required(f): # auth decorator
    @wraps(f)
    def decorator(*args, **kwargs):
        session_token = None

        if 'Authorization' in request.headers: # check if token in request
            auth_request = request.headers['Authorization']
            session_token = auth_request.replace('Bearer ', '')
        if not session_token: # throw error
            return make_response(jsonify({"error": "❌ invalid session token!"}), 401)

        try: # validate token
            jwt_response = descope_client.validate_session(session_token=session_token)
        except:
            return make_response(jsonify({"error": "❌ invalid session token!"}), 401)

        return f(jwt_response, *args, **kwargs)

    return decorator


def find_role(data):
    if ("roles" in data):
        return data["roles"]
  

@app.route('/get_roles', methods=['GET']) 
@token_required
def get_roles(jwt_response):
    role = []
    tenants = jwt_response["tenants"] 
    
    if (len(tenants) > 0): # check if tenant exists
        student_tenant_id = os.environ.get("STUDENT_TENANT_ID")
        teacher_tenant_id = os.environ.get("TEACHER_TENANT_ID")
        
        if (student_tenant_id in tenants):
            role = find_role(tenants[student_tenant_id])
        elif (teacher_tenant_id in tenants):
            role = find_role(tenants[teacher_tenant_id])

    return { "secretMessage": "You are now a trained Descope user!", "role": role}
  

@app.route('/get_role_data', methods=['GET']) 
@token_required
def get_student(jwt_response):
    valid_student_role = descope_client.validate_tenant_roles(
        jwt_response, os.environ.get("STUDENT_TENANT_ID"), ["student"]
    )
    valid_teacher_role = descope_client.validate_tenant_roles(
        jwt_response, os.environ.get("TEACHER_TENANT_ID"), ["teacher"]
    )

    return {"valid_teacher": valid_teacher_role, "valid_student": valid_student_role}


if __name__ == '__main__':
    app.run(debug=True)