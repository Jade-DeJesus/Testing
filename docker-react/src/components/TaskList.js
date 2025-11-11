import React, { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => console.error("Failed to fetch tasks"));
  }, []);

  // 🔧 Normalize status text and handle all variations
  const getStatusBadge = (status) => {
    const normalized = status.toLowerCase().replace("_", " ").trim();

    switch (normalized) {
      case "completed":
        return "bg-success"; // green
      case "in progress":
        return "bg-warning text-dark"; // yellow
      case "pending":
      default:
        return "bg-danger"; // red
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-3">Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(({ id, title, description, status, due_date }) => (
          <div key={id} className="card mb-3 border-0 shadow-sm rounded-3">
            <div className="card-body">
              <h5 className="fw-semibold">{title}</h5>
              <p className="text-muted mb-2">{description}</p>

              <div className="d-flex align-items-center gap-2 mb-1">
                <strong>Status:</strong>
                <span className={`badge rounded-pill ${getStatusBadge(status)}`}>
                  {status}
                </span>
              </div>

              <div>
                <strong>Due Date:</strong>{" "}
                <span>{due_date ? due_date : "No due date set"}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
