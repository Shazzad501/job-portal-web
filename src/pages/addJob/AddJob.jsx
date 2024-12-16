import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import HeroSection from "./AddJobHero";

const AddJob = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    category: "",
    applicationDeadline: "",
    salaryRange: { min: "", max: "", currency: "bdt" },
    description: "",
    company: "",
    requirements: ["", "", "", ""],
    responsibilities: ["", "", ""],
    status: "active",
    hr_email: user.email || "",
    hr_name: "",
    company_logo: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedArray = [...prevData[field]];
      updatedArray[index] = value;
      return { ...prevData, [field]: updatedArray };
    });
  };

  const handleSalaryChange = (e, key) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      salaryRange: { ...prevData.salaryRange, [key]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // insert data into the db
    fetch('https://job-server-nu.vercel.app/jobs', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success("Job added success!!")
        navigate('/my-posted-job')
        e.target.reset()
      }
    })
  };

  return (
    <div>
      <HeroSection></HeroSection>
    <div className="p-6 mt-5 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <form id="add-job" className="space-y-4" onSubmit={handleSubmit}>

        {/* Title and Location */}
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Job Type, Category, and Company */}
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/3">
            <label className="label font-semibold">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="">Select Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
          <div className="form-control md:w-1/3">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/3">
            <label className="label font-semibold">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className="form-control">
          <label className="label font-semibold">Salary Range</label>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="number"
              placeholder="Min"
              value={formData.salaryRange.min}
              onChange={(e) => handleSalaryChange(e, "min")}
              className="input input-bordered w-full md:w-1/3"
            />
            <input
              type="number"
              placeholder="Max"
              value={formData.salaryRange.max}
              onChange={(e) => handleSalaryChange(e, "max")}
              className="input input-bordered w-full md:w-1/3"
            />
            <select
              value={formData.salaryRange.currency}
              onChange={(e) => handleSalaryChange(e, "currency")}
              className="select select-bordered w-full md:w-1/3"
            >
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label font-semibold">Requirements</label>
          {formData.requirements.map((req, index) => (
            <input
              key={index}
              type="text"
              value={req}
              onChange={(e) => handleArrayChange(e, index, "requirements")}
              className="input input-bordered w-full mb-2"
            />
          ))}
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label font-semibold">Responsibilities</label>
          {formData.responsibilities.map((res, index) => (
            <input
              key={index}
              type="text"
              value={res}
              onChange={(e) => handleArrayChange(e, index, "responsibilities")}
              className="input input-bordered w-full mb-2"
            />
          ))}
        </div>

        {/* HR Details */}
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">HR Name</label>
            <input
              type="text"
              name="hr_name"
              value={formData.hr_name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">HR Email</label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              value={formData.hr_email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Company Logo and Deadline */}
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">Company Logo URL</label>
            <input
              type="url"
              name="company_logo"
              value={formData.company_logo}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label font-semibold">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddJob;
