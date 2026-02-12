
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from './lib/auth-context';
import { Toaster } from 'sonner';
import './dashboard.css';

// Public Pages
import { LoginPage } from '@/pages/LoginPage';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HowWeWorkPage } from '@/pages/HowWeWorkPage';
import { StrategicDirectionPage } from '@/pages/StrategicDirectionPage';
import { ImpactStoriesPage } from '@/pages/ImpactStoriesPage';
import { ResourcesPage as PublicResourcesPage } from '@/pages/ResourcesPage';
import { OurProgramsDetailsPage } from '@/pages/OurProgramsDetailsPage';
import { DonationPage } from '@/pages/DonationPage';

// Layouts and Components
import { DashboardLayout } from './components/layout/dashboard-layout';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingScrollToTop } from './components/layout/FloatingScrollToTop';
import { Chatbot } from './components/layout/Chatbot';
import { LanguageProvider } from './lib/language-context';
import { ProtectedRoute } from './components/auth/protected-route';
import { ProfilePage } from './pages/ProfilePage';

// Types
import { UserType } from './lib/types';

// Dashboard Pages - Admin
import { AdminDashboard as AdminDashboardOverview } from './pages/NewAdminDashboard';
import { BeneficiariesPage } from './pages/admin/beneficiaries-page';
import DonorsPage from './pages/admin/donors-page';
import FinancialPage from './pages/admin/financial-page';
import ReportsPage from './pages/admin/reports-page';
import SettingsPage from './pages/admin/settings-page';
import AddBeneficiaryPage from './pages/admin/add-beneficiary-page';
import AddDonorPage from './pages/admin/add-donor-page';
import { ProgramsPage } from './pages/NewProgramsPage';
import { SearchResultsPage } from './pages/admin/search-results-page';
import { WebContentsPage } from './pages/admin/web-contents-page';

// Dashboard Pages - Beneficiary
import BeneficiaryDashboard from './pages/NewBeneficiaryDashboard';
import GoalsPage from './pages/beneficiary/goals-page';
import TrackingPage from './pages/beneficiary/tracking-page';
import BeneficiaryResourcesPage from './pages/beneficiary/resources-page';
import AddGoalPage from './pages/beneficiary/add-goal-page';
import AddTrackingPage from './pages/beneficiary/add-tracking-page';
import UploadDocumentPage from './pages/beneficiary/upload-document-page';

// Dashboard Pages - Donor
import DonorDashboard from './pages/NewDonorDashboard';
import DonorDonationsPage from './pages/donor/donations-page';
import ImpactReportsPage from './pages/donor/impact-reports-page';

