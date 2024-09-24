import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    linkedInProfile: "",
    portfolio: "",
    resume: "",
    coverLetter: "",
    technicalSkills: [],
    workExperience: [
      { jobTitle: "", companyName: "", startDate: "", endDate: "", description: "" },
    ],
    education: [{ degree: "", institution: "", graduationYear: "" }],
    references: [{ name: "", contactInfo: "", relationship: "" }],
    technicalAssessment: { score: "", feedback: "" },
    availability: "",
    salaryExpectations: "",
    userID: "",
    careerID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (index, field, value, arrayName) => {
    const newArray = [...formData[arrayName]];
    newArray[index][field] = value;
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API call here
  };

  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">

      <div className="flex bg-blue-950 py-5 px-3 items-center justify-between mb-6">
          <h1 className="text-3xl flex items-center gap-1 font-bold text-white"><span>Job Application Form</span> <IoDocumentTextOutline /></h1>
          <img src='https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg' alt="Company Logo" className="h-12" /> {/* Adjust height as needed */}
        </div>
        {/* Basic Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedInProfile"
              value={formData.linkedInProfile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Portfolio</label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Resume (Drive URL)</label>
            <input
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Cover Letter (Drive URL)</label>
            <input
              type="url"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <label className="block text-gray-700 mb-1">Technical Skills (comma separated)</label>
          <input
            type="text"
            name="technicalSkills"
            value={formData.technicalSkills.join(', ')}
            onChange={(e) => setFormData({ ...formData, technicalSkills: e.target.value.split(',').map(skill => skill.trim()) })}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Work Experience Section */}
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        {formData.workExperience.map((experience, index) => (
          <div key={index} className="mb-6 border rounded p-4 border-gray-300 bg-gray-50">
            <h3 className="font-bold mb-2">Experience {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={experience.jobTitle}
                  onChange={(e) => handleNestedChange(index, "jobTitle", e.target.value, "workExperience")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  value={experience.companyName}
                  onChange={(e) => handleNestedChange(index, "companyName", e.target.value, "workExperience")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={experience.startDate}
                  onChange={(e) => handleNestedChange(index, "startDate", e.target.value, "workExperience")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">End Date</label>
                <input
                  type="date"
                  value={experience.endDate}
                  onChange={(e) => handleNestedChange(index, "endDate", e.target.value, "workExperience")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => handleNestedChange(index, "description", e.target.value, "workExperience")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        ))}

        {/* Education Section */}
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-6 border rounded p-4 border-gray-300 bg-gray-50">
            <h3 className="font-bold mb-2">Education {index + 1}</h3>
            <div>
              <label className="block text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleNestedChange(index, "degree", e.target.value, "education")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleNestedChange(index, "institution", e.target.value, "education")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Graduation Year</label>
              <input
                type="number"
                value={edu.graduationYear}
                onChange={(e) => handleNestedChange(index, "graduationYear", e.target.value, "education")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        ))}

        {/* References Section */}
        <h2 className="text-xl font-semibold mb-4">References</h2>
        {formData.references.map((ref, index) => (
          <div key={index} className="mb-6 border rounded p-4 border-gray-300 bg-gray-50">
            <h3 className="font-bold mb-2">Reference {index + 1}</h3>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={ref.name}
                onChange={(e) => handleNestedChange(index, "name", e.target.value, "references")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Contact Info</label>
              <input
                type="text"
                value={ref.contactInfo}
                onChange={(e) => handleNestedChange(index, "contactInfo", e.target.value, "references")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Relationship</label>
              <input
                type="text"
                value={ref.relationship}
                onChange={(e) => handleNestedChange(index, "relationship", e.target.value, "references")}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        ))}

        {/* Technical Assessment Section */}
        <h2 className="text-xl font-semibold mb-4">Technical Assessment</h2>
        <div className="mb-6 border rounded p-4 border-gray-300 bg-gray-50">
          <label className="block text-gray-700 mb-1">Score</label>
          <input
            type="number"
            name="technicalAssessment.score"
            value={formData.technicalAssessment.score}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <label className="block text-gray-700 mb-1 mt-4">Feedback</label>
          <textarea
            name="technicalAssessment.feedback"
            value={formData.technicalAssessment.feedback}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Availability & Salary Expectations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Salary Expectations</label>
            <input
              type="number"
              name="salaryExpectations"
              value={formData.salaryExpectations}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>

    </div>
  );
};

export default ApplicationPage;
