import logo from './logo.svg';
import './App.css';
import PostJobForm from './PostJobsForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';

function App() {
  return (
  <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  <PostJobForm />
  </>
  );
}

export default App;
