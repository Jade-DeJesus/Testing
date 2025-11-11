import React, { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = () => {
    setLoading(true);
    fetch("http://localhost:8082/api/tasks")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setError("");
      })
      .catch(() => setError("Could not load tasks. Please try again."))
      .finally(() => setLoading(false));
  };

  useEffect(fetchTasks, []);

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      const res = await fetch(`http://localhost:8082/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch {
      alert("Failed to delete task");
    }
  };

  const getStatusBadge = (status) => {
    const normalized = status?.toLowerCase().replace("_", " ").trim();
    switch (normalized) {
      case "completed":
        return "bg-success";
      case "in progress":
        return "bg-warning text-dark";
      default:
        return "bg-danger";
    }
  };

  if (loading) return <p className="text-center mt-5">Loading tasks...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-3">Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(({ id, title, description, status, due_date }) => (
          <div key={id} className="card mb-3 border-0 shadow-sm rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="fw-semibold">{title}</h5>
                  <p className="text-muted mb-2">{description}</p>

                  <div className="d-flex align-items-center gap-2 mb-1">
                    <strong>Status:</strong>
                    <span
                      className={`badge rounded-pill ${getStatusBadge(status)}`}
                    >
                      {status}
                    </span>
                  </div>

                  <div>
                    <strong>Due Date:</strong>{" "}
                    <span>{due_date || "No due date set"}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => window.location.href = `/edit/${id}`}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteTask(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
