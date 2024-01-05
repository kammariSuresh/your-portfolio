// components/About/About.js
import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [content, setContent] = useState({
    heading: 'About Us',
    description: 'This is the about section of your website.',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  return (
    <section id="about" className="about-section">
      <h2>
        <input
          type="text"
          name="heading"
          value={content.heading}
          onChange={handleInputChange}
          placeholder="Enter Heading"
        />
      </h2>
      <p>
        <textarea rows={'15'}
          name="description"
          value={content.description}
          onChange={handleInputChange}
          placeholder="Enter Description"
        ></textarea>
      </p>
      {/*we can Add more content as needed */}
    </section>
  );
};

export default About;
