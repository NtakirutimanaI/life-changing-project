import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language-context';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const AboutPage = () => {
    useLegacyScripts();
    const { t } = useLanguage();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>About</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{t('about.title')}</h1>
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
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>{t('about.vision_title')}</h3>
                                <p data-cms="vision">A society where young women and girls are mentally strong, educated, and economically
                                    empowered — free to lead and thrive in their communities.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <h3 className="mb-3" style={{ color: '#4FB1A1' }}>{t('about.mission_title')}</h3>
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
                            <h2 className="mb-4">{t('about.values_title')}</h2>
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
                            <h2 className="mb-4">Milestones & Achievements</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="timeline-wrapper position-relative">
                                {/* Vertical Line Connection */}
                                <div style={{
                                    position: 'absolute',
                                    left: '30px',
                                    top: '0',
                                    height: '100%',
                                    width: '2px',
                                    backgroundColor: '#cbd5e1',
                                    zIndex: 0
                                }}></div>

                                {/* 2020 */}
                                <div className="timeline-item position-relative mb-4" style={{ paddingLeft: '90px' }}>
                                    <div className="timeline-year d-flex align-items-center justify-content-center text-white font-weight-bold shadow-sm"
                                        style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#4FB1A1',
                                            zIndex: 1,
                                            border: '4px solid #f8f9fa'
                                        }}>
                                        2020
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm border">
                                        <h5 className="font-weight-bold mb-2">LCEO Founded</h5>
                                        <p className="text-muted mb-0">Established in Bugesera District with a vision to transform lives.</p>
                                    </div>
                                </div>

                                {/* 2021 */}
                                <div className="timeline-item position-relative mb-4" style={{ paddingLeft: '90px' }}>
                                    <div className="timeline-year d-flex align-items-center justify-content-center text-white font-weight-bold shadow-sm"
                                        style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#4FB1A1',
                                            zIndex: 1,
                                            border: '4px solid #f8f9fa'
                                        }}>
                                        2021
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm border">
                                        <h5 className="font-weight-bold mb-2">First Program Launch</h5>
                                        <p className="text-muted mb-0">Girls School Retention program reaches 50 beneficiaries.</p>
                                    </div>
                                </div>

                                {/* 2022 */}
                                <div className="timeline-item position-relative mb-4" style={{ paddingLeft: '90px' }}>
                                    <div className="timeline-year d-flex align-items-center justify-content-center text-white font-weight-bold shadow-sm"
                                        style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#4FB1A1',
                                            zIndex: 1,
                                            border: '4px solid #f8f9fa'
                                        }}>
                                        2022
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm border">
                                        <h5 className="font-weight-bold mb-2">IkiraroBiz Initiative</h5>
                                        <p className="text-muted mb-0">Entrepreneurship program launched, supporting 30 young women.</p>
                                    </div>
                                </div>

                                {/* 2023 */}
                                <div className="timeline-item position-relative mb-4" style={{ paddingLeft: '90px' }}>
                                    <div className="timeline-year d-flex align-items-center justify-content-center text-white font-weight-bold shadow-sm"
                                        style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#4FB1A1',
                                            zIndex: 1,
                                            border: '4px solid #f8f9fa'
                                        }}>
                                        2023
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm border">
                                        <h5 className="font-weight-bold mb-2">Major Expansion</h5>
                                        <p className="text-muted mb-0">Programs scaled to reach 200+ beneficiaries across multiple sectors.</p>
                                    </div>
                                </div>

                                {/* 2024 */}
                                <div className="timeline-item position-relative" style={{ paddingLeft: '90px' }}>
                                    <div className="timeline-year d-flex align-items-center justify-content-center text-white font-weight-bold shadow-sm"
                                        style={{
                                            position: 'absolute',
                                            left: '0',
                                            top: '0',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: '#4FB1A1',
                                            zIndex: 1,
                                            border: '4px solid #f8f9fa'
                                        }}>
                                        2024
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm border">
                                        <h5 className="font-weight-bold mb-2">Recognition & Growth</h5>
                                        <p className="text-muted mb-0">Partnership with FAWE Rwanda, now serving 312 beneficiaries.</p>
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
