import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ImpactStoriesPage = () => {
    useLegacyScripts();

    return (
        <>
            {/* Hero Section */}
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

            {/* Split Design Impact Section (Matching Image Structure) */}
            <section className="ftco-section bg-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side: Content */}
                        <div className="col-md-6 ftco-animate pr-lg-5">
                            <span style={{ color: '#fbb124', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', display: 'block', marginBottom: '15px' }}>About Charitian</span>
                            <h2 className="mb-4" style={{ fontSize: '50px', fontWeight: '800', color: '#122f2b', lineHeight: '1.1' }}>
                                Together, We Make <br />
                                A Difference!
                            </h2>
                            <p className="mb-5" style={{ color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
                                Every statistic represents a life changed. Every number tells a story of resilience, growth, and empowerment. See the real impact of LCEO's work across education, entrepreneurship, and empowerment.
                            </p>
                            <p>
                                <Link to="/donate" className="btn px-5 py-3 shadow" style={{ backgroundColor: '#fbb124', color: '#000', fontWeight: '800', fontSize: '15px', borderRadius: '4px', border: 'none' }}>Make A Donation</Link>
                            </p>
                        </div>

                        {/* Right Side: Image Grid Layout (Matching Reference) */}
                        <div className="col-md-6 ftco-animate position-relative mt-5 mt-md-0">
                            <div className="row no-gutters">
                                {/* Large Main Image (Top Right) */}
                                <div className="col-8 offset-4 mb-4">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-1.jpg')",
                                        height: '350px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        boxShadow: '20px -20px 0px rgba(7, 108, 91, 0.05)'
                                    }}></div>
                                </div>

                                {/* Secondary Image Overlay (Mid Left) */}
                                <div className="position-absolute" style={{ top: '15%', left: '0', width: '45%', zIndex: 2 }}>
                                    <div style={{
                                        backgroundImage: "url('/images/cause-2.jpg')",
                                        height: '250px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        border: '10px solid #fff',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                                    }}></div>
                                </div>

                                {/* Bottom Image Grid */}
                                <div className="col-6 pr-3">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-3.jpg')",
                                        height: '220px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                                    }}></div>
                                </div>
                                <div className="col-6">
                                    <div style={{
                                        backgroundImage: "url('/images/cause-4.jpg')",
                                        height: '180px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Numbers Section */}
            <section className="ftco-section" style={{ padding: '80px 0', backgroundColor: '#fcfdfd' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <span className="badge px-4 py-2 mb-3" style={{ backgroundColor: '#e8f7f5', color: '#076c5b', fontSize: '12px', fontWeight: 'Bold', borderRadius: '50px' }}>Our Impact</span>
                            <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '800', color: '#122f2b' }}>Measurable Change</h2>
                            <p style={{ color: '#666' }}>Tracking our progress across education, entrepreneurship, and empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="p-4 bg-white shadow-sm text-center w-100" style={{ borderRadius: '12px', border: '1px solid #f0f2f2' }}>
                                <div className="icon-section mb-3">
                                    <span className="icon-people" style={{ fontSize: '40px', color: '#076c5b' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#122f2b', fontSize: '2.2rem' }}>5,000+</h3>
                                <span className="position mb-2 d-block text-uppercase" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#076c5b' }}>Reached & Empowered</span>
                                <p className="small text-muted mb-0">Vulnerable girls supported through programs.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="p-4 bg-white shadow-sm text-center w-100" style={{ borderRadius: '12px', border: '1px solid #f0f2f2' }}>
                                <div className="icon-section mb-3">
                                    <span className="icon-school" style={{ fontSize: '40px', color: '#076c5b' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#122f2b', fontSize: '2.2rem' }}>1,200+</h3>
                                <span className="position mb-2 d-block text-uppercase" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#076c5b' }}>Stayed In School</span>
                                <p className="small text-muted mb-0">Facilitated protection and mentorship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="p-4 bg-white shadow-sm text-center w-100" style={{ borderRadius: '12px', border: '1px solid #f0f2f2' }}>
                                <div className="icon-section mb-3">
                                    <span className="icon-business_center" style={{ fontSize: '40px', color: '#076c5b' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#122f2b', fontSize: '2.2rem' }}>450+</h3>
                                <span className="position mb-2 d-block text-uppercase" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#076c5b' }}>Businesses launched</span>
                                <p className="small text-muted mb-0">Supported through IkiraroBiz approach.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="p-4 bg-white shadow-sm text-center w-100" style={{ borderRadius: '12px', border: '1px solid #f0f2f2' }}>
                                <div className="icon-section mb-3">
                                    <span className="icon-star" style={{ fontSize: '40px', color: '#076c5b' }}></span>
                                </div>
                                <h3 className="font-weight-bold" style={{ color: '#122f2b', fontSize: '2.2rem' }}>300+</h3>
                                <span className="position mb-2 d-block text-uppercase" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#076c5b' }}>Champions Trained</span>
                                <p className="small text-muted mb-0">Leaders empowered for mindset shift.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SDG Alignment Section */}
            <section className="ftco-section bg-white">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 text-center ftco-animate">
                            <span style={{ color: '#076c5b', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '10px' }}>Global Agenda</span>
                            <h2 className="mb-4 font-weight-bold" style={{ fontSize: '36px', color: '#122f2b' }}>
                                Aligned with Sustainable Development Goals
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        {[
                            { id: 1, title: 'No Poverty', progress: 78 },
                            { id: 3, title: 'Good Health', progress: 85 },
                            { id: 4, title: 'Quality Education', progress: 92 },
                            { id: 5, title: 'Gender Equality', progress: 88 },
                            { id: 8, title: 'Economic Growth', progress: 75 },
                            { id: 10, title: 'Reduced Inequalities', progress: 82 }
                        ].map(sdg => (
                            <div key={sdg.id} className="col-md-4 mb-4 ftco-animate">
                                <div className="p-4 bg-light rounded shadow-sm border" style={{ borderColor: '#f0f2f2' }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center mr-3"
                                            style={{ width: '50px', height: '50px', backgroundColor: '#076c5b', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                                            {sdg.id}
                                        </div>
                                        <h5 className="font-weight-bold mb-0" style={{ fontSize: '15px', color: '#122f2b' }}>{sdg.title}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="small text-muted">Contribution</span>
                                        <span className="font-weight-bold" style={{ color: '#076c5b' }}>{sdg.progress}%</span>
                                    </div>
                                    <div className="progress" style={{ height: '6px', backgroundColor: '#e9ecef' }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: `${sdg.progress}%`, backgroundColor: '#076c5b' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
