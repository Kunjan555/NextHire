import { useJobs } from "../hooks/useJobs";
function JobCard(){
  const {jobs, loading, error} = useJobs();
  if(loading) return <div>Loading ....</div>
  if(error) return <div>{error} : error </div>
  return(
    <>
    <h1 class="text-3xl font-bold underline text-clifford">
      Hello world!
    </h1>
    {jobs.map(job => (
   
       <li key={job.id}> <strong>{job.title}</strong> – {job.company} ({job.location}) - {job.salary} ({job.type})</li>
        
    ))}
    </>
  )
}

export default JobCard;