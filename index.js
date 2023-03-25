const express = require('express');
const multer = require('multer');
const uuidv4 = require('uuid/v4');


const app = express();
app.use(multer().none());
app.use(express.static('web'));

const todoList = [];

app.get('/api/v1/list', (req, res) => {
  res.json(todoList);
});

app.get('/api/v1/list', (req, res) => {
  const todoData = req.body;
  const todoTitle = todoData.title;

  const id = uuidv4()
  const todoItem = {
    id,
    title: todoTitle,
    done: false
  };

  todoList.push(todoItem);
  console.log('Add: ' + JSON.stringify(todoItem));
  // const todoList = [
  //   { title: 'JavaScriptを勉強する', done: true},
  //   { title: 'Node.jsを勉強する', done: false},
  //   { title: 'Web APIを作る', done: false}
  // ];
  res.json(todoItem);
});


app.listen(3000, () => console.log('Listening on port 3000'));

