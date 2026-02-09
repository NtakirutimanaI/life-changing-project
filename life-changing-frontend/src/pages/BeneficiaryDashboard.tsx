import React, { useState } from 'react';
import { Sidebar } from '../components/admin/Sidebar';
import { Topbar } from '../components/admin/Topbar';
import { useAuth } from '../lib/auth-context';
import { Navigate } from 'react-router-dom';
import { UserType } from '../lib/types';
import { mockBeneficiaries } from '../lib/mock-data';
import {
    LayoutGrid,
    Briefcase,
    ListTodo,
    User,
    TrendingUp,
    DollarSign,
    Calendar,
    ArrowUp,
    Package,
    Clock,
    CheckCircle2
} from 'lucide-react';


export function BeneficiaryDashboard() {
    const { user, isLoading } = useAuth();
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    if (isLoading) return <div>Loading...</div>;
    if (!user || user.userType !== UserType.BENEFICIARY) {
        return <Navigate to="/login" />;
    }

    // Find the beneficiary record linked to the logged-in user
    const beneficiaryData = mockBeneficiaries.find(b => b.user.id === user?.id) || mockBeneficiaries[0];

    const renderOverview = () => (
        <div className="p-2">
            {/* Stats Cards */}
            <div className="row mb-4">
                {[
                    { title: 'Current Capital', value: `${beneficiaryData.currentCapital.toLocaleString()} RWF`, sub: 'Active growth', trend: `+${((beneficiaryData.currentCapital - beneficiaryData.startCapital) / beneficiaryData.startCapital * 100).toFixed(1)}%`, icon: DollarSign, color: 'primary' },
                    { title: 'Goal Progress', value: `${beneficiaryData.profileCompletion}%`, sub: 'Profile completion', icon: TrendingUp, color: 'success' },
                    { title: 'Next Tracking', value: beneficiaryData.nextTrackingDate ? new Date(beneficiaryData.nextTrackingDate).toLocaleDateString() : 'Pending', sub: `Frequency: ${beneficiaryData.trackingFrequency}`, icon: Clock, color: 'info' },
                ].map((stat, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="cms-card border-0 shadow-sm p-3 h-100 d-flex justify-content-between align-items-start">
                            <div>
                                <p className="x-small text-muted mb-1 text-uppercase font-weight-bold">{stat.title}</p>
                                <h3 className="font-weight-bold mb-0">{stat.value}</h3>
                                <p className="x-small text-muted mb-1" style={{ fontSize: '0.65rem' }}>{stat.sub}</p>
                                {stat.trend && (
                                    <p className="x-small text-success font-weight-bold mb-0" style={{ fontSize: '0.65rem' }}>
                                        <ArrowUp size={10} className="mr-1" /> {stat.trend}
                                    </p>
                                )}
                            </div>
                            <div className={`icon-box bg-${stat.color}-light rounded-lg p-2 text-${stat.color} d-flex align-items-center justify-content-center`} style={{ width: '38px', height: '38px' }}>
                                <stat.icon size={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                {/* Business Info */}
                <div className="col-lg-7 mb-4">
                    <div className="cms-card border-0 shadow-sm h-100">
                        <div className="cms-card-header bg-white border-0 py-4 px-4">
                            <h5 className="font-weight-bold mb-0">My Business Details</h5>
                        </div>
                        <div className="p-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-light rounded p-3 mr-3">
                                    <Briefcase className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h6 className="font-weight-bold mb-0">{beneficiaryData.businessType}</h6>
                                    <p className="small text-muted mb-0">{beneficiaryData.program.name.en}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <label className="x-small text-muted text-uppercase font-weight-bold d-block">Start Capital</label>
                                    <div className="font-weight-bold">{beneficiaryData.startCapital.toLocaleString()} RWF</div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="x-small text-muted text-uppercase font-weight-bold d-block">Enrollment Date</label>
                                    <div className="font-weight-bold">{new Date(beneficiaryData.enrollmentDate).toLocaleDateString()}</div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="x-small text-muted text-uppercase font-weight-bold d-block">Location</label>
                                    <div className="font-weight-bold">{beneficiaryData.location.sector}, {beneficiaryData.location.district}</div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label className="x-small text-muted text-uppercase font-weight-bold d-block">Status</label>
                                    <div><span className="badge badge-success-light text-success px-2 py-1 rounded-pill x-small">{beneficiaryData.status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks/Goals */}
                <div className="col-lg-5 mb-4">
                    <div className="cms-card border-0 shadow-sm h-100">
                        <div className="cms-card-header bg-white border-0 py-4 px-4">
                            <h5 className="font-weight-bold mb-0">Upcoming Tasks</h5>
                        </div>
                        <div className="p-4">
                            {[
                                { title: 'Weekly Financial Report', due: 'Friday, 5:00 PM', status: 'pending', icon: ListTodo },
                                { title: 'Mentor Check-in', due: 'Monday, 2:00 PM', status: 'upcoming', icon: Calendar },
                                { title: 'Monthly Savings Deposit', due: 'Oct 30, 2023', status: 'upcoming', icon: CheckCircle2 },
                            ].map((task, i) => (
                                <div key={i} className="d-flex align-items-start mb-3 pb-3 border-bottom last-border-0">
                                    <div className="bg-light rounded-circle p-2 mr-3 text-muted">
                                        <task.icon size={16} />
                                    </div>
                                    <div>
                                        <h6 className="small font-weight-bold mb-1">{task.title}</h6>
                                        <p className="x-small text-muted mb-0">Due: {task.due}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="btn btn-primary-light text-primary btn-block btn-sm font-weight-bold mt-2">View All Tasks</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPlaceholder = (title: string) => (
        <div className="p-5 text-center">
            <div className="mb-4">
                <Package size={48} className="text-muted opacity-50" />
            </div>
            <h5 className="font-weight-bold">{title}</h5>
            <p className="text-muted">This section is under development for your portal.</p>
        </div>
    );

    const renderView = () => {
        switch (activeView) {
            case 'business': return renderPlaceholder('My Business Management');
            case 'tasks': return renderPlaceholder('Tasks & Goals Tracking');
            case 'profile': return renderPlaceholder('My Profile Settings');
            case 'overview':
            default:
                return renderOverview();
        }
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <Sidebar
                activeView={activeView}
                onViewChange={setActiveView}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <div className="main-content">
                <Topbar
                    title={
                        activeView === 'overview' ? 'My Progress Dashboard' :
                            activeView.charAt(0).toUpperCase() + activeView.slice(1)
                    }
                    onToggleSidebar={() => setIsSidebarOpen(true)}
                />
                {renderView()}
            </div>
        </div>
    );
}
