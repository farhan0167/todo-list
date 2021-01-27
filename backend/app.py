from flask import Flask
from flask_restx import Api
from db import db
from flask_cors import CORS
from resources.todo import TodoList, Todo, TodoDelete

app = Flask(__name__)
CORS(app)
db.init_app(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
app.secret_key = 'vibing'
api = Api(app)

@app.before_first_request
def create_tables():
	db.create_all()

api.add_resource(Todo, '/todo')
api.add_resource(TodoList, '/todolist')
api.add_resource(TodoDelete, '/todo/<int:_id>')




if __name__ == '__main__':
    app.run(debug=True)