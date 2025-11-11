import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, status, due_date: dueDate };

    try {
      const response = await fetch("http://localhost:8082/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) throw new Error("Failed to create task");

      const data = await response.json();
      setMessage(`✅ Task "${data.title}" created successfully!`);
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Status */}
        <select
          className="form-select mb-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        {/* Due Date */}
        <input
          type="date"
          className="form-control mb-3"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button className="btn btn-dark w-100">Add Task</button>
      </form>

      {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
    </div>
  );
};

export default TaskForm;
