import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides a consistent base across browsers */}
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes for Doctor */}
            <Route element={<ProtectedRoute allowedRole="doctor" />}>
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            </Route>

            {/* Protected Routes for Patient */}
            <Route element={<ProtectedRoute allowedRole="patient" />}>
              <Route path="/patient-dashboard" element={<PatientDashboard />} />
            </Route>

            {/* Default Redirection */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Catch-all redirect to root */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
