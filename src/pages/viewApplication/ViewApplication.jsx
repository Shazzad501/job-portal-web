import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
  const applications = useLoaderData()

  const handleStatusUpdate=(e, id)=>{
    const data={
      status: e.target.value,
    }
    fetch(`https://job-server-nu.vercel.app/job-applications/${id}`, {
      method:'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success("Status has been updated")
      }
    })
  }
  return (
    <div className='min-h-screen'>
      <h2 className='font-bold text-2xl text-center mb-5'>Application for this job:- {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
             <th>Resume</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              applications.map((application, idx)=><tr key={application._id}>
              <th>{idx + 1}</th>
              <td>{application.applicant_email}</td>
              <td>{application.resume}</td>
              <td>
                <select
                onChange={(e)=>handleStatusUpdate(e, application._id)}
                defaultValue={application.status || 'Change status'} 
                className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled>Change status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;