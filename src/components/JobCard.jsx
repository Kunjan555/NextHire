import React from 'react'
import data from '../db.json'
export default function JobCard() {
  return (
    <div>
      <h1>Job Card</h1>
      {data.jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>Type: {job.type}</p>
          <p>Experience Level: {job.experienceLevel}</p>
          <p>Posted Date: {job.postedDate}</p>
          <p>Skills: {job.skills.join(", ")}</p>
          <p>Description: {job.description}</p>
        </div>
      ))}
    </div>
  )
}
