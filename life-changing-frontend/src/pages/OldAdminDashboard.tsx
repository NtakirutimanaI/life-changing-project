import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/admin/Sidebar';
import { Topbar } from '../components/admin/Topbar';
import { BeneficiariesView } from '../components/admin/BeneficiariesView';
import { AddBeneficiaryView } from '../components/admin/AddBeneficiaryView';
import { DonorsView } from '../components/admin/DonorsView';
import { AddDonorView } from '../components/admin/AddDonorView';
import { getDashboardStats } from '../lib/mock-data';
import { useAuth } from '../lib/auth-context';
import { Navigate } from 'react-router-dom';
import { UserType } from '../lib/types';
import { ContentView } from '../components/admin/ContentView';
import { ReportsView } from '../components/admin/ReportsView';
import { FinancialView } from '../components/admin/FinancialView';
import { SettingsView } from '../components/admin/SettingsView';
import {
    Users,
    FolderOpen,
    DollarSign,
    Bookmark,
    Heart,
    TrendingUp,
    ArrowUp,
    Filter
} from 'lucide-react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';


export function AdminDashboard() {
    const { user, isLoading } = useAuth();
    const [stats, setStats] = useState<any>(null);
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // Load stats
        const data = getDashboardStats();
        setStats(data);
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (!user || user.userType !== UserType.ADMIN) {
        return <Navigate to="/login" />;
    }

    if (!stats) return <div>Loading Stats...</div>;

    const renderView = () => {
        switch (activeView) {
            case 'beneficiaries':
                return <BeneficiariesView onAdd={() => setActiveView('add-beneficiary')} />;
            case 'add-beneficiary':
                return <AddBeneficiaryView onCancel={() => setActiveView('beneficiaries')} onSuccess={() => setActiveView('beneficiaries')} />;
            case 'donors':
                return <DonorsView onAdd={() => setActiveView('add-donor')} />;
            case 'add-donor':
                return <AddDonorView onCancel={() => setActiveView('donors')} onSuccess={() => setActiveView('donors')} />;
            case 'content':
                return <ContentView />;
            case 'reports':
                return <ReportsView />;
            case 'financial':
                return <FinancialView />;
            case 'settings':
                return <SettingsView />;
            case 'overview':
            default:
                return (
                    <div className="p-2 pt-3">
                        {/* Top Stats - Row 1 */}
                        <div className="row mb-4">
                            {[
                                { title: 'Total Beneficiaries', value: stats.totalBeneficiaries, sub: '120 currently active', trend: `+ ${stats.trends.beneficiariesGrowth}% vs last month`, icon: Users, color: 'primary' },
                                { title: 'Active Programs', value: stats.activePrograms, sub: 'Across 3 categories', icon: FolderOpen, color: 'info' },
                                { title: 'Total Donations', value: `$${stats.totalDonations.toLocaleString()}`, sub: 'From 45 donors', trend: `+ ${stats.trends.donationsGrowth}% vs last month`, icon: DollarSign, color: 'success' },
                            ].map((stat, i) => (
                                <div className="col-md-4 mb-3" key={i}>
                                    <div className="cms-card shadow-sm p-3 h-100 d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="x-small text-muted mb-1 text-uppercase font-weight-bold">{stat.title}</p>
                                            <h3 className="font-weight-bold mb-0">{stat.value}</h3>
                                            <p className="x-small text-muted mb-1" >{stat.sub}</p>
                                            {stat.trend && (
                                                <p className="x-small text-success font-weight-bold mb-0">
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

                        {/* Top Stats - Row 2 */}
                        <div className="row mb-4">
                            {[
                                { title: 'Graduated', value: stats.graduatedBeneficiaries, sub: 'Successfully completed programs', trend: `+ ${stats.trends.graduatedGrowth}% vs last month`, icon: Bookmark, color: 'warning' },
                                { title: 'Active Donors', value: stats.totalDonors, sub: 'Supporting our mission', icon: Heart, color: 'danger' },
                                { title: 'Growth Rate', value: `${stats.growthRate}%`, sub: 'Month over month', trend: `+ ${stats.trends.growthRateTrend}% vs last month`, icon: TrendingUp, color: 'primary' },
                            ].map((stat, i) => (
                                <div className="col-md-4 mb-3" key={i}>
                                    <div className="cms-card shadow-sm p-3 h-100 d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="x-small text-muted mb-1 text-uppercase font-weight-bold">{stat.title}</p>
                                            <h3 className="font-weight-bold mb-0">{stat.value}</h3>
                                            <p className="x-small text-muted mb-1" >{stat.sub}</p>
                                            {stat.trend && (
                                                <p className="x-small text-success font-weight-bold mb-0">
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

                        {/* Charts Row */}
                        <div className="row mb-4">
                            <div className="col-lg-7">
                                <div className="cms-card shadow-sm h-100">
                                    <div className="cms-card-header bg-white border-0 py-4 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className="font-weight-bold mb-1">Monthly Trends</h5>
                                            <p className="small text-muted mb-0">Beneficiaries and donations over time</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-sm btn-light border-0 bg-transparent text-muted mr-2">
                                                <Filter size={16} />
                                            </button>
                                            <select className="form-control-sm border-0 bg-light small font-weight-bold" style={{ borderRadius: '8px', padding: '5px 10px' }}>
                                                <option>Last 6 Months</option>
                                                <option>Last Year</option>
                                                <option>All Time</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="p-4" style={{ height: '350px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={stats.monthlyTrends}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                                <XAxis
                                                    dataKey="month"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fill: '#6c757d', fontSize: 11 }}
                                                />
                                                <YAxis
                                                    yAxisId="left"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fill: '#4c9789', fontSize: 11 }}
                                                />
                                                <YAxis
                                                    yAxisId="right"
                                                    orientation="right"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fill: '#eacfa2', fontSize: 11 }}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        borderRadius: '10px',
                                                        border: 'none',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                                    }}
                                                />
                                                <Legend
                                                    verticalAlign="bottom"
                                                    height={36}
                                                    iconType="circle"
                                                    wrapperStyle={{ paddingTop: '20px' }}
                                                />
                                                <Line
                                                    yAxisId="left"
                                                    type="monotone"
                                                    dataKey="beneficiaries"
                                                    name="Beneficiaries"
                                                    stroke="#4c9789"
                                                    strokeWidth={2}
                                                    dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                                                    activeDot={{ r: 6 }}
                                                />
                                                <Line
                                                    yAxisId="right"
                                                    type="monotone"
                                                    dataKey="donations"
                                                    name="Donations ($)"
                                                    stroke="#eacfa2"
                                                    strokeWidth={2}
                                                    dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                                                    activeDot={{ r: 6 }}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="cms-card shadow-sm h-100">
                                    <div className="cms-card-header bg-white border-0 py-4 px-4">
                                        <div>
                                            <h5 className="font-weight-bold mb-1">Program Distribution</h5>
                                            <p className="small text-muted mb-0">Beneficiaries by program category</p>
                                        </div>
                                    </div>
                                    <div className="p-4" style={{ height: '350px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={[
                                                        { name: 'Education', value: 127, color: '#4c9789' },
                                                        { name: 'Entrepreneurship', value: 85, color: '#eacfa2' },
                                                        { name: 'Health', value: 175, color: '#6fb3a6' },
                                                        { name: 'Cross-Cutting', value: 45, color: '#3a7369' },
                                                    ]}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={100}
                                                    dataKey="value"
                                                    label={({ name, value }) => `${name}: ${value}`}
                                                >
                                                    {[
                                                        { name: 'Education', color: '#4c9789' },
                                                        { name: 'Entrepreneurship', color: '#eacfa2' },
                                                        { name: 'Health', color: '#6fb3a6' },
                                                        { name: 'Cross-Cutting', color: '#3a7369' },
                                                    ].map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                        {/* External Legend for cleaner look if labels overlap */}
                                        <div className="d-flex flex-wrap justify-content-center mt-2">
                                            {[
                                                { name: 'Education', color: '#4c9789' },
                                                { name: 'Entrepreneurship', color: '#eacfa2' },
                                                { name: 'Health', color: '#6fb3a6' },
                                                { name: 'Cross-Cutting', color: '#3a7369' },
                                            ].map((item, i) => (
                                                <div key={i} className="d-flex align-items-center mx-2 mb-2">
                                                    <span className="mr-1 rounded-circle" style={{ width: '10px', height: '10px', background: item.color, display: 'inline-block' }}></span>
                                                    <span className="x-small text-muted font-weight-bold">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <div className="cms-card shadow-sm">
                                    <div className="cms-card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-weight-bold mb-0">Recent Donors</h6>
                                            <p className="x-small text-muted mb-0">Latest registered donors</p>
                                        </div>
                                        <button onClick={() => setActiveView('donors')} className="btn btn-sm btn-outline-light text-dark px-3 py-1 bg-white border transition-all shadow-sm rounded">View All</button>
                                    </div>
                                    <div className="table-responsive px-2">
                                        <table className="table cms-table mb-0">
                                            <thead className="small uppercase">
                                                <tr>
                                                    <th className="border-0 bg-white text-muted">Name</th>
                                                    <th className="border-0 bg-white text-muted">Country</th>
                                                    <th className="border-0 bg-white text-muted">Total Donated</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-top">
                                                    <td className="small font-weight-bold py-3 pl-4">Robert Donor</td>
                                                    <td className="small text-muted py-3">USA</td>
                                                    <td className="small font-weight-bold text-accent py-3 pr-4">$1,500</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cms-card shadow-sm">
                                    <div className="cms-card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-weight-bold mb-0">Active Programs</h6>
                                            <p className="x-small text-muted mb-0">Current program status</p>
                                        </div>
                                        <button onClick={() => setActiveView('content')} className="btn btn-sm btn-outline-light text-dark px-3 mt-1 py-1 bg-white border shadow-sm rounded">Manage</button>
                                    </div>
                                    <div className="px-4 py-3">
                                        {[
                                            { name: 'She Can Code', cat: 'education', util: 30, color: '#007bff' },
                                            { name: 'Business Incubation', cat: 'entrepreneurship', util: 27, color: '#28a745' },
                                            { name: 'Community Health', cat: 'health', util: 40, color: '#dc3545' },
                                        ].map((p, i) => (
                                            <div key={i} className="mb-3 p-3 border rounded-lg bg-white shadow-soft">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="font-weight-bold mb-0 small">{p.name} <span className={`badge ml-2 px-2 badge-${p.cat === 'education' ? 'primary-light text-primary' : p.cat === 'entrepreneurship' ? 'success-light text-success' : 'danger-light text-danger'} x-small`}>{p.cat}</span></h6>
                                                </div>
                                                <div className="x-small text-muted font-weight-bold mb-1">Funds Utilized: {p.util}%</div>
                                                <div className="progress" style={{ height: '4px', background: '#f0f0f0' }}>
                                                    <div className="progress-bar" style={{ width: `${p.util}%`, background: '#4c9789' }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Beneficiaries - Full Width */}
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="cms-card shadow-sm">
                                    <div className="cms-card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-weight-bold mb-0">Recent Beneficiaries</h6>
                                            <p className="x-small text-muted mb-0">Newly enrolled beneficiaries</p>
                                        </div>
                                        <button onClick={() => setActiveView('beneficiaries')} className="btn btn-sm btn-outline-light text-dark px-3 py-1 bg-white border shadow-sm rounded">View All</button>
                                    </div>
                                    <div className="table-responsive px-2">
                                        <table className="table cms-table mb-0">
                                            <thead>
                                                <tr className="small text-muted uppercase">
                                                    <th className="border-0 bg-white pl-4">Name</th>
                                                    <th className="border-0 bg-white">Location</th>
                                                    <th className="border-0 bg-white">Program</th>
                                                    <th className="border-0 bg-white">Enrollment Date</th>
                                                    <th className="border-0 bg-white pr-4">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-top">
                                                    <td className="small font-weight-bold py-3 pl-4">Ineza Keza</td>
                                                    <td className="small text-muted py-3">Kacyiru, Gasabo</td>
                                                    <td className="small text-muted py-3">Business Incubation</td>
                                                    <td className="small text-muted py-3">Mar 9, 2023</td>
                                                    <td className="py-3 pr-4"><span className="badge badge-success-light text-success px-3 rounded-pill py-1 x-small font-weight-bold">active</span></td>
                                                </tr>
                                                <tr className="border-top">
                                                    <td className="small font-weight-bold py-3 pl-4">Aline Uwase</td>
                                                    <td className="small text-muted py-3">Nyamirambo, Nyarugenge</td>
                                                    <td className="small text-muted py-3">She Can Code</td>
                                                    <td className="small text-muted py-3">Jan 9, 2023</td>
                                                    <td className="py-3 pr-4"><span className="badge badge-warning-light text-warning px-3 rounded-pill py-1 x-small font-weight-bold">graduated</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', position: 'relative' }}>
            <Sidebar
                activeView={activeView}
                onViewChange={setActiveView}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <div className="main-content">
                <Topbar
                    title={
                        activeView === 'overview' ? 'Dashboard Overview' :
                            activeView === 'add-beneficiary' ? 'Add Beneficiary' :
                                activeView === 'add-donor' ? 'Add Donor' :
                                    activeView.charAt(0).toUpperCase() + activeView.slice(1)
                    }
                    onToggleSidebar={() => setIsSidebarOpen(true)}
                />
                {renderView()}
            </div>
        </div>
    );
}
