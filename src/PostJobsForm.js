// Example usage in React
import { useState } from "react";
import { postJob } from "./api";

function PostJobForm() {
  const [job, setJob] = useState({ title: "", company: "", location: "" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = await postJob(job);
    console.log("Job added:", newJob);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Job Title" />
      <input name="company" onChange={handleChange} placeholder="Company" />
      <input name="location" onChange={handleChange} placeholder="Location" />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default PostJobForm;
