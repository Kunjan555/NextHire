// src/api.js
const API_URL = "http://localhost:5000";

export const postJob = async (jobData) => {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobData),
  });
  return res.json();
};
