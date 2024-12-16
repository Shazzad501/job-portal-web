import React from "react";
import group from "../../assets/smile-client.jpg"
import { Link } from "react-router-dom";

const JobSection = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row items-center justify-between bg-white py-12 lg:py-16">
      {/* Left Side - Image */}
      <div className="rounded-lg overflow-hidden shadow-lg lg:w-1/2">
          <img
            src={group}
            alt="Group of People"
            className="object-cover w-full h-full"
          />
        </div>

      {/* Right Side - Text Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-gray-500 text-lg font-semibold mb-2">Millions Of Jobs.</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find The One That’s{" "}
          <span className="text-blue-600">Right</span> For You
        </h1>
        <p className="text-gray-600 text-base mb-6">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 600,000 companies worldwide.
          The right job is out there.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to='/find-job' className="btn btn-primary px-6 py-3">Search Jobs</Link>
          <button className="btn btn-ghost px-6 py-3">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
