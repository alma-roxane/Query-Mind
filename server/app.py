# server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time

app = Flask(__name__)

CORS(app)

@app.route('/generate-response', methods=['POST'])
def generate_response():

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400

        task_type = data.get('taskType')
        prompt = data.get('prompt')

        if not task_type or not prompt:
            return jsonify({"error": "Missing taskType or prompt"}), 400

        print(f"Backend received request: Task='{task_type}', Prompt='{prompt[:70]}...'")

        # --- Placeholder for AI response generation logic ---
        time.sleep(1.5)

        mock_ai_response = f"AI's generated response for your '{task_type}' task based on: '{prompt}'. (This is a mock response from Flask backend.)"
        # --- End Placeholder ---

        return jsonify({"aiResponse": mock_ai_response}), 200

    except Exception as e:
        print(f"An error occurred in backend: {e}")
        return jsonify({"error": str(e), "message": "Internal Server Error"}), 500

if __name__ == '__main__':
    # Get port from environment variable for deployment flexibility, default to 5000
    port = int(os.environ.get('PORT', 5000))
    print(f"Flask backend starting on http://0.0.0.0:{port}")
    app.run(host='0.0.0.0', port=port, debug=True) # This allows the app to be accessible from any IP address, useful for cloud deployments
