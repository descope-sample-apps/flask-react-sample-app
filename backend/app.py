from flask import Flask


app = Flask(__name__) # initialize flask app
  
  
# Route for seeing a data
@app.route('/login')
def home():
    return {
        "user": "test"
    }
  
      
if __name__ == '__main__':
    app.run(debug=True)