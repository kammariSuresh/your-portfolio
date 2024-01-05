
import React, { useState } from 'react';
import ProjectForm from '../ProjectForm/ProjectForm';
import './ProjectView.css';

const ProjectView = () => {
  const [projects, setProjects] = useState([]);

  const handleFormSubmit = (formData) => {
    // Validate and add a new project to the projects array
    setProjects([...projects, formData]);
  };

  return (
    <div className='project-view-container'>
      
      <ProjectForm onSubmit={handleFormSubmit} />

      <div className='view-container'>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.projectName}</h3>
            <p>{project.projectDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;
