import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language-context';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { mockPrograms, mockStories } from '../lib/mock-data';
import { ProgramCategory } from '../lib/types';

export const HomePage = () => {
    useLegacyScripts();

    const [heroContent, setHeroContent] = useState({
        title: 'Empower a Future Today',
        subtitle: 'We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.',
        bgImage: '/images/bg_2.jpg'
    });

    const [counters, setCounters] = useState({
        women: '5000',
        education: '1200',
        livelihoods: '450',
        leadership: '300'
    });

    const [missionText, setMissionText] = useState('Life-Changing Endeavor Organization (LCEO) is a non-governmental organization based in Bugesera District, Rwanda. We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development to strengthen families and build resilient communities.');

    // Typing effect state for Mission section
    const [typingText, setTypingText] = useState('');
    const typingPhrases = ["And Improvements.", "Empowering Communities.", "Changing Lives.", "For a Better Future."];
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentPhrase = typingPhrases[phraseIdx];

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypingText(currentPhrase.substring(0, typingText.length - 1));
                if (typingText.length <= 1) {
                    setIsDeleting(false);
                    setPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
                }
            }, 50);
        } else {
            timer = setTimeout(() => {
                setTypingText(currentPhrase.substring(0, typingText.length + 1));
                if (typingText.length === currentPhrase.length) {
                    // Wait for 5 seconds before starting to delete
                    setTimeout(() => setIsDeleting(true), 5000);
                }
            }, 100);
        }

        return () => clearTimeout(timer);
    }, [typingText, isDeleting, phraseIdx]);

    // Helper to calculate percentage
    const getPercentage = (allocated: number = 0, budget: number = 100) => {
        if (!budget) return 0;
        return Math.min(100, Math.round((allocated / budget) * 100));
    };

    const { t } = useLanguage();

    const getCategoryColor = (category: ProgramCategory) => {
        const colors = {
            [ProgramCategory.EDUCATION]: 'text-blue-600 bg-blue-50',
            [ProgramCategory.ENTREPRENEURSHIP]: 'text-green-600 bg-green-50',
            [ProgramCategory.HEALTH]: 'text-pink-600 bg-pink-50',
            [ProgramCategory.CROSS_CUTTING]: 'text-purple-600 bg-purple-50',
        };
        return colors[category] || 'text-gray-600 bg-gray-50';
    };

    return (
        <>
            <div className="hero-wrap" id="hero" style={{ backgroundImage: "url('" + heroContent.bgImage + "')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-cms="heroTitle" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                {t('hero.title')}</h1>
                            <p className="mb-5" data-cms="heroSubtitle" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                {t('hero.subtitle')}</p>

                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><Link to="/about"
                                className="btn btn-white btn-outline-white px-4 py-3">{t('btn.learn_more')}</Link></p>
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
                                        <strong className="number" data-number={counters.women} style={{ fontSize: '32px' }}>0</strong>
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
                                        <strong className="number" data-number={counters.education} style={{ fontSize: '32px' }}>0</strong>
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
                                        <strong className="number" data-number={counters.livelihoods} style={{ fontSize: '32px' }}>0</strong>
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
                                        <strong className="number" data-number={counters.leadership} style={{ fontSize: '32px', color: '#fff' }}>0</strong>
                                        <span style={{ fontSize: '24px', color: '#fff', fontWeight: 600 }}>+</span>
                                    </div>
                                    <span style={{ fontSize: '13px', lineHeight: '1.2', color: '#fff' }}>Change Champions trained</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="mission" style={{
                padding: '100px 0',
                backgroundColor: '#fff',
                backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column: Text Content */}
                        <div className="col-lg-6 mb-5 mb-lg-0 ftco-animate">
                            <style>
                                {`
                                @keyframes tripleBounce {
                                    0% { transform: translateY(-300px); opacity: 0; }
                                    20% { transform: translateY(0); opacity: 1; }
                                    40% { transform: translateY(-40px); }
                                    60% { transform: translateY(0); }
                                    80% { transform: translateY(-20px); }
                                    90% { transform: translateY(0); }
                                    95% { transform: translateY(-10px); }
                                    100% { transform: translateY(0); opacity: 1; }
                                }
                                .mission-bounce.ftco-animated {
                                    animation: tripleBounce 2s ease-out forwards !important;
                                }
                                .typing-cursor {
                                    border-right: 3px solid #076c5b;
                                    animation: blink 0.7s infinite;
                                    margin-left: 4px;
                                }
                                @keyframes blink {
                                    0%, 100% { border-color: transparent; }
                                    50% { border-color: #076c5b; }
                                }
                                `}
                            </style>
                            <span className="badge badge-light px-3 py-2 mb-3 font-weight-bold" style={{ color: '#076c5b', backgroundColor: '#e2f5f2', borderRadius: '50px', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Our Mission
                            </span>
                            <h2 className="mb-4 font-weight-bold ftco-animate mission-bounce" style={{ fontSize: '42px', lineHeight: '1.2', color: '#111' }}>
                                Protecting the Dignity and <span style={{ color: '#076c5b' }}>Rights of Women and Girls.</span>
                                <br />
                                <span style={{ color: '#076c5b', fontSize: '32px', opacity: 0.8 }}>
                                    {typingText}<span className="typing-cursor"></span>
                                </span>
                            </h2>
                            <p className="lead mb-4 ftco-animate" style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                                Whether through education scholarships, business seed funding, or mental health support, we deliver the comprehensive care needed to transform lives. From grassroots community engagement to systemic advocacy, we help vulnerable women and girls convert challenges into measurable impact, strengthen resilience, and accelerate their journey to independence in Bugesera and beyond.
                            </p>

                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 ftco-animate">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap d-flex align-items-center justify-content-center mr-3" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e8f7f5' }}>
                                            <span className="icon-check" style={{ color: '#076c5b', fontSize: '12px' }}></span>
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#333', fontWeight: 500 }}>Economic Empowerment</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap d-flex align-items-center justify-content-center mr-3" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e8f7f5' }}>
                                            <span className="icon-check" style={{ color: '#076c5b', fontSize: '12px' }}></span>
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#333', fontWeight: 500 }}>Education Access</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap d-flex align-items-center justify-content-center mr-3" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e8f7f5' }}>
                                            <span className="icon-check" style={{ color: '#076c5b', fontSize: '12px' }}></span>
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#333', fontWeight: 500 }}>Mental Health Support</span>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap d-flex align-items-center justify-content-center mr-3" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e8f7f5' }}>
                                            <span className="icon-check" style={{ color: '#076c5b', fontSize: '12px' }}></span>
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#333', fontWeight: 500 }}>Community Advocacy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="ftco-animate">
                                <Link to="/about" className="btn px-4 py-3 font-weight-bold shadow-sm" style={{ backgroundColor: '#076c5b', color: '#fff', borderRadius: '8px' }}>
                                    Learn More About Us
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image Composition */}
                        <div className="col-lg-6 position-relative">
                            <div className="position-relative" style={{ height: '500px' }}>
                                {/* Main Image */}
                                <div className="shadow-lg ftco-animate" style={{
                                    backgroundImage: "url('/images/bg_3.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '24px',
                                    width: '75%',
                                    height: '85%',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    zIndex: 1
                                }}></div>

                                {/* Floating Image 1 (Left Overlap) */}
                                <div className="shadow-lg ftco-animate" style={{
                                    backgroundImage: "url('/images/cause-1.jpg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '16px',
                                    width: '45%',
                                    height: '40%',
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '10px',
                                    zIndex: 2,
                                    border: '4px solid #fff'
                                }}></div>

                                {/* Floating Stat Card 1 */}
                                <div className="bg-white shadow-sm p-3 d-flex align-items-center ftco-animate" style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '0',
                                    borderRadius: '12px',
                                    zIndex: 3,
                                    maxWidth: '180px'
                                }}>
                                    <div className="mr-3 p-2 rounded-circle" style={{ backgroundColor: '#e2f5f2' }}>
                                        <span className="icon-users" style={{ color: '#076c5b', fontSize: '16px' }}></span>
                                    </div>
                                    <div>
                                        <span className="d-block font-weight-bold" style={{ fontSize: '16px', color: '#111' }}>150+</span>
                                        <span style={{ fontSize: '11px', color: '#888' }}>Lives Changed</span>
                                    </div>
                                </div>

                                {/* Floating Stat Card 2 */}
                                <div className="bg-white shadow-sm p-3 d-flex align-items-center ftco-animate" style={{
                                    position: 'absolute',
                                    bottom: '100px',
                                    right: '-20px',
                                    borderRadius: '12px',
                                    zIndex: 3,
                                    maxWidth: '200px'
                                }}>
                                    <div className="mr-3 p-2 rounded-circle" style={{ backgroundColor: '#fff0f3' }}>
                                        <span className="icon-heart" style={{ color: '#ff4757', fontSize: '16px' }}></span>
                                    </div>
                                    <div>
                                        <span className="d-block font-weight-bold" style={{ fontSize: '14px', color: '#111' }}>Sustainable Impact</span>
                                        <span className="text-success font-weight-bold" style={{ fontSize: '10px' }}>⚡ 95% Success Rate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-section" id="programs" style={{
                position: 'relative',
                padding: '100px 0',
                backgroundColor: '#fcfdfd',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%234FB1A1' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4" style={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                color: '#122f2b',
                                position: 'relative',
                                display: 'inline-block',
                                paddingBottom: '15px'
                            }}>
                                Our Programs
                                <span style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '60px',
                                    height: '4px',
                                    backgroundColor: '#4FB1A1',
                                    borderRadius: '2px'
                                }}></span>
                            </h2>
                            <p className="lead mt-3" style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
                                We implement integrated interventions that strengthen confidence, psychosocial wellbeing, education access,
                                and economic empowerment in Bugesera.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {mockPrograms.map((program, index) => {
                            // Map existing data to the new design format using BRAND COLORS
                            interface ProgramDesignInfo {
                                icon: string;
                                iconBg: string;
                                iconColor: string;
                                subtitle: string;
                                featuresTitle: string;
                                features: string[];
                                status: string;
                                statusColor: string;
                                statusIconColor: string;
                                borderColor: string;
                                secondaryBorder: string;
                            }

                            const programMap: Record<string, ProgramDesignInfo> = {
                                p1: {
                                    icon: 'icon-graduation-cap',
                                    iconBg: '#4FB1A115',
                                    iconColor: '#4FB1A1',
                                    subtitle: 'Boarding School Development',
                                    featuresTitle: 'Key Features:',
                                    features: ['Advanced STEM curriculum', 'Entrepreneurship incubator', 'International partnerships', 'Scholarship programs'],
                                    status: 'Development Phase',
                                    statusColor: '#4FB1A110',
                                    statusIconColor: '#4FB1A1',
                                    borderColor: '#4FB1A1',
                                    secondaryBorder: '#eacfa2'
                                },
                                p2: {
                                    icon: 'icon-briefcase',
                                    iconBg: '#076c5b15',
                                    iconColor: '#076c5b',
                                    subtitle: 'Entrepreneurship & Skills',
                                    featuresTitle: 'Impact Metrics:',
                                    features: ['Business seed funding', 'Mentorship & coaching', 'Market access support', 'Financial literacy training'],
                                    status: 'Active Implementation',
                                    statusColor: '#076c5b10',
                                    statusIconColor: '#076c5b',
                                    borderColor: '#076c5b',
                                    secondaryBorder: '#4FB1A1'
                                },
                                p3: {
                                    icon: 'icon-heart',
                                    iconBg: '#eacfa230',
                                    iconColor: '#d4b47e', // Darker tan for readability
                                    subtitle: 'Holistic Health Support',
                                    featuresTitle: 'Program Scope:',
                                    features: ['Reproductive health kits', 'Mental health counseling', 'Hygiene & sanitation', 'Community outreach'],
                                    status: 'Scale-up Phase',
                                    statusColor: '#eacfa220',
                                    statusIconColor: '#d4b47e',
                                    borderColor: '#eacfa2',
                                    secondaryBorder: '#4FB1A1'
                                }
                            };

                            const programInfo = programMap[program.id] || {
                                icon: 'icon-star',
                                iconBg: '#f0f4f8',
                                iconColor: '#4a5568',
                                subtitle: 'Special Initiative',
                                featuresTitle: 'Highlights:',
                                features: ['Community impact', 'Sustainable growth', 'Strategic alignment'],
                                status: 'Ongoing',
                                statusColor: '#edf2f7',
                                statusIconColor: '#4a5568',
                                borderColor: '#4FB1A1',
                                secondaryBorder: '#076c5b'
                            };

                            return (
                                <div className="col-md-6 col-lg-4 ftco-animate mb-5" key={program.id}>
                                    <div className="bg-white overflow-hidden transition-all hover:translate-y-[-8px]" style={{
                                        borderRadius: '20px',
                                        boxShadow: '0 15px 40px rgba(18, 47, 43, 0.06)',
                                        border: 'none',
                                        height: '100%',
                                        position: 'relative'
                                    }}>
                                        {/* Dual color top border using BRAND COLORS */}
                                        <div className="d-flex" style={{ height: '5px' }}>
                                            <div style={{ flex: 1, backgroundColor: programInfo.borderColor }}></div>
                                            <div style={{ flex: 1, backgroundColor: programInfo.secondaryBorder }}></div>
                                        </div>

                                        <div className="p-4">
                                            {/* Header with Icon and Title */}
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="mr-3 d-flex align-items-center justify-content-center" style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: programInfo.iconBg,
                                                    borderRadius: '12px',
                                                    flexShrink: 0
                                                }}>
                                                    <span className={`${programInfo.icon}`} style={{ fontSize: '22px', color: programInfo.iconColor }}></span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-0" style={{ fontWeight: 800, fontSize: '18px', color: '#122f2b', lineHeight: '1.2' }}>{program.name.en}</h3>
                                                    <span className="text-secondary font-weight-bold" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>{programInfo.subtitle}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="mb-3" style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                                                {program.description.en}
                                            </p>

                                            {/* Features Section */}
                                            <div className="mb-4 p-3" style={{ backgroundColor: '#f9fbfb', borderRadius: '14px', border: '1px solid #eef2f2' }}>
                                                <h4 className="mb-2" style={{ fontSize: '13px', fontWeight: 700, color: '#122f2b' }}>{programInfo.featuresTitle}</h4>
                                                <ul className="list-unstyled mb-0">
                                                    {programInfo.features.map((feature: string, fIndex: number) => (
                                                        <li key={fIndex} className="d-flex align-items-start mb-1" style={{ color: '#666', fontSize: '13px' }}>
                                                            <span className="mr-2 mt-1" style={{ width: '5px', height: '5px', backgroundColor: programInfo.borderColor, borderRadius: '50%', flexShrink: 0 }}></span>
                                                            <span style={{ lineHeight: '1.4' }}>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Footer with Badge */}
                                            <div className="d-flex justify-content-center">
                                                <div className="px-3 py-1 d-flex align-items-center" style={{
                                                    backgroundColor: programInfo.statusColor,
                                                    borderRadius: '50px',
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    color: programInfo.iconColor
                                                }}>
                                                    <span className="icon-bolt mr-2" style={{ fontSize: '10px' }}></span>
                                                    {programInfo.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/about" className="btn px-5 py-3 font-weight-bold shadow-lg" style={{
                            borderRadius: '50px',
                            letterSpacing: '1px',
                            backgroundColor: '#4FB1A1',
                            color: '#fff'
                        }}>
                            VIEW ALL OUR PROGRAMS
                        </Link>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="stories" style={{ backgroundColor: '#076c5b', padding: '100px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-9 text-center text-white ftco-animate">
                            <span className="subheading mb-2 d-block font-weight-bold" style={{ color: '#8cded0', letterSpacing: '2px', textTransform: 'uppercase' }}>Impact Stories</span>
                            <h2 className="mb-3 font-weight-bold" style={{ color: '#ffffff', fontSize: '36px' }}>Stories of Change</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px' }}>Real lives transformed through education, entrepreneurship, and specialized care in Bugesera.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel-cause owl-carousel">
                                {[...mockStories, ...mockStories, ...mockStories].map((story, index) => (
                                    <div className="item px-2" key={`${story.id}-${index}`}>
                                        <div className="p-3 transition-all" style={{
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            height: '350px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            overflow: 'hidden'
                                        }}>
                                            <div>
                                                <div className="icon mb-2">
                                                    <span className="icon-quote-left" style={{ fontSize: '20px', color: '#8cded0', opacity: 0.6 }}></span>
                                                </div>
                                                <h3 className="text-white font-weight-bold mb-1" style={{ fontSize: '15px', lineHeight: '1.2', maxHeight: '36px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                                    {story.title.en}
                                                </h3>
                                                <div className="font-italic mb-2" style={{ fontSize: '11px', color: '#8cded0', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    "{story.title.rw}"
                                                </div>

                                                <p className="text-white opacity-90 mb-0" style={{
                                                    fontSize: '12px',
                                                    lineHeight: '1.4',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    height: '51px'
                                                }}>
                                                    {story.content.en}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="mt-2 mb-2 p-2 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                                    <div className="d-flex justify-content-between align-items-end mb-1">
                                                        <span style={{ fontSize: '9px', color: '#fff', fontWeight: 'bold' }}>GOAL</span>
                                                        <span style={{ fontSize: '9px', color: '#8cded0', fontWeight: 'bold' }}>
                                                            {story.program ? getPercentage(story.program.fundsAllocated, story.program.budget) : 0}%
                                                        </span>
                                                    </div>
                                                    <div className="progress" style={{ height: '3px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: `${story.program ? getPercentage(story.program.fundsAllocated, story.program.budget) : 0}%`, backgroundColor: '#8cded0', borderRadius: '10px' }}></div>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-1" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)' }}>
                                                        <span>${story.program?.fundsAllocated?.toLocaleString() || 0}</span>
                                                        <span>${story.program?.budget?.toLocaleString() || 0}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-between pt-2 border-top border-light" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img shadow-sm" style={{ backgroundImage: `url('${story.media && story.media[0] ? story.media[0].url : '/images/person_1.jpg'}')`, width: '24px', height: '24px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid rgba(255,255,255,0.3)' }}></div>
                                                        <div className="pl-2">
                                                            <p className="mb-0 text-white font-weight-bold" style={{ fontSize: '10px' }}>{story.authorName}</p>
                                                        </div>
                                                    </div>
                                                    <Link to="/donate" className="btn px-3 py-1 font-weight-bold shadow-sm" style={{ backgroundColor: '#ffffff', color: '#076c5b', borderRadius: '50px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Donate</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery mt-5">
                <div className="d-md-flex">
                    <a href="/images/cause-2.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/cause-2.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/cause-3.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/cause-3.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/cause-4.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/cause-4.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/cause-5.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/cause-5.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                </div>
                <div className="d-md-flex">
                    <a href="/images/cause-6.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/cause-6.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/image_3.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/image_3.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/image_1.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/image_1.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                    <a href="/images/image_2.jpg"
                        className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
                        style={{ backgroundImage: "url(/images/image_2.jpg)" }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search"></span>
                        </div>
                    </a>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Latest Community Impact</h2>
                            <p>Keeping you updated on our grassroots efforts and achievements in Bugesera.</p>
                        </div>
                    </div>
                    <div className="row d-flex">
                        {[
                            {
                                id: 1,
                                title: "Empowering Rural Women through Sustainable Farming",
                                date: "Feb 10, 2026",
                                category: "Livelihoods",
                                image: "/images/cause-1.jpg",
                                excerpt: "Our latest workshop in Bugesera trained 45 women in permaculture techniques, ensuring food security and income."
                            },
                            {
                                id: 2,
                                title: "Bridging the Digital Divide: 50 Girls Complete Coding Bootcamp",
                                date: "Feb 5, 2026",
                                category: "Education",
                                image: "/images/bg_4.jpg",
                                excerpt: "Celebrating the graduation of our intensive 'She Can Code' program, opening doors to careers in tech."
                            },
                            {
                                id: 3,
                                title: "Pad Box Initiative Reaches Three New Local Schools",
                                date: "Jan 28, 2026",
                                category: "Health",
                                image: "/images/cause-3.jpg",
                                excerpt: "Improving school attendance by providing sustainable menstrual hygiene solutions to over 300 girls."
                            }
                        ].map(post => (
                            <div className="col-md-4 d-flex ftco-animate mb-4" key={post.id}>
                                <div className="blog-entry align-self-stretch shadow-sm h-100" style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                                    <Link to="/resources" className="block-20" style={{ backgroundImage: `url(${post.image})`, height: '180px' }}></Link>
                                    <div className="text p-3 d-block d-flex flex-column h-100">
                                        <div className="meta mb-2">
                                            <div className="d-flex align-items-center">
                                                <span className="badge badge-primary px-2 py-1 mr-2" style={{ borderRadius: '4px', fontSize: '10px', textTransform: 'uppercase' }}>{post.category}</span>
                                                <span className="text-muted" style={{ fontSize: '12px' }}>{post.date}</span>
                                            </div>
                                        </div>
                                        <h3 className="heading mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}><Link to="/resources" style={{ color: '#000' }}>{post.title}</Link></h3>
                                        <p className="text-muted mb-3" style={{
                                            fontSize: '13px',
                                            lineHeight: '1.5',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            flexGrow: 1
                                        }}>{post.excerpt}</p>
                                        <div className="mt-auto pt-2 border-top">
                                            <Link to="/resources" className="font-weight-bold text-primary" style={{ fontSize: '12px' }}>Read More →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 heading-section ftco-animate text-center">
                            <h2 className="mb-3 font-weight-bold" style={{ fontSize: '36px', color: '#111' }}>Working Together for Greater Impact</h2>
                            <p style={{ color: '#666', fontSize: '18px' }}>We collaborate with leading organizations to amplify our mission and reach</p>
                        </div>
                    </div>

                    <div className="row">
                        {/* FAWE RWANDA */}
                        <div className="col-md-4 ftco-animate mb-4">
                            <div className="bg-white p-5 text-center h-100 transition-all hover:shadow-lg" style={{ borderRadius: '15px', border: '1px solid #eee' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ fontSize: '50px' }}>🎓</div>
                                </div>
                                <h3 className="font-weight-bold mb-2" style={{ color: '#4FB1A1', fontSize: '20px' }}>FAWE RWANDA</h3>
                                <p className="small text-muted mb-4">Forum for African Women Educationalists</p>
                                <a href="https://fawe.org.rw/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-weight-bold" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                    Visit Website →
                                </a>
                            </div>
                        </div>

                        {/* ECORYS */}
                        <div className="col-md-4 ftco-animate mb-4">
                            <div className="bg-white p-5 text-center h-100 transition-all hover:shadow-lg" style={{ borderRadius: '15px', border: '1px solid #eee' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ fontSize: '50px' }}>🌍</div>
                                </div>
                                <h3 className="font-weight-bold mb-2" style={{ color: '#4FB1A1', fontSize: '20px' }}>ECORYS</h3>
                                <p className="small text-muted mb-4">International Development Consultancy</p>
                                <a href="https://www.ecorys.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-weight-bold" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                    Visit Website →
                                </a>
                            </div>
                        </div>

                        {/* MOR ASSAYAG */}
                        <div className="col-md-4 ftco-animate mb-4">
                            <div className="bg-white p-5 text-center h-100 transition-all hover:shadow-lg" style={{ borderRadius: '15px', border: '1px solid #eee' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ fontSize: '50px' }}>🤝</div>
                                </div>
                                <h3 className="font-weight-bold mb-2" style={{ color: '#4FB1A1', fontSize: '20px' }}>MOR ASSAYAG</h3>
                                <p className="small text-muted mb-4">Strategic Partnership & Development</p>
                                <Link to="/contact" className="text-teal-600 font-weight-bold" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                    Visit Website →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center ftco-animate">
                            <p className="mb-2" style={{ color: '#666' }}>Interested in partnering with LCEO?</p>
                            <Link to="/contact" className="font-weight-bold text-teal-700" style={{ fontSize: '16px', borderBottom: '2px solid #4FB1A1', paddingBottom: '2px' }}>
                                Get in touch →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-secondary">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4" style={{ color: '#fff' }}>Join Our Impact Circle</h2>
                            <p style={{ color: 'rgba(255,255,255,.8)' }}>Your monthly support provides sustained transformation for vulnerable
                                young women and girls in Rwanda.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch text-center p-4 bg-white rounded shadow-sm w-100">
                                <h3 className="mb-3 font-weight-bold" style={{ color: '#4FB1A1' }}>$25/mo</h3>
                                <p className="mb-4">Supports menstrual hygiene for 5 girls every month, ensuring they never miss school.</p>
                                <p><Link to="/donate" className="btn btn-primary px-4 py-2">Join Circle</Link></p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch text-center p-4 bg-white rounded shadow-sm w-100">
                                <h3 className="mb-3 font-weight-bold" style={{ color: '#4FB1A1' }}>$50/mo</h3>
                                <p className="mb-4">Covers school fees and essential supplies for one girl, securing her education.</p>
                                <p><Link to="/donate" className="btn btn-primary px-4 py-2">Join Circle</Link></p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch text-center p-4 bg-white rounded shadow-sm w-100">
                                <h3 className="mb-3 font-weight-bold" style={{ color: '#4FB1A1' }}>$100/mo</h3>
                                <p className="mb-4">Provides seed capital and mentorship for one entrepreneur to launch her business.</p>
                                <p><Link to="/donate" className="btn btn-primary px-4 py-2">Join Circle</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" style={{ padding: '100px 0', backgroundColor: '#fff', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column: SDG Grid with Blobs */}
                        <div className="col-lg-7 position-relative mb-5 mb-lg-0 ftco-animate">
                            {/* Decorative Blobs */}
                            <div style={{
                                position: 'absolute',
                                top: '-10%',
                                left: '-10%',
                                width: '300px',
                                height: '300px',
                                backgroundColor: '#e2f5f2',
                                borderRadius: '50%',
                                filter: 'blur(80px)',
                                zIndex: 0
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-10%',
                                right: '10%',
                                width: '250px',
                                height: '250px',
                                backgroundColor: '#f0f9ff',
                                borderRadius: '50%',
                                filter: 'blur(80px)',
                                zIndex: 0
                            }}></div>

                            <div className="bg-white shadow-lg overflow-hidden position-relative" style={{ borderRadius: '24px', zIndex: 1, border: '1px solid #f0f0f0' }}>
                                <div className="row no-gutters">
                                    {[
                                        {
                                            id: 1, name: 'No Poverty', color: '#e5243b',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            id: 3, name: 'Good Health', color: '#4c9f38',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            id: 4, name: 'Quality Education', color: '#c5192d',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            id: 5, name: 'Gender Equality', color: '#ff3a21',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 7V3m-4 4V5m8 2V5"></path>
                                                    <path d="M4 11h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path>
                                                    <path d="M7 15v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            id: 8, name: 'Decent Work', color: '#a21942',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                    <path d="M12 11v4"></path>
                                                    <path d="M9 13h6"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            id: 10, name: 'Reduced Inequality', color: '#dd1367',
                                            icon: (
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                                </svg>
                                            )
                                        }
                                    ].map((sdg, index) => (
                                        <div className="col-md-4 border-right border-bottom" key={sdg.id} style={{
                                            borderRight: index % 3 === 2 ? 'none' : '1px solid #f0f0f0',
                                            borderBottom: index >= 3 ? 'none' : '1px solid #f0f0f0'
                                        }}>
                                            <div className="p-4 text-center transition-all hover:bg-light h-100 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                                                <div className="mb-4" style={{ color: '#076c5b' }}>
                                                    {sdg.icon}
                                                </div>
                                                <h5 className="font-weight-bold mb-1" style={{ fontSize: '15px', color: '#111', lineHeight: '1.2' }}>{sdg.name}</h5>
                                                <span className="font-weight-bold" style={{ color: sdg.color, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>Goal {sdg.id}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-lg-5 pl-lg-5 ftco-animate">
                            <h2 className="mb-4 font-weight-bold" style={{ fontSize: '42px', lineHeight: '1.2', color: '#111' }}>
                                Empowering Lives + <span style={{ color: '#076c5b' }}>Strengthening Communities</span> Through Global Goals
                            </h2>
                            <p className="lead mb-4" style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                                At LCEO, we believe that sustainable development is only possible when we align our grassroots efforts with global standards. By focusing on these key Sustainable Development Goals, we ensure that every scholarship, business grant, and mental health session contributes to a larger vision of dignity and equality for all Rwandans.
                            </p>
                            <p className="mb-5" style={{ fontSize: '14px', color: '#888' }}>
                                Our integrated approach in Bugesera District directly impacts thousands of lives, bridging the gap between local challenges and international aspirations for social justice and economic resilience.
                            </p>
                            <Link to="/about" className="btn px-5 py-3 font-weight-bold shadow-sm" style={{ backgroundColor: '#076c5b', color: '#fff', borderRadius: '12px', fontSize: '16px' }}>
                                View Our Impact Report &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section-3 img" style={{ backgroundImage: "url(/images/bg_3.jpg)", padding: '100px 0', position: 'relative' }}>
                <div className="overlay" style={{ opacity: 0.8, backgroundColor: '#076c5b' }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center text-white ftco-animate mb-5">
                            <h2 className="mb-4 font-weight-bold" style={{ fontSize: '42px' }}>Be Part of the Transformation</h2>
                            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)' }}>Whether you give your time or your resources, you are investing in a future where every girl can thrive.</p>
                        </div>
                    </div>
                    <div className="row d-md-flex align-items-stretch">
                        <div className="col-md-6 d-flex ftco-animate mb-4">
                            <div className="p-5 w-100 text-center d-flex flex-column justify-content-center"
                                style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <div style={{ fontSize: '60px', marginBottom: '20px' }}>💝</div>
                                <h3 className="text-white font-weight-bold mb-3">Support Our Work</h3>
                                <p className="text-white opacity-80 mb-4">Your donations directly fund education, healthcare, and economic equipment for mothers and girls.</p>
                                <Link to="/donate" className="btn btn-white px-5 py-3 font-weight-bold mx-auto" style={{ borderRadius: '50px', maxWidth: '250px' }}>Donate Now</Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex ftco-animate mb-4">
                            <div className="p-5 w-100" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <h3 className="text-white font-weight-bold mb-4 text-center">Become a Volunteer</h3>
                                <form action="#" className="volunter-form">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" placeholder="Full Name" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '10px' }} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email Address" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '10px' }} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea name="" id="" cols={30} rows={2} className="form-control" placeholder="How would you like to help?" style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '10px' }}></textarea>
                                    </div>
                                    <div className="form-group mb-0 text-center">
                                        <input type="submit" value="Submit Application" className="btn btn-primary py-3 px-5 font-weight-bold" style={{ borderRadius: '50px', width: '100%' }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
