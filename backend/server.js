import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;

// CREATE
app.post("/tasks", (req, res) => {
  const task = {
    id: id++,
    name: req.body.name,
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

// READ
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// UPDATE (edit name OR toggle completed)
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.map(t =>
    t.id === taskId ? { ...t, ...req.body } : t
  );

  res.json({ message: "Updated" });
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== taskId);

  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});