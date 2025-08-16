// src/components/Contact/Contact.jsx

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to a server
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-center mb-8">We're here to help! Whether you have a question about our products, need assistance with an order, or just want to provide feedback, we’re always happy to hear from you.</p>
      
      <div className="text-center mb-8">
        <p><strong>Customer Support:</strong></p>
        <p>Email: support@swiftcard.com</p>
        <p>Phone: +91 7479474629</p>
        <p>Working Hours: Monday to Saturday, 9:00 AM to 6:00 PM IST</p>
      </div>
      
      <div className="text-center mb-8">
        <p><strong>Our Address:</strong></p>
        <p>SwiftCard Pvt. Ltd.</p>
        <p>123, E-commerce Street, Tech Park</p>
        <p>Greater Noida</p>
      </div>
      
      <div className="text-center mb-8">
        <p><strong>Follow Us:</strong></p>
        <p>
          <a href="https://facebook.com/swiftcard" className="text-blue-600">Facebook</a> | 
          <a href="https://twitter.com/swiftcard" className="text-blue-400"> Twitter</a> | 
          <a href="https://instagram.com/swiftcard" className="text-pink-600"> Instagram</a>
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
