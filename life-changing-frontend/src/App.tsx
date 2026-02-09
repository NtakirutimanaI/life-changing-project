
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/auth-context';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { BeneficiaryDashboard } from '@/pages/BeneficiaryDashboard';
import { DonorDashboard } from '@/pages/DonorDashboard';
import { DonationPage } from '@/pages/DonationPage';
import { LoginPage } from '@/pages/LoginPage';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HowWeWorkPage } from '@/pages/HowWeWorkPage';
import { StrategicDirectionPage } from '@/pages/StrategicDirectionPage';
import { ImpactStoriesPage } from '@/pages/ImpactStoriesPage';
import { ResourcesPage } from '@/pages/ResourcesPage';

import { Toaster } from 'sonner';
// import './admin.css'; // Assuming admin.css is global often, but maybe strictly for dashboards?


import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { useLocation } from 'react-router-dom';

function AppContent() {
    const location = useLocation();
    const dashboardRoutes = ['/admin', '/beneficiary', '/donor', '/login'];
    const isDashboard = dashboardRoutes.some(route => location.pathname.startsWith(route));

    React.useEffect(() => {
        const publicStyle = document.getElementById('public-style') as HTMLLinkElement;
        const adminStyle = document.getElementById('admin-style') as HTMLLinkElement;

        if (publicStyle && adminStyle) {
            if (isDashboard) {
                // Keep public style enabled for Bootstrap and base styles
                publicStyle.disabled = false;
                adminStyle.disabled = false;
            } else {
                publicStyle.disabled = false;
                adminStyle.disabled = true;
            }
        }
    }, [isDashboard]);

    return (
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
            {!isDashboard && <Navbar />}
            <main style={{ flex: 1, paddingTop: isDashboard ? '0' : '0' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/beneficiary" element={<BeneficiaryDashboard />} />
                    <Route path="/donor" element={<DonorDashboard />} />
                    <Route path="/donate" element={<DonationPage />} />

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Main Website Pages */}
                    <Route path="/how-we-work" element={<HowWeWorkPage />} />
                    <Route path="/strategic-direction" element={<StrategicDirectionPage />} />
                    <Route path="/impact-stories" element={<ImpactStoriesPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            {!isDashboard && <Footer />}
            {!isDashboard && <SearchModal />}
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Toaster position="top-right" richColors />
            <HashRouter>
                <AppContent />
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
