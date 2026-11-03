from flask import Flask, request, jsonify
from google import genai
import os

base_path = os.path.dirname(os.path.abspath(__file__))
client_path = os.path.join(base_path, "client")

client = genai.Client(api_key="")
chat = client.chats.create(model="gemini-3.5-flash")

app = Flask(__name__, static_folder=client_path, static_url_path="")

@app.post("/chat")
def chat_hanlder():
    request_user = request.get_json()
    message_user = request_user.get("message", "")

    message_from_gemini = chat.send_message(message_user)

    return jsonify({
        "response": message_from_gemini.text
    }, 202)


if __name__ == "__main__":
    app.run(port=2002)
