import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const StrategicDirectionPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Empower a Future Today</h1>
                            <p className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.</p>

                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><Link to="/about"
                                className="btn btn-white btn-outline-white px-4 py-3">Learn More</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-counter ftco-intro" id="section-counter">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-1 align-items-stretch" style={{ padding: '15px 10px' }}>
                                <div className="text text-center">
                                    <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Women & Girls</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', whiteSpace: 'nowrap', margin: '5px 0' }}>
                                        <strong className="number" data-number="5000" style={{ fontSize: '32px' }}>0</strong>
                                        <span style={{ fontSize: '24px', color: '#000', fontWeight: 600 }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', lineHeight: '1.2' }}>Reached & Empowered</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-2 align-items-stretch" style={{ padding: '15px 10px' }}>
                                <div className="text text-center">
                                    <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Education</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', whiteSpace: 'nowrap', margin: '5px 0' }}>
                                        <strong className="number" data-number="1200" style={{ fontSize: '32px' }}>0</strong>
                                        <span style={{ fontSize: '24px', color: '#000', fontWeight: 600 }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', lineHeight: '1.2' }}>Girls stayed in school</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-3 align-items-stretch" style={{ padding: '15px 10px' }}>
                                <div className="text text-center">
                                    <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Livelihoods</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', whiteSpace: 'nowrap', margin: '5px 0' }}>
                                        <strong className="number" data-number="450" style={{ fontSize: '32px' }}>0</strong>
                                        <span style={{ fontSize: '24px', color: '#000', fontWeight: 600 }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', lineHeight: '1.2' }}>Businesses launched</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 color-4 align-items-stretch" style={{ padding: '15px 10px' }}>
                                <div className="text text-center text-white">
                                    <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', color: '#fff' }}>Leadership</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', whiteSpace: 'nowrap', margin: '5px 0' }}>
                                        <strong className="number" data-number="300" style={{ fontSize: '32px', color: '#fff' }}>0</strong>
                                        <span style={{ fontSize: '24px', color: '#fff', fontWeight: 600 }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', lineHeight: '1.2', color: '#fff' }}>Change Champions trained</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-10 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Strategic Direction</h2>
                            <p>LCEO’s strategic direction defines how we understand change, how we design our programs, and how our work
                                aligns with national and global priorities to achieve sustainable impact for girls and young women.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ftco-animate mb-5">
                            <div className="p-4 bg-light shadow-sm">
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>Our Philosophy</h3>
                                <p>LCEO believes that lasting transformation starts with mindset, identity, and mental resilience. We
                                    prioritize human capital development through integrated interventions that strengthen confidence,
                                    psychosocial wellbeing, education access, and economic empowerment. This approach enables girls and young
                                    women to pursue education, achieve economic independence, and emerge as leaders in their communities.</p>
                            </div>
                        </div>

                        <div className="col-md-12 ftco-animate mb-5">
                            <div className="p-4 bg-light shadow-sm border-left" style={{ borderLeft: '5px solid #4FB1A1 !important' }}>
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>Our Gender-Transformative Change Model</h3>
                                <p>LCEO implements its work through the <strong>Rugero Rwiza Community Change Model (RR-CCM)</strong>, a
                                    gender-transformative framework that addresses the root causes of inequality.</p>

                                <div className="row mt-4">
                                    <div className="col-md-4 mb-4">
                                        <div className="p-3 bg-white h-100 shadow-sm rounded">
                                            <h5 className="font-weight-bold">1. Individual Level</h5>
                                            <p className="small text-muted">Building agency, confidence, and skills through mindset transformation,
                                                education access, and economic literacy.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="p-3 bg-white h-100 shadow-sm rounded">
                                            <h5 className="font-weight-bold">2. Relational Level</h5>
                                            <p className="small text-muted">Transforming relationships by engaging male champions, family support
                                                systems, and peer mentorship circles.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="p-3 bg-white h-100 shadow-sm rounded">
                                            <h5 className="font-weight-bold">3. Structural Level</h5>
                                            <p className="small text-muted">Addressing systemic barriers through partnerships with local leaders,
                                                policy advocacy, and creating enabling environments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 ftco-animate mb-5">
                            <div className="p-4 bg-light shadow-sm">
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>National and Global Alignment</h3>
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <h5 className="font-weight-bold">Rwanda Vision 2050</h5>
                                        <p className="small text-muted">Contributing to human capital development, gender equality, and inclusive
                                            economic growth as envisioned in Rwanda's long-term aspirations.</p>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h5 className="font-weight-bold">NST2 Priorities</h5>
                                        <p className="small text-muted">Aligned with the National Strategy for Transformation: Quality education,
                                            skills development, and social protection for inclusive growth.</p>
                                    </div>
                                </div>

                                <h5 className="font-weight-bold mb-3">Sustainable Development Goals (SDGs)</h5>
                                <p>Our programs directly contribute to achieving these global goals:</p>
                                <div className="row text-center">
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#e5243b' }}>1</div>
                                            <p className="small mb-0">No Poverty</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#4c9f38' }}>3</div>
                                            <p className="small mb-0">Good Health</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#c5192d' }}>4</div>
                                            <p className="small mb-0">Quality Education</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#ff3a21' }}>5</div>
                                            <p className="small mb-0">Gender Equality</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#a21942' }}>8</div>
                                            <p className="small mb-0">Decent Work</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4 mb-3">
                                        <div className="p-2 border rounded shadow-sm h-100">
                                            <div className="font-weight-bold h5 mb-1" style={{ color: '#dd1367' }}>10</div>
                                            <p className="small mb-0">Reduced Inequality</p>
                                        </div>
                                    </div>
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
                            <h2 className="mb-4 text-white">Join Our Mission</h2>
                            <p className="text-white opacity-75">Your support enables us to continue our vital work in the community.</p>
                            <p className="mt-4"><Link to="/donate" className="btn btn-primary px-5 py-3 font-weight-bold shadow">Donate Now</Link></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