function AppContent() {
    const location = useLocation();
    const dashboardRoutes = ['/admin', '/beneficiary', '/donor', '/dashboard', '/profile'];
    const isDashboard = dashboardRoutes.some(route => location.pathname.startsWith(route));

    React.useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const publicStyle = document.getElementById('public-style') as HTMLLinkElement;
        const adminStyle = document.getElementById('admin-style') as HTMLLinkElement;

        if (isDashboard) {
            if (publicStyle) publicStyle.disabled = true;
            if (adminStyle) adminStyle.disabled = false;
        } else {
            if (publicStyle) publicStyle.disabled = false;
            if (adminStyle) adminStyle.disabled = true;
        }

        // Failsafe cleanup for potential stuck overlays or body classes
        document.body.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
        const loader = document.getElementById('ftco-loader');
        if (loader) loader.classList.remove('show');

        // Remove lingering backdrop if any
        const backdrops = document.getElementsByClassName('modal-backdrop');
        while (backdrops.length > 0) {
            backdrops[0].parentNode?.removeChild(backdrops[0]);
        }
    }, [isDashboard, location.pathname]);

    return (
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
            {isDashboard && (
                <style>{`
                    body, html {
                        margin: 0 !important;
                        padding: 0 !important;
                        height: 100% !important;
                        min-height: 100% !important;
                        overflow-x: hidden;
                        background-color: var(--background, #FFFFFF);
                        color: var(--foreground, #020617);
                    }
                    
                    #root {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        background-color: var(--background, #FFFFFF);
                    }

                    :root {
                        --background: #FFFFFF;
                        --foreground: #020617;
                    }

                    .dark {
                        --background: #020617;
                        --foreground: #f8fafc;
                    }

                    .dark .text-slate-900 { color: #f1f5f9 !important; }
                    .dark .bg-white, .dark .bg-light { background-color: #0f172a !important; color: #f1f5f9 !important; }
                    .dark .border-slate-200 { border-color: #1e293b !important; }
                    .dark .active-donation-card { background-color: #0d2a25 !important; border-color: #17d1ac !important; }
                    .dark .donation-card:not(.active-donation-card) { background-color: #0f172a !important; }
                    .dark .btn-light { background-color: #1e293b !important; color: #f1f5f9 !important; border-color: #334155 !important; }
                    .dark .btn-white { background-color: #1e293b !important; color: #ffffff !important; border-color: #ffffff !important; }
                    .dark .bg-slate-50 { background-color: #0f172a !important; }
                `}</style>
            )}
            {!isDashboard && <Navbar />}
            <main style={{ flex: 1, paddingTop: isDashboard ? '0' : '0' }}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/donate" element={<DonationPage />} />
                    {/* Profile - accessible to all authenticated users with dashboard layout */}
                    <Route element={<ProtectedRoute allowedRoles={[UserType.ADMIN, UserType.DONOR, UserType.BENEFICIARY]} />}>
                        <Route path="/profile" element={<DashboardLayout />}>
                            <Route index element={<ProfilePage />} />
                        </Route>
                    </Route>

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/how-we-work" element={<HowWeWorkPage />} />
                    <Route path="/strategic-direction" element={<StrategicDirectionPage />} />
                    <Route path="/impact-stories" element={<ImpactStoriesPage />} />
                    <Route path="/resources" element={<PublicResourcesPage />} />
                    <Route path="/our-programs-details" element={<OurProgramsDetailsPage />} />

                    {/* Admin Dashboard Routes */}
                    <Route element={<ProtectedRoute allowedRoles={[UserType.ADMIN]} />}>
                        <Route path="/admin" element={<DashboardLayout />}>
                            <Route path="web-contents/*" element={<WebContentsPage />} />
                            <Route index element={<AdminDashboardOverview />} />
                            <Route path="search" element={<SearchResultsPage />} />
                            <Route path="beneficiaries" element={<BeneficiariesPage />} />
                            <Route path="beneficiaries/add" element={<AddBeneficiaryPage />} />
                            <Route path="donors" element={<DonorsPage />} />
                            <Route path="donors/add" element={<AddDonorPage />} />
                            <Route path="programs" element={<ProgramsPage />} />
                            <Route path="financial" element={<FinancialPage />} />
                            <Route path="reports" element={<ReportsPage />} />
                            <Route path="settings" element={<SettingsPage />} />
                        </Route>
                    </Route>

                    {/* Beneficiary Dashboard Routes */}
                    <Route element={<ProtectedRoute allowedRoles={[UserType.BENEFICIARY]} />}>
                        <Route path="/dashboard" element={<Navigate to="/beneficiary" replace />} />
                        <Route path="/beneficiary" element={<DashboardLayout />}>
                            <Route index element={<BeneficiaryDashboard />} />
                            <Route path="goals" element={<GoalsPage />} />
                            <Route path="goals/add" element={<AddGoalPage />} />
                            <Route path="tracking" element={<TrackingPage />} />
                            <Route path="tracking/add" element={<AddTrackingPage />} />
                            <Route path="resources" element={<BeneficiaryResourcesPage />} />
                            <Route path="resources/upload" element={<UploadDocumentPage />} />
                        </Route>
                    </Route>

                    {/* Donor Dashboard Routes */}
                    <Route element={<ProtectedRoute allowedRoles={[UserType.DONOR]} />}>
                        <Route path="/donor" element={<DashboardLayout />}>
                            <Route index element={<DonorDashboard />} />
                            <Route path="donations" element={<DonorDonationsPage />} />
                            <Route path="reports" element={<ImpactReportsPage />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            {!isDashboard && <Footer />}
            {!isDashboard && <SearchModal />}
            {!isDashboard && <FloatingScrollToTop />}
            {!isDashboard && <Chatbot />}
        </div>
    );
}

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="lceo-theme">
            <LanguageProvider>
                <AuthProvider>
                    <Toaster position="top-right" richColors />
                    <HashRouter>
                        <ScrollToTop />
                        <AppContent />
                    </HashRouter>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
