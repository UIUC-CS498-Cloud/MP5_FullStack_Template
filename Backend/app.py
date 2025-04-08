from flask import Flask, jsonify, request
import os
import pymysql

app = Flask(__name__)

#Endpoint: Health Check
@app.route('/health', methods=['GET'])
def health():
    """
    This endpoint is used by the autograder to confirm that the backend deployment is healthy.
    """
    return jsonify({"status": "healthy"}), 200

#Endpoint: Data Retrieval
@app.route('/data', methods=['GET'])
def get_data():
    """
    This endpoint should eventually provide data from the database.
    The database communication is currently stubbed out.
    You must implement the fetch_data_from_db() function to integrate with your MySQL RDS Instance.
    """
    try:
        data = fetch_data_from_db()
        return jsonify({"data": data}), 200
    except NotImplementedError:
        return jsonify({"error": "Database functionality not implemented."}), 501

def get_db_connection(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME):
    """
    Establish and return a connection to the RDS MySQL database.
    
    Expected variables:
      - DB_HOST
      - DB_USER
      - DB_PASSWORD
      - DB_NAME
    """
    connection = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        db=DB_NAME
    )
    return connection


#Database Function Stub
def fetch_data_from_db():
    """
    Stub for database communication.
    Implement this function to fetch your data from the database.
    """
    # TODO: Implement the database call
    raise NotImplementedError("Database integration function not implemented.")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
