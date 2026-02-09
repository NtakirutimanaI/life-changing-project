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
    Layout,
    DollarSign,
    Search,
    Filter,
    MoreVertical,
    Calendar,
    X
} from 'lucide-react';

export function ContentView() {
    const [activeTab, setActiveTab] = useState('programs');
    const [searchTerm, setSearchTerm] = useState('');
    const [storySearchTerm, setStorySearchTerm] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const filteredPrograms = mockPrograms.filter(p =>
        p.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mockStories = [
        { id: 1, title: 'Transforming Lives in Bugesera', author: 'Admin', date: 'Oct 12, 2023', img: '/images/image_1.jpg' }
    ];

    const filteredStories = mockStories.filter(s =>
        s.title.toLowerCase().includes(storySearchTerm.toLowerCase()) ||
        s.author.toLowerCase().includes(storySearchTerm.toLowerCase())
    );

    const renderPrograms = () => {
        const totalPrograms = filteredPrograms.length;
        const totalBudget = filteredPrograms.reduce((sum, p) => sum + p.budget, 0);
        const totalUtilized = filteredPrograms.reduce((sum, p) => sum + p.fundsUtilized, 0);

        if (showAddForm) {
            return (
                <div className="cms-card shadow-sm">
                    <div className="cms-card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="font-weight-bold mb-0 text-accent">Create New Program</h5>
                            <p className="small text-muted mb-0">Fill in the details to launch a new initiative.</p>
                        </div>
                        <button className="btn btn-link text-muted" onClick={() => setShowAddForm(false)}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-4">
                        <form onSubmit={(e) => { e.preventDefault(); toast.success('Program created successfully!'); setShowAddForm(false); }}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group mb-4">
                                        <label className="font-weight-bold x-small text-uppercase text-muted">Program Title</label>
                                        <input type="text" className="form-control form-control-custom" placeholder="e.g. She Can Code" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="font-weight-bold x-small text-uppercase text-muted">Description</label>
                                        <textarea className="form-control form-control-custom" rows={4} placeholder="Describe the program objectives and impact..." required></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="font-weight-bold x-small text-uppercase text-muted">Category</label>
                                                <select className="form-control form-control-custom">
                                                    <option>Education</option>
                                                    <option>Entrepreneurship</option>
                                                    <option>Health</option>
                                                    <option>Cross-Cutting</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="font-weight-bold x-small text-uppercase text-muted">Budget ($)</label>
                                                <input type="number" className="form-control form-control-custom" placeholder="e.g. 50000" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="font-weight-bold x-small text-uppercase text-muted">Beneficiary Target</label>
                                                <input type="number" className="form-control form-control-custom" placeholder="e.g. 100" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="font-weight-bold x-small text-uppercase text-muted">Start Date</label>
                                                <input type="date" className="form-control form-control-custom" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-4">
                                        <label className="font-weight-bold x-small text-uppercase text-muted">Cover Image</label>
                                        <div className="border rounded-lg d-flex flex-column align-items-center justify-content-center bg-light transition-all hover-bg-white cursor-pointer" style={{ height: '200px', borderStyle: 'dashed' }}>
                                            <Upload size={32} className="text-muted mb-2" />
                                            <span className="small text-muted">Upload cover image</span>
                                            <span className="x-small text-muted mt-1">1080 x 720 recommended</span>
                                        </div>
                                    </div>
                                    <div className="cms-card p-3 bg-light border-0">
                                        <h6 className="font-weight-bold small mb-2">SDG Alignment</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {[1, 2, 3, 4, 5, 8, 10, 17].map(num => (
                                                <div key={num} className="bg-white border rounded px-2 py-1 x-small font-weight-bold cursor-pointer hover-bg-primary hover-text-white transition-all">SDG {num}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-end gap-3">
                                <button type="button" className="btn btn-light px-4 font-weight-bold" onClick={() => setShowAddForm(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary px-5 font-weight-bold">Create Program</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {/* Summary Stats */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="cms-card p-4 h-100 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-muted x-small font-weight-bold text-uppercase mb-1">Active Programs</div>
                                <div className="h3 font-weight-bold mb-0 text-accent">{totalPrograms}</div>
                            </div>
                            <div className="bg-light rounded p-2 text-primary">
                                <Calendar size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cms-card p-4 h-100 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-muted x-small font-weight-bold text-uppercase mb-1">Total Budget</div>
                                <div className="h3 font-weight-bold mb-0">${totalBudget.toLocaleString()}</div>
                            </div>
                            <div className="bg-light rounded p-2 text-success">
                                <DollarSign size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cms-card p-4 h-100 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-muted x-small font-weight-bold text-uppercase mb-1">Funds Utilized</div>
                                <div className="h3 font-weight-bold mb-0">${totalUtilized.toLocaleString()}</div>
                            </div>
                            <div className="bg-light rounded p-2 text-warning">
                                <DollarSign size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cms-card mb-4">
                    <div className="cms-card-header">
                        <h5 className="font-weight-bold mb-0 text-accent d-flex align-items-center">
                            <Target size={18} className="mr-2" /> Active Programs & Causes
                        </h5>
                        <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => setShowAddForm(true)}>
                            <Plus size={14} className="mr-1" /> New Program
                        </button>
                    </div>
                    <div className="p-3 border-bottom">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="position-relative">
                                    <Search size={16} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <input
                                        type="text"
                                        className="form-control form-control-custom pl-5"
                                        placeholder="Search programs..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {filteredPrograms.length === 0 ? (
                        <div className="col-12">
                            <div className="cms-card p-5 text-center text-muted">No programs match your search.</div>
                        </div>
                    ) : (
                        filteredPrograms.map(p => {
                            const reached = 65; // Simulated data
                            const target = p.id === 'p1' ? 100 : p.id === 'p2' ? 100 : 1000;
                            const reachedPercent = (reached / target) * 100;
                            const budgetPercent = (p.fundsUtilized / p.budget) * 100;

                            // Formatting dates slightly differently for visual match
                            const startDateStr = p.createdAt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

                            return (
                                <div key={p.id} className="col-md-6 col-lg-4 mb-4">
                                    <div className="cms-card h-100 overflow-hidden border-0 shadow-sm program-card-modern">
                                        <div className="position-relative">
                                            <img src={p.coverImage || ''} className="w-100" style={{ height: '200px', objectFit: 'cover' }} alt={p.name.en} />
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div className="d-flex gap-2">
                                                    <span className="badge badge-pill px-3 py-1 text-primary" style={{ backgroundColor: '#eef4ff', fontSize: '11px', textTransform: 'lowercase' }}>{p.category}</span>
                                                    <span className="badge badge-pill px-3 py-1 text-success" style={{ backgroundColor: '#ecfdf5', fontSize: '11px', textTransform: 'lowercase' }}>{p.status}</span>
                                                </div>
                                                <button className="btn btn-link text-muted p-0"><MoreVertical size={18} /></button>
                                            </div>
                                            <h5 className="font-weight-bold mb-2">{p.name.en}</h5>
                                            <p className="small text-muted mb-4" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {p.description.en}
                                            </p>

                                            <div className="mb-4">
                                                <div className="d-flex justify-content-between x-small text-muted font-weight-bold mb-1">
                                                    <span>Beneficiaries Reached</span>
                                                    <span>{reached} / {target}</span>
                                                </div>
                                                <div className="progress" style={{ height: '6px', borderRadius: '3px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: `${reachedPercent}%`, background: '#4c9789' }}></div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="d-flex justify-content-between x-small text-muted font-weight-bold mb-1">
                                                    <span>Budget Utilization</span>
                                                    <span>${p.fundsUtilized.toLocaleString()} / ${p.budget.toLocaleString()}</span>
                                                </div>
                                                <div className="progress" style={{ height: '6px', borderRadius: '3px' }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: `${budgetPercent}%`, background: '#4c9789' }}></div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label className="x-small text-muted font-weight-bold text-uppercase d-block mb-1">Start Date</label>
                                                <div className="small font-weight-bold">{startDateStr}</div>
                                            </div>

                                            <button className="btn btn-outline-light btn-block text-dark border py-2 small font-weight-bold transition-all hover-bg-light">
                                                View Program Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        );
    };

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
            <div className="p-3 border-bottom">
                <div className="row">
                    <div className="col-md-8">
                        <div className="position-relative">
                            <Search size={16} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                className="form-control form-control-custom pl-5"
                                placeholder="Search stories..."
                                value={storySearchTerm}
                                onChange={(e) => setStorySearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <Filter size={14} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <select className="form-control form-control-custom pl-5">
                                <option>All Categories</option>
                                <option>Impact Stories</option>
                                <option>News & Updates</option>
                            </select>
                        </div>
                    </div>
                </div>
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
                        {filteredStories.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-muted">No stories match your search.</td>
                            </tr>
                        ) : (
                            filteredStories.map(s => (
                                <tr key={s.id}>
                                    <td><img src={s.img} className="content-img" alt="" /></td>
                                    <td>
                                        <h6 className="font-weight-bold mb-0">{s.title}</h6>
                                        <small className="text-muted">Impact Story</small>
                                    </td>
                                    <td>{s.author}</td>
                                    <td>{s.date}</td>
                                    <td>
                                        <button className="btn-action btn-edit mr-2">
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="btn-action btn-delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
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
            <div className="p-3 border-bottom">
                <div className="row">
                    <div className="col-md-8">
                        <div className="position-relative">
                            <Search size={16} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                className="form-control form-control-custom pl-5"
                                placeholder="Search team members..."
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <Filter size={14} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <select className="form-control form-control-custom pl-5">
                                <option>All Roles</option>
                                <option>Management</option>
                                <option>Board</option>
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>
                </div>
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
        </div >
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
            <div className="p-3 border-bottom">
                <div className="row">
                    <div className="col-md-8">
                        <div className="position-relative">
                            <Search size={16} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                className="form-control form-control-custom pl-5"
                                placeholder="Search partners..."
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <Filter size={14} className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <select className="form-control form-control-custom pl-5">
                                <option>All Types</option>
                                <option>Gold Sponsor</option>
                                <option>Program Partner</option>
                                <option>Technical Partner</option>
                            </select>
                        </div>
                    </div>
                </div>
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
                        <input type="text" className="form-control form-control-custom" defaultValue="We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities." />
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
