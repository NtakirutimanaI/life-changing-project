// Updated at 2:33 AM
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/auth-context';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { BeneficiaryDashboard } from '@/pages/BeneficiaryDashboard';
import { DonorDashboard } from '@/pages/DonorDashboard';
import { DonationPage } from '@/pages/DonationPage';
import { LoginPage } from '@/pages/LoginPage';

import { Toaster } from 'sonner';
import './admin.css';


function App() {
    return (
        <AuthProvider>
            <Toaster position="top-right" richColors />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/beneficiary" element={<BeneficiaryDashboard />} />
                    <Route path="/donor" element={<DonorDashboard />} />
                    <Route path="/donate" element={<DonationPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
