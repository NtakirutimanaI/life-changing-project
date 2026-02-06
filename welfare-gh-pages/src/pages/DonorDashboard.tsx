import React, { useState } from 'react';
import { Sidebar } from '../components/admin/Sidebar';
import { Topbar } from '../components/admin/Topbar';
import { useAuth } from '../lib/auth-context';
import { Navigate, Link } from 'react-router-dom';
import { UserType } from '../lib/types';
import { mockDonors, mockDonations } from '../lib/mock-data';
import {
    LayoutGrid,
    Heart,
    FileText,
    Settings,
    PlusCircle,
    TrendingUp,
    DollarSign,
    Award,
    Calendar,
    ArrowUp,
    ArrowRight
} from 'lucide-react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';
import '../admin.css';

export function DonorDashboard() {
    const { user, isLoading } = useAuth();
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    if (isLoading) return <div>Loading...</div>;
    if (!user || user.userType !== UserType.DONOR) {
        return <Navigate to="/login" />;
    }

    // Find donor data
    const donorData = mockDonors.find(d => d.user.id === user?.id) || mockDonors[0];
    const myDonations = mockDonations.filter(d => d.donor.id === donorData.id);

    const renderOverview = () => (
        <div className="p-2">
            {/* Stats Cards */}
            <div className="row mb-4">
                {[
                    { title: 'Total Contribution', value: `$${donorData.totalDonated.toLocaleString()}`, sub: 'Lifetime impact', trend: '+15% from last year', icon: DollarSign, color: 'primary' },
                    { title: 'Lives Impacted', value: '12', sub: 'Direct beneficiaries', icon: Heart, color: 'danger' },
                    { title: 'Donation Streak', value: '5 Months', sub: 'Recurring donor', icon: Award, color: 'warning' },
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
                {/* Donation History Chart */}
                <div className="col-lg-8 mb-4">
                    <div className="cms-card border-0 shadow-sm h-100">
                        <div className="cms-card-header bg-white border-0 py-4 px-4 d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="font-weight-bold mb-0">Donation History</h5>
                                <p className="small text-muted mb-0">Your contributions over time</p>
                            </div>
                            <Link to="/donate" className="btn btn-primary btn-sm px-3 rounded-pill font-weight-bold">
                                <PlusCircle size={16} className="mr-1" /> Donate
                            </Link>
                        </div>
                        <div className="p-4" style={{ height: '300px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={[
                                    { month: 'Jan', amount: 100 },
                                    { month: 'Mar', amount: 250 },
                                    { month: 'May', amount: 150 },
                                    { month: 'Jul', amount: 400 },
                                    { month: 'Sep', amount: 500 },
                                    { month: 'Oct', amount: 100 },
                                ]}>
                                    <defs>
                                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4c9789" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#4c9789" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="amount" stroke="#4c9789" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Recent Donations List */}
                <div className="col-lg-4 mb-4">
                    <div className="cms-card border-0 shadow-sm h-100">
                        <div className="cms-card-header bg-white border-0 py-4 px-4">
                            <h5 className="font-weight-bold mb-0">Recent Donations</h5>
                        </div>
                        <div className="p-0">
                            <div className="list-group list-group-flush">
                                {myDonations.slice(0, 4).map((don, i) => (
                                    <div key={i} className="list-group-item border-left-0 border-right-0 py-3 px-4 bg-transparent d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="small font-weight-bold mb-0">{don.program.name.en}</h6>
                                            <p className="x-small text-muted mb-0">{new Date(don.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-weight-bold text-dark">${don.amount}</div>
                                            <span className="badge badge-success-light text-success x-small py-0">{don.paymentStatus}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 text-center">
                                <button className="btn btn-link btn-sm text-primary font-weight-bold text-decoration-none" onClick={() => setActiveView('donations')}>
                                    View Transaction History <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Highlights */}
            <div className="row mt-2">
                <div className="col-12">
                    <div className="cms-card border-0 shadow-sm p-4 bg-primary text-white" style={{ background: 'linear-gradient(45deg, #4c9789, #3a7369)', borderRadius: '15px' }}>
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h4 className="font-weight-bold">Your Impact in Action</h4>
                                <p className="mb-0 text-white-50">You have helped provide education for 5 girls and business capital for 7 women entrepreneurs this year. Thank you for your continued support!</p>
                            </div>
                            <div className="col-md-4 text-md-right mt-3 mt-md-0">
                                <button className="btn btn-light px-4 py-2 font-weight-bold text-primary rounded-pill">View Impact Reports</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPlaceholder = (title: string) => (
        <div className="p-5 text-center">
            <h5 className="font-weight-bold">{title}</h5>
            <p className="text-muted">This section is being prepared with your donation data.</p>
        </div>
    );

    const renderView = () => {
        switch (activeView) {
            case 'donations': return renderPlaceholder('Full Donation History');
            case 'reports': return renderPlaceholder('Impact Reports');
            case 'settings': return renderPlaceholder('Account & Notification Settings');
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
                        activeView === 'overview' ? 'Donor Portal Overview' :
                            activeView.charAt(0).toUpperCase() + activeView.slice(1)
                    }
                    onToggleSidebar={() => setIsSidebarOpen(true)}
                />
                {renderView()}
            </div>
        </div>
    );
}
