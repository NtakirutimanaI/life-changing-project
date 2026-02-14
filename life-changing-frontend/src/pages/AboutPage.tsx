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


            <section className="ftco-section" style={{
                padding: '100px 0 40px 0',
                backgroundColor: '#fff',
                backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column: Image with Overlay Caption */}
                        <div className="col-lg-6 mb-5 mb-lg-0 ftco-animate">
                            <div className="position-relative shadow-lg" style={{
                                backgroundImage: "url('/images/bg_3.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '24px',
                                minHeight: '500px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    right: '20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    padding: '25px',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <h4 className="font-weight-bold mb-0" style={{ fontSize: '18px', color: '#111', lineHeight: '1.4' }}>
                                        Education, Entrepreneurship, and Mentorship <br />
                                        <span style={{ color: '#076c5b' }}>Delivered by a Dedicated Team</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content & Tabs */}
                        <div className="col-lg-6 pl-lg-5">
                            <span className="badge badge-light px-3 py-2 mb-3 font-weight-bold ftco-animate" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                About Us
                            </span>
                            <h2 className="mb-4 font-weight-bold ftco-animate" style={{ fontSize: '42px', lineHeight: '1.2', color: '#111' }}>
                                Building Long-Term Impact for <span style={{ color: '#076c5b' }}>Vulnerable Communities</span>
                            </h2>
                            <p className="lead mb-4 ftco-animate" style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                                Life-Changing Endeavor Organization (LCEO) is a Kigali-based non-profit delivering education, health, and economic empowerment services under one integrated team. Trusted by communities across Rwanda, we build sustainable systems and growth-driven initiatives that generate real human results.
                            </p>

                            {/* Tabs for Vision and Mission */}
                            <div className="ftco-animate">
                                <ul className="nav nav-pills mb-3 border-bottom" id="pills-tab" role="tablist" style={{ gap: '20px' }}>
                                    <li className="nav-item">
                                        <a className="nav-link active font-weight-bold px-0 py-2" id="pills-vision-tab" data-toggle="pill" href="#pills-vision" role="tab" aria-controls="pills-vision" aria-selected="true"
                                            style={{ color: '#111', backgroundColor: 'transparent', borderBottom: '2px solid #076c5b', borderRadius: 0, textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
                                            Our Vision
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold px-0 py-2" id="pills-mission-tab" data-toggle="pill" href="#pills-mission" role="tab" aria-controls="pills-mission" aria-selected="false"
                                            style={{ color: '#888', backgroundColor: 'transparent', borderRadius: 0, textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
                                            Our Mission
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab">
                                        <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                                            A society where young women and girls are mentally strong, educated, and economically empowered — free to lead and thrive in their communities.
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab">
                                        <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                                            To walk alongside girls and women as they heal, grow, and thrive — through mindset shift, mental resilience, quality education, and sustainable economic empowerment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="values" style={{ padding: '40px 0 0 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center ftco-animate">
                            <span className="badge badge-light px-3 py-2 mb-3 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Our Foundation
                            </span>
                            <h2 className="mb-4 font-weight-bold" style={{ fontSize: '42px', color: '#111' }}>
                                Our Core Values
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid px-0 transition-all ftco-animate">
                    <div style={{
                        background: 'linear-gradient(135deg, #076c5b 0%, #122f2b 100%)',
                        padding: '80px 0',
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100vw',
                        marginLeft: 'calc(-50vw + 50%)'
                    }}>
                        {/* Connectivity Bond Background in Brand Colors */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='bond-pattern' width='140' height='140' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='2' fill='%234FB1A1' fill-opacity='0.25'/%3E%3Ccircle cx='120' cy='40' r='1.5' fill='%234FB1A1' fill-opacity='0.25'/%3E%3Ccircle cx='70' cy='110' r='1.8' fill='%234FB1A1' fill-opacity='0.25'/%3E%3Cpath d='M20 20 L120 40 M120 40 L70 110 M70 110 L20 20' stroke='%234FB1A1' stroke-width='0.7' stroke-opacity='0.2' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bond-pattern)'/%3E%3C/svg%3E")`,
                            opacity: 1,
                            pointerEvents: 'none'
                        }}></div>

                        <div className="container position-relative" style={{ zIndex: 1 }}>
                            <div className="row justify-content-center text-center mb-5">
                                <div className="col-md-10">
                                    <h3 className="text-white font-weight-bold mb-3" style={{ fontSize: '28px' }}>
                                        Guided by Purpose, Driven by Impact
                                    </h3>
                                    <p className="text-white opacity-75 mx-auto" style={{ maxWidth: '700px', fontSize: '16px' }}>
                                        The principles that guide our work and commitment to empowering vulnerable young women and girls in Rwanda.
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                {[
                                    { title: 'Empowerment', desc: 'Unlocking the inherent potential in every girl to lead.' },
                                    { title: 'Protection', desc: 'Creating safe, nurturing spaces for healing and growth.' },
                                    { title: 'Innovation', desc: 'Using evidence-based and creative approaches for change.' },
                                    { title: 'Compassion', desc: 'Walking alongside our beneficiaries with empathy and respect.' },
                                    { title: 'Community', desc: 'Building sustainable networks of local and global support.' },
                                    { title: 'Excellence', desc: 'Committed to delivering measurable and lasting human results.' }
                                ].map((value, idx) => (
                                    <div className="col-md-4 mb-4" key={idx}>
                                        <div className="h-100 p-4 transition-all hover:translate-y-[-5px]" style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '20px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            textAlign: 'left'
                                        }}>
                                            <div className="d-flex align-items-center justify-content-center mb-3" style={{
                                                width: '36px',
                                                height: '36px',
                                                backgroundColor: '#4FB1A1',
                                                borderRadius: '50%',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                fontSize: '14px',
                                                boxShadow: '0 0 15px rgba(79, 177, 161, 0.3)'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <h4 className="text-white font-weight-bold mb-2" style={{ fontSize: '18px' }}>{value.title}</h4>
                                            <p className="text-white opacity-75 mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                                {value.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-5">
                                <Link to="/contact" className="btn px-5 py-3 font-weight-bold" style={{
                                    borderRadius: '50px',
                                    backgroundColor: '#4FB1A1',
                                    color: '#fff',
                                    boxShadow: '0 10px 20px rgba(79, 177, 161, 0.2)'
                                }}>
                                    Be Part of Our Journey
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="team" style={{ padding: '20px 0 60px 0', backgroundColor: '#fcfdfd' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 heading-section ftco-animate text-center">
                            <span className="badge badge-light px-3 py-2 mb-2 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Meet Our Team
                            </span>
                            <h2 className="mb-2 font-weight-bold" style={{ fontSize: '32px', color: '#111' }}>The People Behind LCEO</h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            {
                                name: 'Sarah Mugabo',
                                role: 'Executive Director',
                                bio: '15+ years of experience in development and empowerment work in Rwanda.',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&auto=format&fit=crop'
                            },
                            {
                                name: 'Jean Paul Uwimana',
                                role: 'Program Manager',
                                bio: 'Expert in education and youth development programs across local communities.',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&auto=format&fit=crop'
                            },
                            {
                                name: 'Grace Mutesi',
                                role: 'Finance Director',
                                bio: 'Ensuring transparency, accountability, and sustainable financial operations.',
                                image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&h=800&auto=format&fit=crop'
                            },
                            {
                                name: 'Emmanuel Nkusi',
                                role: 'M&E Specialist',
                                bio: 'Data-driven approach to measuring and improving program effectiveness.',
                                image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&h=800&auto=format&fit=crop'
                            }
                        ].map((member, idx) => (
                            <div className="col-md-3 ftco-animate mb-4" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="staff-card overflow-hidden transition-all duration-500" style={{
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                                    backgroundColor: '#fff',
                                    height: '380px', // Fixed shorter height
                                    position: 'relative',
                                    cursor: 'pointer',
                                    overflow: 'hidden'
                                }}>
                                    {/* Image Area with Zoom Effect */}
                                    <div className="team-img-wrapper" style={{
                                        height: '280px',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: '100%',
                                            backgroundImage: `url(${member.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.8s ease'
                                        }} className="team-photo"></div>

                                        {/* LinkedIn Icon overlapping */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '15px',
                                            width: '32px',
                                            height: '32px',
                                            backgroundColor: '#fff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                            zIndex: 10,
                                            transition: 'transform 0.3s ease'
                                        }} className="linkedin-pop">
                                            <span className="icon-linkedin" style={{ color: '#076c5b', fontSize: '14px' }}></span>
                                        </div>
                                    </div>

                                    {/* Info Panel: Slides up on Hover */}
                                    <div className="info-panel p-3 text-center" style={{
                                        backgroundColor: '#076c5b',
                                        color: '#fff',
                                        height: '100px',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <h3 className="mb-0" style={{ fontSize: '17px', fontWeight: 'bold', color: '#fff' }}>{member.name}</h3>
                                        <span className="d-block mb-2" style={{ fontSize: '12px', opacity: 0.8, letterSpacing: '0.5px' }}>{member.role}</span>

                                        {/* Bio Hidden by default, enters from below */}
                                        <p className="small mb-0 bio-text" style={{
                                            lineHeight: '1.4',
                                            fontSize: '11px',
                                            maxHeight: '0',
                                            opacity: 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease'
                                        }}>{member.bio}</p>
                                    </div>

                                    {/* Custom Styles for Advanced Animations */}
                                    <style>{`
                                        .staff-card:hover .team-photo { transform: scale(1.1); }
                                        .staff-card:hover .info-panel { transform: translateY(-30px); height: 130px; }
                                        .staff-card:hover .bio-text { maxHeight: 60px; opacity: 1; margin-top: 8px; }
                                        .staff-card:hover .linkedin-pop { transform: scale(1.2) rotate(360deg); background-color: #4FB1A1; }
                                        .staff-card:hover .linkedin-pop span { color: #fff; }
                                    `}</style>
                                </div>
                            </div>
                        ))}
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
