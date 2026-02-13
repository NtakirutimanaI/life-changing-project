
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
import { ManageUsersPage } from './pages/admin/manage-users-page';
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
    const queryParams = new URLSearchParams(location.search);
    const isPreview = queryParams.get('preview') === 'true';

    const dashboardRoutes = ['/admin', '/beneficiary', '/donor', '/dashboard', '/profile'];
    const isDashboard = dashboardRoutes.some(route => location.pathname.startsWith(route));
    const hideGlobalElements = isDashboard || isPreview;

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
                        --card: #0f172a;
                        --card-foreground: #f8fafc;
                        --border: #1e293b;
                        --muted: #1e293b;
                        --muted-foreground: #94a3b8;
                    }

                    /* Global Text Overrides */
                    .dark .text-slate-900, 
                    .dark .text-gray-900, 
                    .dark .text-teal-900,
                    .dark .text-teal-950,
                    .dark .text-dark,
                    .dark .text-slate-800, 
                    .dark .text-gray-800,
                    .dark .heading,
                    .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 { color: #f8fafc !important; }
                    
                    .dark .text-slate-700, 
                    .dark .text-gray-700,
                    .dark .text-slate-600, 
                    .dark .text-gray-600, 
                    .dark .text-teal-600,
                    .dark .lead,
                    .dark .subheading { color: #cbd5e1 !important; }
                    
                    .dark .text-slate-500, 
                    .dark .text-gray-500,
                    .dark .text-muted,
                    .dark p,
                    .dark label,
                    .dark .label,
                    .dark .text-black { color: #94a3b8 !important; }
                    
                    /* Background Overrides */
                    .dark .bg-white, 
                    .dark .bg-light,
                    .dark .bg-slate-50,
                    .dark .bg-gray-50,
                    .dark .ftco-section,
                    .dark .ftco-counter,
                    .dark [style*="background-color: #fcfdfd"],
                    .dark [style*="background-color: #ffffff"],
                    .dark [style*="background-color: #f9fbfb"],
                    .dark [style*="background: #fff"],
                    .dark [style*="background: white"] { background-color: #0f172a !important; color: #f1f5f9 !important; }
                    
                    .dark .bg-slate-100,
                    .dark .bg-gray-100,
                    .dark .block-18:not(.color-4) { background-color: #1e293b !important; }

                    /* Border Overrides */
                    .dark .border-slate-200, 
                    .dark .border-gray-200,
                    .dark .border-teal-100,
                    .dark .border,
                    .dark .border-bottom,
                    .dark .border-top,
                    .dark [style*="border: 1px solid #eee"],
                    .dark [style*="border-bottom: 1px solid #f0f0f0"] { border-color: #1e293b !important; }
                    
                    .dark .active-donation-card { background-color: #0d2a25 !important; border-color: #17d1ac !important; }
                    .dark .donation-card:not(.active-donation-card) { background-color: #0f172a !important; }
                    .dark .btn-light { background-color: #1e293b !important; color: #f1f5f9 !important; border-color: #334155 !important; }
                    .dark .btn-white { background-color: #1e293b !important; color: #ffffff !important; border-color: #ffffff !important; }
                    
                    /* Inline Style Overrides (Targeting legacy hardcoded colors) */
                    .dark [style*="color: #555"], 
                    .dark [style*="color: #666"], 
                    .dark [style*="color: #111"], 
                    .dark [style*="color: #212529"],
                    .dark [style*="color: rgb(18, 47, 43)"],
                    .dark [style*="color: #6c757d"],
                    .dark [style*="color: #122f2b"] { color: #f1f5f9 !important; }
                    
                    /* Table fixes */
                    .dark table { color: #f1f5f9 !important; }
                    .dark thead tr { background-color: #1e293b !important; }
                    .dark tbody tr:hover { background-color: #1e293b/50 !important; }
                    .dark td, .dark th { border-color: #1e293b !important; }
                    
                    /* UI Components */
                    .dark .card, .dark .block-6, .dark .login-container { background-color: #0f172a !important; border-color: #1e293b !important; }
                    
                    /* Inputs */
                    .dark input:not(.btn), .dark textarea, .dark select { 
                        background-color: #020617 !important; 
                        color: #f1f5f9 !important; 
                        border-color: #1e293b !important; 
                    }
                    .dark input::placeholder { color: #64748b !important; }

                    /* Icons */
                    .dark .lucide { color: inherit; }

                    /* Responsive Helpers */
                    @media (max-width: 450px) {
                        .xs-hidden { display: none !important; }
                    }
                `}</style>
            )}
            {!hideGlobalElements && <Navbar />}
            <main style={{ flex: 1, paddingTop: '0' }}>
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
                            <Route path="users" element={<ManageUsersPage />} />
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
                            <Route path="search" element={<SearchResultsPage />} />
                        </Route>
                    </Route>

                    {/* Donor Dashboard Routes */}
                    <Route element={<ProtectedRoute allowedRoles={[UserType.DONOR]} />}>
                        <Route path="/donor" element={<DashboardLayout />}>
                            <Route index element={<DonorDashboard />} />
                            <Route path="donations" element={<DonorDonationsPage />} />
                            <Route path="reports" element={<ImpactReportsPage />} />
                            <Route path="search" element={<SearchResultsPage />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            {!hideGlobalElements && <Footer />}
            {!hideGlobalElements && <SearchModal />}
            {!hideGlobalElements && <FloatingScrollToTop />}
            {!hideGlobalElements && <Chatbot />}
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
