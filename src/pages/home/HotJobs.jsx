import React, { useEffect, useState } from 'react';
import HotJobCart from './HotJobCart';

const HotJobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    fetch("https://job-server-nu.vercel.app/jobs")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setJobs(data);
    })
  }, [])
  return (
    <div className='pb-10'>
      <div className='flex flex-col gap-3 items-center justify-center py-5'>
        <h2 className='text-3xl font-bold text-center'>Job of the day</h2>
        <p className='font-semibold text-base'>Search and connect with the right candidates faster.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10'>
        {
          jobs.slice(0,8).map(job => <HotJobCart key={job._id} job={job}></HotJobCart>)
        }
      </div>
    </div>
  );
};

export default HotJobs;