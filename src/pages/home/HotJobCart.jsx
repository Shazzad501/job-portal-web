import React from 'react';
import { FaBagShopping, FaClock, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobCart = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    company,
    company_logo,
    salaryRange,
    requirements,
    postedAt,
  } = job || {};

  return (
      <div className="card bg-white shadow-md rounded-lg border border-gray-200 p-4">
        <div className="flex items-center mb-4">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{company}</h3>
            <p className="text-gray-500 text-sm flex gap-1 items-center"><span className='text-lg font-bold text-black'><FaLocationDot/></span> <span>{location}</span></p>
          </div>
        </div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <div className="flex items-center text-gray-500 text-sm mb-4">
        <span className="mx-2"><FaBagShopping/></span>
          <span className="flex items-center">
            {jobType}
          </span>
          <span className="mx-2"><FaClock/></span>
          <span>
            1 days ago
          </span>
        </div>
        <p className="text-gray-700 mb-4 text-sm line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline text-sm py-1 px-3 border-gray-300 text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">
            {salaryRange.currency.toUpperCase()} {salaryRange.min} - {salaryRange.max} Tk
          </p>
          <Link to={`/jobs/${_id}`} className="btn bg-blue-900 hover:bg-blue-900 btn-primary btn-sm">Apply Now</Link>
        </div>
      </div>
  );
};

export default HotJobCart;
