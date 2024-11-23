import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">SahayakAI</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/eligibility" className="hover:underline">Eligibility</a>
          <a href="/document-verification" className="hover:underline">Verification</a>
          <a href="/admin" className="hover:underline">Admin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
