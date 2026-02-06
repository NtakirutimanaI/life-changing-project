import React, { useState } from 'react';
import { mockPrograms } from '../../lib/mock-data';
import { toast } from 'sonner';
import {
    Plus,
    EyeOff,
    Edit2,
    Trash2,
    Upload,
    Image as ImageIcon,
    Target,
    BookOpen,
    Users,
    Settings,
    Layout
} from 'lucide-react';

export function ContentView() {
    const [activeTab, setActiveTab] = useState('programs');

    const renderPrograms = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <Target size={18} className="mr-2" /> Active Programs & Causes
                </h5>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => toast.info('Add Program feature coming soon!')}>
                    <Plus size={14} className="mr-1" /> New Program
                </button>
            </div>
            <div className="table-responsive">
                <table className="table cms-table">
                    <thead>
                        <tr>
                            <th>Banner</th>
                            <th>Program Title</th>
                            <th>Raised / Target</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPrograms.map(p => (
                            <tr key={p.id}>
                                <td><img src={`/images/cause-${(mockPrograms.indexOf(p) % 3) + 1}.jpg`} className="content-img" alt="" /></td>
                                <td>
                                    <h6 className="font-weight-bold mb-0">{p.name.en}</h6>
                                    <small className="text-muted">{p.category || 'Initiative'}</small>
                                </td>
                                <td>$12,000 / $25,000</td>
                                <td><span className="badge badge-pill badge-success">Published</span></td>
                                <td>
                                    <button className="btn-action btn-status mr-2" title="Unpublish">
                                        <EyeOff size={16} />
                                    </button>
                                    <button className="btn-action btn-edit mr-2" title="Edit">
                                        <Edit2 size={16} />
                                    </button>
                                    <button className="btn-action btn-delete" title="Delete">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderStories = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <BookOpen size={18} className="mr-2" /> Impact Stories & Blog
                </h5>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => toast.info('Create Story feature coming soon!')}>
                    <Plus size={14} className="mr-1" /> New Story
                </button>
            </div>
            <div className="table-responsive">
                <table className="table cms-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Story Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="/images/image_1.jpg" className="content-img" alt="" /></td>
                            <td>
                                <h6 className="font-weight-bold mb-0">Transforming Lives in Bugesera</h6>
                                <small className="text-muted">A deep dive into local impact...</small>
                            </td>
                            <td>Admin</td>
                            <td>Oct 12, 2023</td>
                            <td>
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

    const renderTeam = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <Users size={18} className="mr-2" /> Our Team & Board Members
                </h5>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => toast.info('Add Team Member feature coming soon!')}>
                    <Plus size={14} className="mr-1" /> Add Member
                </button>
            </div>
            <div className="table-responsive">
                <table className="table cms-table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="/images/person_1.jpg" className="content-img rounded-circle" alt="" /></td>
                            <td><h6 className="font-weight-bold mb-0">Jane Doe</h6></td>
                            <td>Executive Director</td>
                            <td><span className="badge badge-pill badge-success">Active</span></td>
                            <td>
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

    const renderPartners = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <ImageIcon size={18} className="mr-2" /> Partners & Sponsors
                </h5>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => toast.info('Add Partner feature coming soon!')}>
                    <Plus size={14} className="mr-1" /> Add Partner
                </button>
            </div>
            <div className="table-responsive">
                <table className="table cms-table">
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Partner Name</th>
                            <th>Website</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Global Impact Fund', url: 'www.globalimpact.org' },
                            { name: 'Rwanda Tech Council', url: 'www.rtc.rw' },
                        ].map((p, i) => (
                            <tr key={i}>
                                <td><div className="bg-light p-2 rounded text-center font-weight-bold text-muted" style={{ width: '60px' }}>LOG.</div></td>
                                <td><h6 className="font-weight-bold mb-0">{p.name}</h6></td>
                                <td>{p.url}</td>
                                <td><span className="badge badge-pill badge-success">Active</span></td>
                                <td>
                                    <button className="btn-action btn-edit mr-2">
                                        <Edit2 size={16} />
                                    </button>
                                    <button className="btn-action btn-delete">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderGallery = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <ImageIcon size={18} className="mr-2" /> Media Gallery
                </h5>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => toast.info('Upload feature coming soon!')}>
                    <Upload size={14} className="mr-1" /> Upload Media
                </button>
            </div>
            <div className="p-4">
                <div className="row">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="col-md-2 col-sm-4 mb-4">
                            <div className="position-relative gallery-item">
                                <img src={`/images/image_${i}.jpg`} className="img-fluid rounded shadow-sm" style={{ height: '100px', width: '100%', objectFit: 'cover' }} alt="" />
                                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                                    <button className="btn btn-sm btn-danger btn-circle" onClick={() => toast.error('Check your permissions to delete.')}>
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSiteSettings = () => (
        <div className="cms-card">
            <div className="cms-card-header">
                <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                    <Settings size={18} className="mr-2" /> Static Page Content & Site Settings
                </h5>
            </div>
            <div className="p-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Hero Title</label>
                        <input type="text" className="form-control form-control-custom" defaultValue="Unlocking Potential, Empowering lives" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Hero Subtitle</label>
                        <input type="text" className="form-control form-control-custom" defaultValue="Transforming the lives of vulnerable young women and girls in Rwanda." />
                    </div>
                    <div className="col-12 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Mission Statement (Homepage)</label>
                        <textarea className="form-control form-control-custom" rows={3} defaultValue="To walk alongside girls and women as they heal, grow and thrive- through mindset shift and mental resilience, education and economic empowered." />
                    </div>
                    <div className="col-12 mb-4 mt-2">
                        <h6 className="font-weight-bold text-muted small text-uppercase border-bottom pb-2">Footer & Contact Settings</h6>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Email Address</label>
                        <input type="email" className="form-control form-control-custom" defaultValue="info@lceo.org" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Phone Number</label>
                        <input type="text" className="form-control form-control-custom" defaultValue="+250 888 888 888" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="font-weight-bold small text-uppercase text-muted">Location</label>
                        <input type="text" className="form-control form-control-custom" defaultValue="Bugesera District, Rwanda" />
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-primary px-5 py-2 font-weight-bold" onClick={() => toast.success('Site settings updated!')}>Update Site Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <ul className="nav nav-tabs nav-tabs-custom mb-4 scrollable-nav">
                {[
                    { id: 'programs', label: 'Programs' },
                    { id: 'stories', label: 'Stories' },
                    { id: 'team', label: 'Team' },
                    { id: 'gallery', label: 'Gallery' },
                    { id: 'partners', label: 'Partners' },
                    { id: 'settings', label: 'Site Settings' },
                ].map(tab => (
                    <li className="nav-item" key={tab.id}>
                        <button className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                    </li>
                ))}
            </ul>

            <div className="tab-content">
                {activeTab === 'programs' && renderPrograms()}
                {activeTab === 'stories' && renderStories()}
                {activeTab === 'team' && renderTeam()}
                {activeTab === 'gallery' && renderGallery()}
                {activeTab === 'partners' && renderPartners()}
                {activeTab === 'settings' && renderSiteSettings()}
            </div>
        </div>
    );
}
