import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import HeroSection from './PostedHero';

const MyPostedJob = () => {
  const {user} = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([])

  useEffect(()=>{
    fetch(`https://job-server-nu.vercel.app/jobs/?email=${user.email}`)
    .then(res=>res.json())
    .then(data=> setPostedJobs(data))
  }, [user.email])
  return (
    <div>
      <HeroSection></HeroSection>
    <div className='mt-5'>
      <h2 className='font-bold text-base'>My posted Job {postedJobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Job Category</th>
              <th>Application Count</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {
              postedJobs.map((job, index)=><tr key={job._id}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.category}</td>
              <td>{job.application_count}</td>
              <td><Link to={`/view-application/${job._id}`} className="btn btn-sm">View Application</Link></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyPostedJob;