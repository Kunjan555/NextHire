import { useJobs } from "../hooks/useJobs";
import { MapPin, Briefcase, DollarSign, Clock, Bookmark } from 'lucide-react';
function JobCard(){
  const {jobs, loading, error} = useJobs();
  if(loading) return <div>Loading ....</div>
  if(error) return <div>{error} : error </div>
  return(
    <>
     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Jobs</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
           {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{job.experienceLevel}</span>
                  <span className="mx-2">•</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {job.workMode.map((mode, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {mode}
                    </span>
                  ))}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default JobCard;