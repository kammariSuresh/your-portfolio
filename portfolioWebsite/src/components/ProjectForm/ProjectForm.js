
import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    // Add more form fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the form
    onSubmit(formData);
    setFormData({
      projectName: '',
      projectDescription: '',
    });
  };

  return (
  
    <form onSubmit={handleSubmit} className='form-container'>
    <h2>Projects View</h2>
      <label htmlFor="projectName">Project Name:</label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        value={formData.projectName}
        onChange={handleInputChange}
      />

      <label htmlFor="projectDescription">Project Description:</label>
      <textarea
        id="projectDescription"
        name="projectDescription"
        value={formData.projectDescription}
        onChange={handleInputChange}
      ></textarea>

      <button type="submit" className='add-button'>Add Project</button>
    </form>
 
  );
};

export default ProjectForm;
