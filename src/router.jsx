import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EligibilityAssessment from './pages/EligibilityAssessment';
import DocumentVerification from './pages/DocumentVerification';
import ApplicationAssistance from './pages/ApplicationAssistance';
import AdminPortal from './pages/AdminPortal';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eligibility" element={<EligibilityAssessment />} />
        <Route path="/document-verification" element={<DocumentVerification />} />
        <Route path="/application-assistance" element={<ApplicationAssistance />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
