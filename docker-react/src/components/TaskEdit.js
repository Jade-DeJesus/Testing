import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskEdit = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8082/api/tasks/${taskId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load task");
        return res.json();
      })
      .then((data) => {
        setTitle(data.title || "");
        setDescription(data.description || "");
        setStatus(data.status || "pending");
        setDueDate(data.due_date || "");
      })
      .catch((err) => setMessage(err.message))
      .finally(() => setLoading(false));
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, status, due_date: dueDate };

    try {
      const response = await fetch(`http://localhost:8082/api/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Failed to update task");

      setMessage("Task updated successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading task...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4 fw-bold" style={{ color: "#282c34" }}>
            Edit Task
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary w-50 me-2"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn w-50 fw-semibold"
                style={{
                  backgroundColor: "white",
                  color: "#282c34",
                  border: "1px solid #282c34",
                }}
              >
                Update Task
              </button>
            </div>
          </form>

          {message && (
            <div className="alert alert-info text-center mt-3">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskEdit;
