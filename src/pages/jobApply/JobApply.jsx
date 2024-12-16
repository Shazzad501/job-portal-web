import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const JobApply = () => {
  const {id} = useParams();
  console.log(id)
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const submitJobApplication = (e)=>{
    e.preventDefault();
    const linkdIn = e.target.linkdin.value;
    const gitHub = e.target.github.value;
    const resume = e.target.resume.value;
    
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkdIn,
      gitHub,
      resume
    }

    // post data into the db
    fetch('https://job-server-nu.vercel.app/job-applications', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(jobApplication)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        navigate('/my-applications')
        toast.success("Application success!")
      }
    })
  }
  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <h2 className='font-bold text-xl text-center'>Apply job and good luck!</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={submitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkdIn Url</span>
            </label>
            <input type="url" name='linkdin' placeholder="LinkdIn Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Url</span>
            </label>
            <input type="url" name='github' placeholder="Github Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume Url</span>
            </label>
            <input type="url" name='resume' placeholder="Resume Url" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Apply" className='btn btn-primary'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;