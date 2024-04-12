const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para analisar corpos de requisição JSON
app.use(bodyParser.json());

// Simulação de um banco de dados de tarefas
let tasks = [];

// Rota para recuperar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para recuperar uma tarefa específica por meio de seu identificador
app.get('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa existente com base em seu identificador
app.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const updatedTask = req.body;
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
});

// Rota para remover uma tarefa da lista com base em seu identificador
app.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
