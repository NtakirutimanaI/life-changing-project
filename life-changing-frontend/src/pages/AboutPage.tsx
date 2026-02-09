import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const AboutPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_7.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>About</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 d-flex ftco-animate">
                            <div className="img img-about align-self-stretch" style={{ backgroundImage: "url(/images/bg_3.jpg)", width: '100%' }}>
                            </div>
                        </div>
                        <div className="col-md-6 pl-md-5 ftco-animate">
                            <h2 className="mb-4">Who We Are</h2>
                            <p>Life-Changing Endeavor Organization (LCEO) is a non-governmental organization based in Bugesera District,
                                Rwanda. We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.</p>
                            <p>We believe that sustainable change begins with dignity, agency, and inner resilience. Our approach is
                                holistic, prioritizing mindset shift and mental resilience as the foundation for education and economic
                                empowerment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>Our Vision</h3>
                                <p data-cms="vision">A society where young women and girls are mentally strong, educated, and economically
                                    empowered — free to lead and thrive in their communities.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>Our Mission</h3>
                                <p data-cms="mission">To walk alongside girls and women as they heal, grow, and thrive — through mindset
                                    shift, mental resilience, quality education, and sustainable economic empowerment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Core Values</h2>
                            <p>The principles that guide our work and commitment to our beneficiaries.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Empowerment</h5>
                                <p className="small mb-0">Unlocking the inherent potential in every girl.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Protection</h5>
                                <p className="small mb-0">Creating safe spaces for healing and growth.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Innovation</h5>
                                <p className="small mb-0">Using evidence-based approaches for change.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Compassion</h5>
                                <p className="small mb-0">Walking alongside with empathy and respect.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Community</h5>
                                <p className="small mb-0">Building networks of sustainable support.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate mb-4">
                            <div className="p-3 bg-white shadow-sm rounded text-center h-100">
                                <h5 className="font-weight-bold" style={{ color: '#4FB1A1' }}>Excellence</h5>
                                <p className="small mb-0">Committed to measurable and lasting impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Leadership Team</h2>
                            <p>Meet the dedicated professionals driving transformation at LCEO.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ftco-animate">
                            <div className="staff p-4 shadow-sm bg-light text-center h-100">
                                <h3 className="mb-2">Sarah Mugabo</h3>
                                <span className="position mb-3 d-block" style={{ color: '#4FB1A1' }}>Executive Director</span>
                                <p className="small">15+ years of experience in development and empowerment work in Rwanda.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="staff p-4 shadow-sm bg-light text-center h-100">
                                <h3 className="mb-2">Jean Paul Uwimana</h3>
                                <span className="position mb-3 d-block" style={{ color: '#4FB1A1' }}>Program Manager</span>
                                <p className="small">Expert in education and youth development programs across local communities.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="staff p-4 shadow-sm bg-light text-center h-100">
                                <h3 className="mb-2">Grace Mutesi</h3>
                                <span className="position mb-3 d-block" style={{ color: '#4FB1A1' }}>Finance Director</span>
                                <p className="small">Ensuring transparency, accountability, and sustainable financial operations.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="staff p-4 shadow-sm bg-light text-center h-100">
                                <h3 className="mb-2">Emmanuel Nkusi</h3>
                                <span className="position mb-3 d-block" style={{ color: '#4FB1A1' }}>M&E Specialist</span>
                                <p className="small">Data-driven approach to measuring and improving program effectiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Journey</h2>
                            <p>Key milestones in our mission to empower vulnerable young women.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline">
                                <div className="mb-4 p-4 bg-white shadow-sm rounded border-left"
                                    style={{ borderLeft: '5px solid #4FB1A1 !important' }}>
                                    <h5 className="font-weight-bold">2020: LCEO Founded</h5>
                                    <p className="mb-0 text-muted">Established in Bugesera District with a vision to transform vulnerable lives.
                                    </p>
                                </div>
                                <div className="mb-4 p-4 bg-white shadow-sm rounded border-left"
                                    style={{ borderLeft: '5px solid #4FB1A1 !important' }}>
                                    <h5 className="font-weight-bold">2021: First Program Launch</h5>
                                    <p className="mb-0 text-muted">Girls' School Retention reaches its first 50 beneficiaries successfully.</p>
                                </div>
                                <div className="mb-4 p-4 bg-white shadow-sm rounded border-left"
                                    style={{ borderLeft: '5px solid #4FB1A1 !important' }}>
                                    <h5 className="font-weight-bold">2022: IkiraroBiz Initiative</h5>
                                    <p className="mb-0 text-muted">Launched entrepreneurship program, supporting 30 young women with seed capital.
                                    </p>
                                </div>
                                <div className="mb-4 p-4 bg-white shadow-sm rounded border-left"
                                    style={{ borderLeft: '5px solid #4FB1A1 !important' }}>
                                    <h5 className="font-weight-bold">2023: Major Expansion</h5>
                                    <p className="mb-0 text-muted">Scaled to reach 200+ beneficiaries across education, health, and economic
                                        sectors.</p>
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
