
import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  // State variable to manage user contact details
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    address: '',
  });

  // Function to handle changing user contact details
  const handleContactDetailsChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <section className='contact-section'>
      <div  className="contact-container">
      <h2>Contact Details</h2>
      <div className="contact-field">
        <label>Email:</label>
        <input className='input-field' type="text" name="email" value={contactDetails.email} placeholder='your@email.com' onChange={handleContactDetailsChange} />
      </div>
      <div className="contact-field">
        <label>Phone:</label>
        <input className='input-field' type="text" placeholder='Add anumber' name="phone" value={contactDetails.phone} onChange={handleContactDetailsChange} />
      </div>
      <div className="contact-field">
        <label>Address:</label>
        <input className='input-field' type="text" placeholder='Add Address' name="address" value={contactDetails.address} onChange={handleContactDetailsChange} />
      </div>
      </div>
    </section>
  );
};

export default Contact;
