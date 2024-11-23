import React, { useState } from 'react';
import { fetchSchemes } from '../services/mySchemeAPI';

const EligibilityAssessment = () => {
  const [profile, setProfile] = useState({
    age: '',
    income: '',
    familySize: '',
    location: '',
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const checkEligibility = async () => {
    try {
      const schemes = await fetchSchemes(profile);
      setResults(schemes);
    } catch (error) {
      console.error('Error checking eligibility:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Eligibility Assessment</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Income</label>
          <input
            type="number"
            name="income"
            value={profile.income}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Family Size</label>
          <input
            type="number"
            name="familySize"
            value={profile.familySize}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={checkEligibility}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Check Eligibility
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Recommended Schemes</h2>
          <ul className="max-w-md mx-auto">
            {results.map((scheme, index) => (
              <li
                key={index}
                className="bg-white p-4 mb-2 rounded shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold">{scheme.name}</h3>
                <p>{scheme.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EligibilityAssessment;
