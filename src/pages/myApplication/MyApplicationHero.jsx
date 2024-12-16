import React from 'react';

const MyApplicationHero = ({jobs}) => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-7xl">
        {/* Left Content */}
        <div className=" flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Discover the Right <br />
            <span className="text-blue-600">Job Type for You</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base lg:text-lg">
            Apply for jobs that match your skills, preferences, and career goals.
            Explore various categories to find the perfect fit.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6">
            <button className="btn btn-primary font-bold px-6 py-2 rounded-lg shadow-md">
            Applicable job: {jobs.length}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MyApplicationHero;