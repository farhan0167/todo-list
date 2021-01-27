from flask import request
from flask_restx import Resource
from models.todo import TodoModel

class Todo(Resource):

	def post(self):
		data = request.get_json()
		todo = TodoModel(data['task'],data['date'], data['complete'])
		todo.save_to_db()

		return todo.json()


	def put(self):
		pass

class TodoDelete(Resource):
	def delete(self,_id):
		item = TodoModel.find_by_id(_id)

		if item:
			item.delete_from_db()
			return {'message':'Item has been deleted'}
		else: 
			return{'message': 'Item with id does not exist.'}


class TodoList(Resource):


	def get(self):
		return {'todoList': [todo.json() for todo in TodoModel.query.all()]}