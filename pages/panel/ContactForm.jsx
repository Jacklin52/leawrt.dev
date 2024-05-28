import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/send-email', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message!');
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="block w-full px-4 py-2 border border-gray-300 rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="block w-full px-4 py-2 border border-gray-300 rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="block w-full px-4 py-2 border border-gray-300 rounded"></textarea>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
