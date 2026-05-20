const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
    { id: 1, title: "Complete DevOps Assignment" }
];

app.get("/", (req, res) => {
    res.send("Task Management API Running");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {

    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    task.title = req.body.title;

    res.json(task);
});

app.delete("/tasks/:id", (req, res) => {

    tasks = tasks.filter(t => t.id != req.params.id);

    res.send("Task deleted");
});

const PORT = 3000;

if (process.env.NODE_ENV !== "test") {

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}

module.exports = app;