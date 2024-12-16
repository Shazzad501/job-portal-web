import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs"; // React Icons for job icon
import { Link } from "react-router-dom";

const PostedHero = () => {
  return (
    <section className="bg-blue-50 py-12 lg:py-20 px-6 lg:px-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row">
        {/* Left Content */}
        <div className="lg:w-3/5 mb-8 lg:mb-0">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Manage Your <span className="text-blue-600">Posted Jobs</span>
          </h1>
          {/* Description */}
          <p className="text-gray-600 mt-4 text-base lg:text-lg">
            Review, edit, or add new job types with ease. Stay organized and connect with top candidates effortlessly.
          </p>
          {/* Call-To-Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/add-job" className="btn btn-primary px-6 py-3 rounded-lg shadow">
              Add New Job
            </Link>
            <Link to='/add-job' className="btn btn-outline px-6 py-3 rounded-lg">
              View All Jobs
            </Link>
          </div>
        </div>

        {/* Right Section - Decorative Job Icon */}
        <div className="lg:w-2/5 flex justify-center">
          <div className="w-40 h-40 lg:w-52 lg:h-52 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <BsFillBriefcaseFill className="text-white text-6xl lg:text-7xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostedHero;
