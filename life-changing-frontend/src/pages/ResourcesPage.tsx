import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ResourcesPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>Resources</span></p>
                            <h1 className="mb-4 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Reports, Research &
                                Media</h1>
                            <p className="text-white mb-5" style={{ fontSize: '1.2rem' }}>Access our latest impact reports, program briefs, and
                                multimedia content showcasing our work across Rwanda.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h2 className="font-weight-bold mb-4"
                                style={{ color: '#4FB1A1', borderBottom: '2px solid #4FB1A1', display: 'inline-block', paddingBottom: '5px' }}>Annual
                                Reports</h2>
                            <div className="row mt-4">
                                <div className="col-md-4 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm text-center h-100 border rounded">
                                        <div className="icon-section mb-3">
                                            <span className="icon-file-text" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <h5 className="font-weight-bold">2024 Annual Impact Report</h5>
                                        <p className="small text-muted mb-3">PDF • 2.4 MB • Feb 2025</p>
                                        <a href="#" className="btn btn-primary px-3 py-2 small">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm text-center h-100 border rounded">
                                        <div className="icon-section mb-3">
                                            <span className="icon-file-text" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <h5 className="font-weight-bold">2023 Annual Report</h5>
                                        <p className="small text-muted mb-3">PDF • 2.1 MB • Jan 2024</p>
                                        <a href="#" className="btn btn-primary px-3 py-2 small">Download</a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm text-center h-100 border rounded">
                                        <div className="icon-section mb-3">
                                            <span className="icon-file-text" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <h5 className="font-weight-bold">2022 Year in Review</h5>
                                        <p className="small text-muted mb-3">PDF • 1.8 MB • Jan 2023</p>
                                        <a href="#" className="btn btn-primary px-3 py-2 small">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h2 className="font-weight-bold mb-4"
                                style={{ color: '#4FB1A1', borderBottom: '2px solid #4FB1A1', display: 'inline-block', paddingBottom: '5px' }}>
                                Program Briefs & Research</h2>
                            <div className="row mt-4">
                                <div className="col-md-6 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm d-flex align-items-center border rounded h-100">
                                        <div className="icon mr-4">
                                            <span className="icon-book" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <div>
                                            <h6 className="font-weight-bold mb-1">IkiraroBiz Entrepreneurship Model</h6>
                                            <p className="small text-muted mb-2">Jan 2025 • PDF • 1.2 MB</p>
                                            <a href="#" className="small font-weight-bold" style={{ color: '#4FB1A1' }}>Download Case Study →</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm d-flex align-items-center border rounded h-100">
                                        <div className="icon mr-4">
                                            <span className="icon-book" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <div>
                                            <h6 className="font-weight-bold mb-1">Gender-Transformative Change in Rwanda</h6>
                                            <p className="small text-muted mb-2">Dec 2024 • PDF • 3.2 MB</p>
                                            <a href="#" className="small font-weight-bold" style={{ color: '#4FB1A1' }}>Download Publication →</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm d-flex align-items-center border rounded h-100">
                                        <div className="icon mr-4">
                                            <span className="icon-book" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <div>
                                            <h6 className="font-weight-bold mb-1">Girls School Retention Strategy</h6>
                                            <p className="small text-muted mb-2">Dec 2024 • PDF • 980 KB</p>
                                            <a href="#" className="small font-weight-bold" style={{ color: '#4FB1A1' }}>Download Strategy →</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 ftco-animate">
                                    <div className="p-4 bg-light shadow-sm d-flex align-items-center border rounded h-100">
                                        <div className="icon mr-4">
                                            <span className="icon-book" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                        </div>
                                        <div>
                                            <h6 className="font-weight-bold mb-1">Mental Resilience & Mindset Shift</h6>
                                            <p className="small text-muted mb-2">Jun 2024 • PDF • 2.1 MB</p>
                                            <a href="#" className="small font-weight-bold" style={{ color: '#4FB1A1' }}>Download Report →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Upcoming Events & Activities</h2>
                            <p>Join us at our upcoming events and see our programs in action.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm border rounded h-100">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="icon bg-light p-3 rounded-circle mr-3">
                                        <span className="icon-calendar" style={{ fontSize: '24px', color: '#4FB1A1' }}></span>
                                    </div>
                                    <span className="badge badge-warning text-dark uppercase p-2">Stakeholder</span>
                                </div>
                                <h5 className="font-weight-bold mb-3">Annual Stakeholder Meeting</h5>
                                <p className="small text-muted mb-1"><span className="icon-calendar mr-2"></span>March 15, 2025</p>
                                <p className="small text-muted mb-1"><span class="icon-clock-o mr-2"></span>10:00 AM - 2:00 PM</p>
                                <p className="small text-muted mb-3"><span className="icon-map-marker mr-2"></span>Bugesera District Office</p>
                                <Link to="/contact" className="btn btn-outline-primary btn-block">Register Interest</Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm border rounded h-100">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="icon bg-light p-3 rounded-circle mr-3">
                                        <span className="icon-calendar" style={{ fontSize: '24px', color: '#4FB1A1' }}></span>
                                    </div>
                                    <span className="badge badge-success uppercase p-2">Community</span>
                                </div>
                                <h5 className="font-weight-bold mb-3">IkiraroBiz Graduation Ceremony</h5>
                                <p className="small text-muted mb-1"><span className="icon-calendar mr-2"></span>April 22, 2025</p>
                                <p className="small text-muted mb-1"><span class="icon-clock-o mr-2"></span>9:00 AM - 12:00 PM</p>
                                <p className="small text-muted mb-3"><span className="icon-map-marker mr-2"></span>Nyamata Community Center</p>
                                <Link to="/contact" className="btn btn-outline-primary btn-block">Register Interest</Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm border rounded h-100">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="icon bg-light p-3 rounded-circle mr-3">
                                        <span className="icon-calendar" style={{ fontSize: '24px', color: '#4FB1A1' }}></span>
                                    </div>
                                    <span className="badge badge-primary uppercase p-2">Program</span>
                                </div>
                                <h5 className="font-weight-bold mb-3">Girls Empowerment Workshop</h5>
                                <p className="small text-muted mb-1"><span className="icon-calendar mr-2"></span>May 8, 2025</p>
                                <p className="small text-muted mb-1"><span class="icon-clock-o mr-2"></span>2:00 PM - 5:00 PM</p>
                                <p className="small text-muted mb-3"><span className="icon-map-marker mr-2"></span>Safe Space Centers</p>
                                <Link to="/contact" className="btn btn-outline-primary btn-block">Register Interest</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-5 bg-light shadow-sm text-center border rounded">
                                <h3 className="font-weight-bold mb-3">Stay Informed</h3>
                                <p className="mb-4">Subscribe to receive new resources, reports, and event notifications directly to your inbox.
                                </p>
                                <form action="#" className="subscribe-form d-flex justify-content-center">
                                    <div className="form-group d-flex w-50">
                                        <input type="text" className="form-control" placeholder="Enter email address"
                                            style={{ borderRadius: '8px 0 0 8px' }} />
                                        <input type="submit" value="Subscribe" className="btn btn-primary px-4" style={{ borderRadius: '0 8px 8px 0' }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Partners</h2>
                            <p>We work alongside global and national organizations to scale our impact.</p>
                        </div>
                    </div>
                    <div id="partners-container" className="row partner-wrap">
                        {/* Dynamically populated */}
                    </div>
                </div>
            </section>
        </>
    );
};
