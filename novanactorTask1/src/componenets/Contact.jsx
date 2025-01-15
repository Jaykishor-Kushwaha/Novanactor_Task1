import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({}); // Store validation errors

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    else if (form.name.length < 3) newErrors.name = "Name must be at least 3 characters long.";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format.";

    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when editing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // If validation fails, stop submission

    try {
      const response = await axios.post('http://localhost:5000/api/contact', form);
      setResponseMessage(response.data.message);
      setForm({ name: '', email: '', message: '' });
      setErrors({}); // Clear errors after successful submission
    } catch (error) {
      setResponseMessage('Error submitting the form. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-emerald-400">
        Contact Us
      </h2>
      {responseMessage && (
        <p className="text-2xl text-center text-yellow-400 pb-2">{responseMessage}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="px-4 max-w-xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  

  

  );
};

export default Contact;
