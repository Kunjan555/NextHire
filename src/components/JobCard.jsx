
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase"; // adjust path if needed

const db = getFirestore(app);

function JobCard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const querySnapshot = await getDocs(collection(db, "Jobs"));
      const jobsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        
      }));
      console.log(jobsArray);
      setJobs(jobsArray);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> – {job.company} ({job.location}) - {job.salary} ({job.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobCard;
