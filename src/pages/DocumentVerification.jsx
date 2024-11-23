import React, { useState } from 'react';
import { verifyDocument } from '../services/ocrService';
// import { verifyDocument } from '../services/ocrService';




const DocumentVerification = () => {
  const [file, setFile] = useState(null);
  const [verificationResult, setVerificationResult] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    try {
      const result = await verifyDocument(file);
      setVerificationResult(result);
    } catch (error) {
      console.error('Error verifying document:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Document Verification</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Document</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleUpload}
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Verify Document
        </button>
      </div>
      {verificationResult && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700">Verification Result</h2>
          <p className="mt-4 text-gray-700">{verificationResult}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentVerification;
