import React, { useState } from 'react';
import Header from './Header';
import Footer from "./footer"
import './css/contact.css';
import { firestore, collection, addDoc } from './fireBase';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const contactUsImg =
    'https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I=';

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/; // Regex for exactly 10 digits
    return regex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Validation checks
    const newErrors = {
      name: !name ? 'Please enter your name' : '',
      phone: !phone ? 'Please enter your phone number' : !validatePhoneNumber(phone) ? 'Please enter a valid 10-digit phone number' : '',
      email: !email ? 'Please enter your email address' : '',
      message: !message ? 'Please enter your message' : '',
    };

    setErrors(newErrors);

    // If any field has an error, prevent form submission
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    try {
      const contactsCollection = collection(firestore, 'contacts');
      await addDoc(contactsCollection, {
        name,
        phone,
        email,
        message,
      });

      console.log('Contact details submitted successfully!');
      alert('Contact details submitted successfully!');

      // Clear form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact details:', error);
      alert('Error submitting contact details');
    }
  };

  const handleChange = (e) => {
    // Update form data as user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear corresponding error when user types
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  return (
    <>
      <Header />
      <div className='container-fluid ps-0 pe-0'>
        <div className='pb-5'>
          <img
            src={contactUsImg}
            alt='contactImg'
            className='w-100 contactImg'
          />
        </div>
        <div className='container mb-5 pb-5'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='d-flex gap-5'>
              <div className='me-auto w-50'>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  className={errors.name ? 'error' : ''}
                  value={formData.name}
                  onChange={handleChange}
                  
                />
                {errors.name && <div className='error-message m-0 text-danger ps-2' style={{fontSize:"14px"}}>{errors.name}</div>}
              </div>
              <div className='w-50'>
                <label htmlFor='phone'>Phone:</label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  placeholder='Your Number'
                  className={errors.phone ? 'error' : ''}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className='error-message text-danger m-0 ps-2' style={{fontSize:"14px"}}>{errors.phone}</div>}
              </div>
            </div>

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              className={errors.email ? 'error' : ''}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className='error-message m-0 ps-2 text-danger' style={{fontSize:"14px"}}>{errors.email}</div>}

            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              placeholder='Type your message'
              className={errors.message ? 'error' : ''}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className='error-message m-0 ps-2 text-danger' style={{fontSize:"14px"}}>{errors.message}</div>}

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
