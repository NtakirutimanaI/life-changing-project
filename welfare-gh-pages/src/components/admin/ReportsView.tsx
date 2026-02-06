import React from 'react';
import { toast } from 'sonner';
import {
    Download,
    Wand2,
    Users,
    DollarSign,
    BarChart3,
    FileText
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';

export function ReportsView() {
    const revenueData = [
        { name: 'Jan', amount: 4000 },
        { name: 'Feb', amount: 3000 },
        { name: 'Mar', amount: 2000 },
        { name: 'Apr', amount: 2780 },
        { name: 'May', amount: 1890 },
        { name: 'Jun', amount: 2390 },
        { name: 'Jul', amount: 3490 },
    ];

    const impactData = [
        { name: 'Education', value: 85 },
        { name: 'Health', value: 65 },
        { name: 'Entrepreneurship', value: 90 },
        { name: 'Mentorship', value: 75 },
    ];

    const handleDownload = (type: string) => {
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: `Generating ${type} report...`,
                success: `${type} report downloaded successfully!`,
                error: 'Failed to generate report.',
            }
        );
    };

    return (
        <div>
            {/* Quick Actions */}
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="cms-card p-4 d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="font-weight-bold mb-1 text-accent d-flex align-items-center">
                                <FileText size={20} className="mr-2" /> Report Center
                            </h5>
                            <p className="text-muted small mb-0">Generate and export platform analytics and financial data.</p>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-primary btn-sm mr-2 d-flex align-items-center" onClick={() => handleDownload('Annual Financial')}>
                                <Download size={14} className="mr-1" /> Annual Report
                            </button>
                            <button className="btn btn-primary btn-sm d-flex align-items-center" onClick={() => handleDownload('Latest Impact')}>
                                <Wand2 size={14} className="mr-1" /> Generate Impact PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Financial Trends */}
                <div className="col-lg-8 mb-4">
                    <div className="cms-card h-100">
                        <div className="cms-card-header">
                            <h5 className="font-weight-bold mb-0 text-accent">Donation Growth (Last 6 Months)</h5>
                        </div>
                        <div className="p-4" style={{ height: '350px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6c757d' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6c757d' }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="amount" stroke="var(--primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Impact by Category */}
                <div className="col-lg-4 mb-4">
                    <div className="cms-card h-100">
                        <div className="cms-card-header">
                            <h5 className="font-weight-bold mb-0 text-accent">Programs Impact (%)</h5>
                        </div>
                        <div className="p-4" style={{ height: '350px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={impactData} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee" />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6c757d', fontWeight: 500 }}
                                        width={110}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar dataKey="value" fill="var(--secondary)" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Export Options */}
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="cms-card p-4 text-center h-100">
                        <div className="bg-light rounded-circle p-3 d-inline-block text-primary mb-3">
                            <Users size={32} />
                        </div>
                        <h6 className="font-weight-bold">Beneficiary Demographics</h6>
                        <p className="text-muted small">Location, age, and program enrollment stats.</p>
                        <button className="btn btn-outline-secondary btn-sm btn-block mt-auto" onClick={() => handleDownload('Demographics')}>Export CSV</button>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="cms-card p-4 text-center h-100">
                        <div className="bg-light rounded-circle p-3 d-inline-block text-success mb-3">
                            <DollarSign size={32} />
                        </div>
                        <h6 className="font-weight-bold">Financial Audit Log</h6>
                        <p className="text-muted small">All transactions, methods, and processing fees.</p>
                        <button className="btn btn-outline-secondary btn-sm btn-block mt-auto" onClick={() => handleDownload('Audit Log')}>Export Excel</button>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="cms-card p-4 text-center h-100">
                        <div className="bg-light rounded-circle p-3 d-inline-block text-warning mb-3">
                            <BarChart3 size={32} />
                        </div>
                        <h6 className="font-weight-bold">Goal Tracking Data</h6>
                        <p className="text-muted small">Progress vs. Target for all active initiatives.</p>
                        <button className="btn btn-outline-secondary btn-sm btn-block mt-auto" onClick={() => handleDownload('Goal Tracking')}>Export JSON</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
