import React, { useState } from 'react';

const AdminPortal = () => {
  const [scheme, setScheme] = useState({ name: '', description: '', criteria: '' });

  const handleInputChange = (e) => {
    setScheme({ ...scheme, [e.target.name]: e.target.value });
  };

  const handleAddScheme = () => {
    alert(`Scheme added: ${scheme.name}`);
    // Add API integration to save the scheme
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Admin Portal</h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Scheme Name</label>
          <input
            type="text"
            name="name"
            value={scheme.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={scheme.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Eligibility Criteria</label>
          <input
            type="text"
            name="criteria"
            value={scheme.criteria}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddScheme}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Scheme
        </button>
      </div>
    </div>
  );
};

export default AdminPortal;
