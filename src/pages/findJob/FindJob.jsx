import React, { useEffect, useState } from "react";
import HotJobCart from "../home/HotJobCart";

const FindJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  // Fetch all jobs
  useEffect(() => {
    fetch("https://job-server-nu.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const results = jobs.filter((job) =>
      job.title.toLowerCase().includes(query)
    );
    setFilteredJobs(results);
  };

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-3 items-center justify-center py-5">
        <h2 className="text-3xl font-bold text-center">Find a job by job title.</h2>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSearch}>
            <div className="flex">
              <div>
              <input
                type="search"
                name="search"
                placeholder="Enter title name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-2 border-blue-900 rounded-md rounded-r-none border-r-0 px-2 py-2.5 focus:border-2 focus:border-blue-900"
              />
              </div>
              <div>
              <input
                type="submit"
                value="Search"
                className="btn border-2 hover:border-blue-900 border-blue-900 rounded-l-none hover:bg-blue-900 bg-blue-900 text-white px-4 py-2"
              />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <HotJobCart key={job._id} job={job} />)
        ) : (
          <p className="col-span-full text-center text-xl">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default FindJob;
