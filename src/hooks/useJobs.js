import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase";
const db = getFirestore(app);
export function useJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "Jobs"));
                const jobsArray = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log(jobsArray);
                setJobs(jobsArray);
                setError(null);
            }
            catch (err) {
                console.error("Error fetching jobs:", err);
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);
    return { jobs, loading, error }
}