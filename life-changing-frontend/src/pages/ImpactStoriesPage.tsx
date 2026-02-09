import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ImpactStoriesPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '400px', minHeight: '400px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '400px' }} data-scrollax-parent="true">
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

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Impact By The Numbers</h2>
                            <p>Measurable change across education, entrepreneurship, and empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-people" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>312+</h3>
                                <span className="position mb-2 d-block">Women and Girls Reached</span>
                                <p className="small text-muted">Vulnerable young women and girls supported through our core programs.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-school" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>156</h3>
                                <span className="position mb-2 d-block">Education Retention</span>
                                <p className="small text-muted">Girls supported to remain in school through facilitation and protection.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-business_center" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>89</h3>
                                <span className="position mb-2 d-block">Businesses Launched</span>
                                <p className="small text-muted">Women entrepreneurs supported through IkiraroBiz graduation approach.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="staff p-4 bg-light shadow-sm text-center w-100">
                                <div className="icon-section mb-3">
                                    <span className="icon-star" style={{ fontSize: '50px', color: '#4FB1A1' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#4FB1A1', fontSize: '2.5rem' }}>124</h3>
                                <span className="position mb-2 d-block">Change Champions</span>
                                <p className="small text-muted">Leaders empowered through human capital development and mindset shift.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Voices of Transformation</h2>
                            <p>Real stories from beneficiaries who have overcome challenges and built new futures.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff text-center p-4 bg-white shadow-sm">
                                <div className="img mb-4 mx-auto"
                                    style={{ backgroundImage: "url(/images/person_1.jpg)", width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #F6D8A2' }}>
                                </div>
                                <div className="info">
                                    <h3>Uwera Grace</h3>
                                    <span className="position d-block mb-3">IkiraroBiz Program</span>
                                    <p className="italic text-muted font-italic">"LCEO transformed my life. From struggling to survive, I now run
                                        my own tailoring business and support my younger siblings through school. The mentorship and seed
                                        capital gave me hope and opportunity."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff text-center p-4 bg-white shadow-sm">
                                <div className="img mb-4 mx-auto"
                                    style={{ backgroundImage: "url(/images/person_2.jpg)", width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #F6D8A2' }}>
                                </div>
                                <div className="info">
                                    <h3>Mukamana Sarah</h3>
                                    <span className="position d-block mb-3">School Retention Program</span>
                                    <p className="italic text-muted font-italic">"Thanks to the Pad Box Initiative and safe spaces, I can attend
                                        school with dignity. LCEO didn't just provide supplies; they gave me confidence and a supportive
                                        community."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                            <div className="staff text-center p-4 bg-white shadow-sm">
                                <div className="img mb-4 mx-auto"
                                    style={{ backgroundImage: "url(/images/person_3.jpg)", width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #F6D8A2' }}>
                                </div>
                                <div className="info">
                                    <h3>Ineza Divine</h3>
                                    <span className="position d-block mb-3">Human Capital Development</span>
                                    <p className="italic text-muted font-italic">"The mindset transformation sessions helped me heal from trauma
                                        and believe in myself again. Today, I mentor younger girls and advocate for women's rights in my
                                        community."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
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

            <section className="ftco-section bg-gradient-to-br from-[#4c9789]/5 to-[#eacfa2]/10 py-20">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Global Impact</h2>
                            <p>Aligned with UN Sustainable Development Goals – achieving the 2030 Agenda.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#e5243b' }}>1</div>
                                <p className="small mb-2 font-weight-bold">No Poverty</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '78%', background: '#e5243b' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#4c9f38' }}>3</div>
                                <p className="small mb-2 font-weight-bold">Good Health</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '85%', background: '#4c9f38' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#c5192d' }}>4</div>
                                <p className="small mb-2 font-weight-bold">Quality Education</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '92%', background: '#c5192d' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#ff3a21' }}>5</div>
                                <p className="small mb-2 font-weight-bold">Gender Equality</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '88%', background: '#ff3a21' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#a21942' }}>8</div>
                                <p className="small mb-2 font-weight-bold">Decent Work</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '75%', background: '#a21942' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 mb-4 ftco-animate">
                            <div className="p-3 border rounded shadow-sm bg-white h-100">
                                <div className="h3 font-weight-bold mb-1" style={{ color: '#dd1367' }}>10</div>
                                <p className="small mb-2 font-weight-bold">Reduced Inequalities</p>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div className="progress-bar" style={{ width: '82%', background: '#dd1367' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section pb-5">
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
        </>
    );
};
