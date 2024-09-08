import React, { useState } from "react";
import axios from "axios";

const AddCareer = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    deadline: "",
    vacancy: "",
    experience: "",
    responsibilities: "",
    status: "",
    workplace: "",
    workingTime: "",
    edu: "",
    salary: "",
    Benifits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/careers", formData); // API endpoint for adding careers
      console.log("Career added successfully:", response.data);
    } catch (error) {
      console.error("Error adding career:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add Career</h1>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-lg font-medium text-gray-700 mb-2">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job title"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job description"
            rows="4"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-lg font-medium text-gray-700 mb-2">Application Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            required
          />
        </div>

        {/* Vacancy */}
        <div className="mb-4">
          <label htmlFor="vacancy" className="block text-lg font-medium text-gray-700 mb-2">Vacancy</label>
          <input
            type="number"
            id="vacancy"
            name="vacancy"
            value={formData.vacancy}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter number of vacancies"
            required
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label htmlFor="experience" className="block text-lg font-medium text-gray-700 mb-2">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter required experience"
            required
          />
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <label htmlFor="responsibilities" className="block text-lg font-medium text-gray-700 mb-2">Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job responsibilities"
            rows="4"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-lg font-medium text-gray-700 mb-2">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job status (e.g., Full-Time)"
            required
          />
        </div>

        {/* Workplace */}
        <div className="mb-4">
          <label htmlFor="workplace" className="block text-lg font-medium text-gray-700 mb-2">Workplace</label>
          <input
            type="text"
            id="workplace"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter workplace (e.g., Office, Remote)"
            required
          />
        </div>

        {/* Working Time */}
        <div className="mb-4">
          <label htmlFor="workingTime" className="block text-lg font-medium text-gray-700 mb-2">Working Time</label>
          <input
            type="text"
            id="workingTime"
            name="workingTime"
            value={formData.workingTime}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter working time (e.g., 9 AM - 5 PM)"
            required
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label htmlFor="edu" className="block text-lg font-medium text-gray-700 mb-2">Educational Requirements</label>
          <input
            type="text"
            id="edu"
            name="edu"
            value={formData.edu}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter educational requirements"
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label htmlFor="salary" className="block text-lg font-medium text-gray-700 mb-2">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter salary details"
            required
          />
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <label htmlFor="Benifits" className="block text-lg font-medium text-gray-700 mb-2">Benefits</label>
          <input
            type="text"
            id="Benifits"
            name="Benifits"
            value={formData.Benifits}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter job benefits"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-text_blue text-white px-6 py-3 rounded-md hover:text-text_hover font-medium"
          >
            Add Career
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCareer;
