import React, { useState } from 'react';
import axios from 'axios';



const UpdateServicePage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        liveProjects: [{ projectName: '', projectLink: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProjectChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...formData.liveProjects];
        updatedProjects[index][name] = value;
        setFormData({ ...formData, liveProjects: updatedProjects });
    };

    const handleAddProject = () => {
        setFormData({
            ...formData,
            liveProjects: [...formData.liveProjects, { projectName: '', projectLink: '' }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/services', formData); // Change this to your API endpoint
            console.log('Service added successfully:', response.data);
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Service</h1>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Service Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
                        placeholder="Enter service title"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
                        placeholder="Enter service description"
                        rows="4"
                        required
                    />
                </div>

                {/* Image */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Live Projects */}
                <div className="mb-4">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Live Projects</h2>
                    {formData.liveProjects.map((project, index) => (
                        <div key={index} className="mb-4 border p-4 rounded-lg">
                            <div className="mb-2">
                                <label htmlFor={`projectName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                                <input
                                    type="text"
                                    id={`projectName-${index}`}
                                    name="projectName"
                                    value={project.projectName}
                                    onChange={(e) => handleProjectChange(index, e)}
                                    className="w-full px-3 py-2  rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
                                    placeholder="Enter project name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`projectLink-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                                <input
                                    type="text"
                                    id={`projectLink-${index}`}
                                    name="projectLink"
                                    value={project.projectLink}
                                    onChange={(e) => handleProjectChange(index, e)}
                                    className="w-full px-3 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
                                    placeholder="Enter project link"
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={handleAddProject}
                        className="bg-text_blue text-white px-4 py-2 rounded-md hover:bg-text_hover"
                    >
                        Add Another Project
                    </button>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="bg-text_blue text-white px-6 py-3 rounded-md hover:bg-text_hover font-medium"
                    >
                        Add Service
                    </button>
                </div>
            </form>
        </div>
    );

};

export default UpdateServicePage
