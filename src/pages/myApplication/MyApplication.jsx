import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosHook from '../../components/useAxiosHook';
import MyApplicationHero from './MyApplicationHero';
// import axios from 'axios';

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosHook();

  useEffect(()=>{

    axiosSecure.get(`/job-applications?email=${user.email}`)
    .then(res=> setJobs(res.data))
  }, [user.email])
  return (
    <div>
      <MyApplicationHero jobs={jobs}></MyApplicationHero>
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
            jobs.map(job=> <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="logo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {job.company}
                <br />
                <span className="badge badge-ghost badge-sm">{job.jobType}</span>
              </td>
              <td>{job.category}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>)
          }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyApplication;