import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to SahayakAI</h1>
        <p className="mt-4 text-gray-600">Simplifying access to government schemes and services.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <Card title="Check Eligibility" link="/eligibility" />
        <Card title="Verify Documents" link="/document-verification" />
        <Card title="Application Assistance" link="/application-assistance" />
        <Card title="Admin Portal" link="/admin" />
      </div>
    </div>
  );
};

export default Home;
