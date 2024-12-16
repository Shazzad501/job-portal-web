import React from 'react';
import { FaArrowLeft, FaBookBookmark } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData()
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job || {};
  return (
    <div className="card my-10 w-full md:w-10/12 bg-white shadow-lg border border-gray-200 rounded-lg mx-auto p-6">
    {/* Company Logo and Header */}
    <div className="flex items-center mb-4">
      <img
        src={company_logo}
        alt={`${company} logo`}
        className="w-16 h-16 rounded-full border border-gray-300"
      />
      <div className="ml-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{company} - {location}</p>
      </div>
    </div>

    {/* Job Info */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
      <p>
        <span className="font-medium">Job Type:</span> {jobType}
      </p>
      <p>
        <span className="font-medium">Category:</span> {category}
      </p>
      <p>
        <span className="font-medium">Deadline:</span> {applicationDeadline}
      </p>
      <p>
        <span className="font-medium">Salary:</span> {salaryRange.currency.toUpperCase()} {salaryRange.min} - {salaryRange.max} Tk
      </p>
    </div>

    {/* Description */}
    <p className="text-gray-700 mb-4">
      <span className="font-medium">Description:</span> {description}
    </p>

    {/* Responsibilities */}
    <div className="mb-4">
      <h3 className="font-medium text-gray-800">Responsibilities:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Requirements */}
    <div className="mb-4">
      <h3 className="font-medium text-gray-800">Requirements:</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="badge badge-outline text-sm py-1 px-3 border-gray-300 text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Footer Section */}
    <div className="border-t border-gray-200 pt-4 mt-4">
      <p className="text-gray-600 text-sm">
        <span className="font-medium">HR Name:</span> {hr_name}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-medium">Email:</span>{' '}
        <a href={`mailto:${hr_email}`} className="text-blue-600 underline">
          {hr_email}
        </a>
      </p>
     <div className='flex gap-2 justify-end'>
     <Link to={`/`} className="btn text-white bg-blue-600 hover:bg-blue-700 mt-4"><FaArrowLeft/>Go back</Link>
     <Link to={`/jobApply/${_id}`} className="btn text-white bg-green-600 hover:bg-green-700 mt-4"><FaBookBookmark/>Apply Now</Link>
     </div>
    </div>
  </div>
  );
};

export default JobDetails;