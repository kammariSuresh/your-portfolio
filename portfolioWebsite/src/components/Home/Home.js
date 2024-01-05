
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [content, setContent] = useState({
    heading: 'Welcome to the Home Page',
    description: 'This is the main landing page of your website.',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  return (
    <div className="home-container">
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
      {/* we can Add more content as needed */}
    </div>
  );
};

export default Home;
