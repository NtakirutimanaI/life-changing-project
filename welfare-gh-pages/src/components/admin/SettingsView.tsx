import React, { useState } from 'react';
import { toast } from 'sonner';
import {
    Edit2,
    Trash2,
    UserPlus,
    Settings,
    Shield,
    Mail,
    Globe,
    Bell,
    Lock
} from 'lucide-react';

export function SettingsView() {
    const [activeTab, setActiveTab] = useState('account');

    const handleSave = (msg: string) => {
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
                loading: 'Applying changes...',
                success: msg,
                error: 'Failed to update settings.',
            }
        );
    };

    const renderAccountSettings = () => (
        <div className="p-4">
            <h6 className="font-weight-bold text-accent mb-4 d-flex align-items-center">
                <Shield size={18} className="mr-2" /> Admin Profile Settings
            </h6>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="small font-weight-bold text-muted">Full Name</label>
                    <input type="text" className="form-control form-control-custom" defaultValue="Administrator" />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="small font-weight-bold text-muted">Email Address</label>
                    <input type="email" className="form-control form-control-custom" defaultValue="admin@lceo.org" />
                </div>
                <div className="col-md-12 mb-4">
                    <label className="small font-weight-bold text-muted">Profile Biography</label>
                    <textarea className="form-control form-control-custom" rows={3}>Lead administrator for LCEO platform.</textarea>
                </div>

                <div className="col-12 mb-4">
                    <hr />
                    <h6 className="font-weight-bold text-accent mb-3 d-flex align-items-center">
                        <Lock size={18} className="mr-2" /> Security
                    </h6>
                </div>

                <div className="col-md-4 mb-3">
                    <label className="small font-weight-bold text-muted">Current Password</label>
                    <input type="password" className="form-control form-control-custom" placeholder="••••••••" />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="small font-weight-bold text-muted">New Password</label>
                    <input type="password" className="form-control form-control-custom" placeholder="••••••••" />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="small font-weight-bold text-muted">Confirm Password</label>
                    <input type="password" className="form-control form-control-custom" placeholder="••••••••" />
                </div>

                <div className="col-12 text-right mt-3">
                    <button className="btn btn-primary px-4" onClick={() => handleSave('Profile security updated!')}>Save Account Changes</button>
                </div>
            </div>
        </div>
    );

    const renderUserManagement = () => (
        <div className="p-0">
            <div className="cms-card-header border-0 px-4 pt-4 d-flex justify-content-between align-items-center mb-3">
                <h6 className="font-weight-bold text-accent mb-0">System Administrators</h6>
                <button className="btn btn-sm btn-outline-primary d-flex align-items-center" onClick={() => toast.info('Inviting new admin...')}>
                    <UserPlus size={14} className="mr-1" /> Invite Admin
                </button>
            </div>
            <div className="table-responsive">
                <table className="table cms-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Last Active</th>
                            <th>Permissions</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="font-weight-bold">Admin User</div>
                                <div className="small text-muted">admin@lceo.org</div>
                            </td>
                            <td><span className="badge badge-primary">Super Admin</span></td>
                            <td>Just now</td>
                            <td>All Access</td>
                            <td className="text-right">
                                <button className="btn-action btn-edit">
                                    <Edit2 size={16} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="font-weight-bold">Moderator Lee</div>
                                <div className="small text-muted">lee@lceo.org</div>
                            </td>
                            <td><span className="badge badge-info">Editor</span></td>
                            <td>2h ago</td>
                            <td>Content Only</td>
                            <td className="text-right">
                                <button className="btn-action btn-edit mr-2">
                                    <Edit2 size={16} />
                                </button>
                                <button className="btn-action btn-delete">
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderSystemConfig = () => (
        <div className="p-4">
            <h6 className="font-weight-bold text-accent mb-4 d-flex align-items-center">
                <Settings size={18} className="mr-2" /> Global Platform Configuration
            </h6>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="cms-card p-3 border h-100">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="maintenanceMode" />
                            <label className="custom-control-label font-weight-bold" htmlFor="maintenanceMode">Maintenance Mode</label>
                        </div>
                        <p className="text-muted small mb-0 mt-2">Disables public access to the donation and enrollment forms.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="cms-card p-3 border h-100">
                        <div className="custom-control custom-switch d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="emailNotifs" defaultChecked />
                            <label className="custom-control-label font-weight-bold d-flex align-items-center" htmlFor="emailNotifs">
                                <Bell size={14} className="mr-1" /> Email Notifications
                            </label>
                        </div>
                        <p className="text-muted small mb-0 mt-2">Send automated receipts and enrollment updates.</p>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <label className="small font-weight-bold text-muted d-flex align-items-center">
                        <Globe size={14} className="mr-1" /> Base Currency
                    </label>
                    <select className="form-control form-control-custom">
                        <option>RWF (Rwandan Franc)</option>
                        <option>USD (US Dollar)</option>
                        <option>EUR (Euro)</option>
                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label className="small font-weight-bold text-muted">Donation Processing Fee (%)</label>
                    <input type="number" className="form-control form-control-custom" defaultValue="2.5" />
                </div>

                <div className="col-12 text-right mt-4">
                    <button className="btn btn-primary px-4" onClick={() => handleSave('System configuration updated!')}>Apply System Changes</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="cms-card h-100">
            <div className="cms-card-header bg-light-soft">
                <ul className="nav nav-tabs border-0">
                    <li className="nav-item">
                        <button className={`nav-link border-0 bg-transparent ${activeTab === 'account' ? 'text-primary font-weight-bold border-bottom' : 'text-muted'}`}
                            style={{ borderBottom: activeTab === 'account' ? '2px solid var(--primary) !important' : 'none' }}
                            onClick={() => setActiveTab('account')}>My Account</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link border-0 bg-transparent ${activeTab === 'users' ? 'text-primary font-weight-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('users')}>User Management</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link border-0 bg-transparent ${activeTab === 'system' ? 'text-primary font-weight-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('system')}>System Config</button>
                    </li>
                </ul>
            </div>
            {activeTab === 'account' && renderAccountSettings()}
            {activeTab === 'users' && renderUserManagement()}
            {activeTab === 'system' && renderSystemConfig()}
        </div>
    );
}
