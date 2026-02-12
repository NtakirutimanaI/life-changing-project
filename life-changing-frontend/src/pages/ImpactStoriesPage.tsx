import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ImpactStoriesPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>Impact & Stories</span></p>
                            <h1 className="mb-4 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Transforming Lives,
                                Building Futures</h1>
                            <p className="mb-5 text-white" style={{ fontSize: '1.2rem' }}>Every statistic represents a life changed. Every number
                                tells a story of resilience, growth, and empowerment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center ftco-animate">
                            <span className="badge px-4 py-2 mb-4" style={{
                                backgroundColor: '#4FB1A1',
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                borderRadius: '25px',
                                textTransform: 'none',
                                letterSpacing: '0.5px'
                            }}>
                                Impact & Stories
                            </span>
                            <h1 className="mb-4 font-weight-bold" style={{ fontSize: '48px', lineHeight: '1.2', color: '#111' }}>
                                Transforming Lives, Building Futures
                            </h1>
                            <p className="lead" style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                                Every statistic represents a life changed. Every number tells a story of resilience, growth, and empowerment. See the real impact of LCEO's work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Impact</h2>
                            <p>Measurable change across education, entrepreneurship, and empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-people" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>5,000+</h3>
                                <span className="position mb-2 d-block">Reached & Empowered</span>
                                <p className="small text-muted">Vulnerable young women and girls supported through our core programs.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-school" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>1,200+</h3>
                                <span className="position mb-2 d-block">Girls stayed in school</span>
                                <p className="small text-muted">Girls supported to remain in school through facilitation and protection.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-business_center" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>450+</h3>
                                <span className="position mb-2 d-block">Businesses launched</span>
                                <p className="small text-muted">Women entrepreneurs supported through IkiraroBiz graduation approach.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-star" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>300+</h3>
                                <span className="position mb-2 d-block">Change Champions trained</span>
                                <p className="small text-muted">Leaders empowered through human capital development and mindset shift.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 text-center ftco-animate">
                            <span className="badge px-4 py-2 mb-4" style={{
                                backgroundColor: '#4FB1A1',
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                borderRadius: '25px',
                                textTransform: 'none',
                                letterSpacing: '0.5px'
                            }}>
                                Global Impact
                            </span>
                            <h2 className="mb-4 font-weight-bold" style={{ fontSize: '36px', color: '#111' }}>
                                Aligned with UN Sustainable Development Goals
                            </h2>
                            <p className="text-muted" style={{ fontSize: '16px' }}>
                                Our work directly contributes to achieving the global 2030 Agenda
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        1
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>No Poverty</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>78%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '78%', backgroundColor: '#4FB1A1' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        3
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>Good Health and Well-being</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>85%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: '#4FB1A1' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        4
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>Quality Education</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>92%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '92%', backgroundColor: '#4FB1A1' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        5
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>Gender Equality</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>88%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '88%', backgroundColor: '#4FB1A1' }} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        8
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>Decent Work and Economic Growth</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>75%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '75%', backgroundColor: '#4FB1A1' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm rounded h-100">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                        style={{ width: '60px', height: '60px', backgroundColor: '#4FB1A1', color: '#fff', fontSize: '24px', fontWeight: 'bold', flexShrink: 0 }}>
                                        10
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-weight-bold mb-1" style={{ fontSize: '16px' }}>Reduced Inequalities</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="small text-muted">Progress</span>
                                            <span className="font-weight-bold" style={{ color: '#4FB1A1' }}>82%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '82%', backgroundColor: '#4FB1A1' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="ftco-section pb-0">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Program Performance</h2>
                            <p>Tracking key performance indicators across all program areas.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-light shadow-sm border-top" style={{ borderTop: '5px solid #4FB1A1 !important' }}>
                                <h4 className="font-weight-bold mb-4" style={{ color: '#4FB1A1' }}>Education</h4>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">School retention rate</span>
                                        <span className="font-weight-bold">94%</span>
                                    </div>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '94%', background: '#4FB1A1' }}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Secondary completion</span>
                                        <span className="font-weight-bold">87%</span>
                                    </div>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '87%', background: '#4FB1A1' }}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Pad boxes distributed</span>
                                        <span className="font-weight-bold">1,240</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-light shadow-sm border-top" style={{ borderTop: '5px solid #4FB1A1 !important' }}>
                                <h4 className="font-weight-bold mb-4" style={{ color: '#4FB1A1' }}>Economic Empowerment</h4>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Average income increase</span>
                                        <span className="font-weight-bold">210%</span>
                                    </div>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '100%', background: '#4FB1A1' }}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Business survival rate</span>
                                        <span className="font-weight-bold">82%</span>
                                    </div>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '82%', background: '#4FB1A1' }}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Jobs created</span>
                                        <span className="font-weight-bold">267</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="p-4 bg-light shadow-sm border-top" style={{ borderTop: '5px solid #4FB1A1 !important' }}>
                                <h4 className="font-weight-bold mb-4" style={{ color: '#4FB1A1' }}>Health & Protection</h4>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Safe space participation</span>
                                        <span className="font-weight-bold">95%</span>
                                    </div>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '95%', background: '#4FB1A1' }}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">SRHR sessions attended</span>
                                        <span className="font-weight-bold">2,450</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="small text-muted">Mental health support</span>
                                        <span className="font-weight-bold">312</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section pt-0 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-4 bg-light shadow-sm d-flex align-items-center">
                                <div className="mr-4">
                                    <span className="icon-heart" style={{ fontSize: '40px', color: '#4FB1A1' }}></span>
                                </div>
                                <div>
                                    <h5 className="font-weight-bold mb-2">Impact Measurement & Evaluation</h5>
                                    <p className="small text-muted mb-0">All impact data is collected through our partnership with Kobo Toolbox
                                        and verified by our Monitoring & Evaluation team. Impact metrics are updated quarterly and reviewed by
                                        external evaluators annually. We maintain rigorous standards for beneficiary privacy and transparent
                                        reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section-3 img" style={{ backgroundImage: "url(/images/bg_3.jpg)" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4 text-white">Help Us Scale Our Impact</h2>
                            <p className="text-white opacity-75">Every contribution helps us reach more girls and transform more communities.</p>
                            <p className="mt-4"><Link to="/donate" className="btn btn-primary px-5 py-3 font-weight-bold shadow">Donate Now</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
