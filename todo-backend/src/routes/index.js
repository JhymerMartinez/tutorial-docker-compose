const Todo = require('../models/todo');

module.exports = (app) => {

  app.get('/', (rq, res) => {
    res.json({
      status: 'working'
    });
  });

  app.get('/api/todos', async (req, res) => {

    try {
      const todos = await Todo.find({});
      res.json(todos);

    } catch (error) {
      res.status(400)
        .send(error);
    }
  });

  app.post('/api/todos', async (req, res) => {

    try {
      const todo = await Todo.create({
        text: req.body.text,
        done: false
      });
      res.json(todo);

    } catch (error) {
      res.status(400)
        .send(error);
    }

  });

  app.delete('/api/todos/:id', async (req, res) => {

    try {
      const result = await Todo.deleteOne({
        _id: req.params.id
      });
      res.json(result);

    } catch (error) {
      res.status(400)
        .send(error);
    }
  });
};
