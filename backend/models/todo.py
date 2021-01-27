from db import db

class TodoModel(db.Model):
	__tablename__ = 'todo'

	id = db.Column(db.Integer, primary_key=True)
	task = db.Column(db.String(200))
	date = db.Column(db.String(10))
	complete = db.Column(db.Boolean, default = False)


	def __init__(self, task, date, complete):
		self.task = task
		self.date = date
		self.complete = complete

	def json(self):
		return {'id': self.id, 'task': self.task, 'date': self.date, 'complete': self.complete}

	@classmethod
	def find_by_id(cls, _id):
		return cls.query.filter_by(id=_id).first()

	@classmethod
	def select_all_id(cls, _id):
		return cls.query.filter_by(id=_id).all()


	def save_to_db(self):
		db.session.add(self)
		db.session.commit()

	def delete_from_db(self):
		db.session.delete(self)
		db.session.commit()




