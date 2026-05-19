const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// Home route
app.get('/', (req, res) => {
    res.send('Task API Running');
});

// Health endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Create task
app.post('/tasks', (req, res) => {

    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status || 'Pending'
    };

    tasks.push(task);

    res.status(201).json(task);
});

// Update task
app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).send('Task not found');
    }

    task.title = req.body.title || task.title;
    task.status = req.body.status || task.status;

    res.json(task);
});

// Delete task
app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.send('Task deleted');
});

module.exports = app;

// Start server
if (require.main === module) {

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });

}