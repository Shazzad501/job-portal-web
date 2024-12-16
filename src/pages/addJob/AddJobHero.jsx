import React from "react";
import hero2 from '../../assets/hero-2.jpg'

const AddJobHero = () => {
  return (
    <section className="relative bg-blue-50 py-12 lg:py-16 px-6 lg:px-24">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Post a New Job <br />
            <span className="text-blue-600">Find the Right Talent</span>
          </h1>
          <p className="text-gray-600 mt-4 text-base lg:text-lg">
            Easily add a new job listing and connect with top candidates.
            Streamline your hiring process with our user-friendly platform.
          </p>
          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#add-job"
              className="btn btn-primary px-8 py-3 text-white rounded-lg shadow-md"
            >
              Add New Job
            </a>
          </div>
        </div>

        {/* Right Illustration/Image */}
        <div className="lg:w-1/2">
          <img
            src={hero2}
            alt="Add Job Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AddJobHero;
