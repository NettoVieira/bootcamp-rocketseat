const express = require('express');

const server = express();

const users = ['Diego', 'Robson', 'Victor'];

server.use(express.json());

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post('/users', (req, res) =>{
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name }  = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', (req, res) =>{
  const { index } = req.params;

  users.splice(index, 1);

  return res.json({ message: "Excluido com sucesso" });
})
server.listen(3003);