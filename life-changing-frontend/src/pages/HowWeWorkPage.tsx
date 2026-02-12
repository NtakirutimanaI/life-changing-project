import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const HowWeWorkPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>How We Work</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">How We Work</h1>
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



            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Areas of Intervention</h2>
                            <p>LCEO operates across multiple strategic areas to create a protective and empowering environment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>Education & School Retention</h3>
                                <p>Ensuring every girl has the resources and support to stay in school and complete her education.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>SRHR & Menstrual Health</h3>
                                <p>Providing knowledge and supplies for sexual reproductive health and dignity during menstruation.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>Gender & Protection</h3>
                                <p>Advocating for rights and protecting girls from abuse, exploitation, and early pregnancy.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>Economic Empowerment</h3>
                                <p>Building livelihoods and financial independence for young women and their families.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>Human Capital & Resilience</h3>
                                <p>Focusing on mental health, confidence, and leadership training.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="p-4 bg-white shadow-sm mb-4 h-100">
                                <h3 style={{ color: '#4FB1A1' }}>Emergency Response</h3>
                                <p>Providing rapid support to girls and women in crisis situations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Methodology</h2>
                            <p>The LCEO Process: A systemic approach to sustainable community transformation.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 border rounded mb-4 shadow-sm h-100">
                                <h4 className="font-weight-bold" style={{ color: '#4FB1A1' }}>1. Needs Assessment</h4>
                                <p>We begin by deeply understanding the context, challenges, and aspirations of our beneficiaries through
                                    community consultations and baseline surveys.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 border rounded mb-4 shadow-sm h-100">
                                <h4 className="font-weight-bold" style={{ color: '#4FB1A1' }}>2. Participatory Design</h4>
                                <p>Programs are co-created with beneficiaries and communities to ensure relevance, ownership, and cultural
                                    appropriateness.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 border rounded mb-4 shadow-sm h-100">
                                <h4 className="font-weight-bold" style={{ color: '#4FB1A1' }}>3. Integrated Delivery</h4>
                                <p>Multiple interventions work together — education support, mental health services, and economic
                                    empowerment — addressing interconnected challenges.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 border rounded mb-4 shadow-sm h-100">
                                <h4 className="font-weight-bold" style={{ color: '#4FB1A1' }}>4. Continuous Monitoring</h4>
                                <p>Regular tracking, feedback loops, and adaptive management ensure programs stay effective and responsive
                                    to changing needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Aligned SDG Goals</h2>
                            <p>LCEO's work directly contributes to the United Nations Sustainable Development Goals.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-3 ftco-animate">
                            <div className="sdg-item p-3">
                                <h5 className="mt-3">SDG 1: No Poverty</h5>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="sdg-item p-3">
                                <h5 className="mt-3">SDG 4: Quality Education</h5>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="sdg-item p-3">
                                <h5 className="mt-3">SDG 5: Gender Equality</h5>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="sdg-item p-3">
                                <h5 className="mt-3">SDG 8: Decent Work</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section-3 img" style={{ backgroundImage: "url(/images/bg_3.jpg)" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center mb-5">
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
