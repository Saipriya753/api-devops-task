const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Complete DevOps Assignment",
    status: "In Progress",
    priority: "High"
  }
];

app.get("/", (req, res) => {
    res.send("Task Management API Running");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status || "Pending",
        priority: req.body.priority || "Medium"
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {

    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    task.title = req.body.title || task.title;
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;

    res.json(task);
});

app.delete("/tasks/:id", (req, res) => {

    tasks = tasks.filter(t => t.id != req.params.id);

    res.json({ message: "Task deleted successfully" });
});

const PORT = 3000;

if (process.env.NODE_ENV !== "test") {

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}

module.exports = app;