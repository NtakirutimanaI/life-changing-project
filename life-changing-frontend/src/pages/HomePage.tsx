import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language-context';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { ContentService, Story } from '../services/content.service';
import { ProgramsService, Program } from '../services/program.service';

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

    const [programs, setPrograms] = useState<Program[]>([]);
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch page content - gracefully handle if backend is unavailable
                try {
                    const pageData = await ContentService.getPageContent('home');

                    // Process page content into state found by key
                    const heroTitle = pageData.find(c => c.section === 'hero' && c.key === 'title')?.value;
                    const heroSubtitle = pageData.find(c => c.section === 'hero' && c.key === 'subtitle')?.value;
                    const heroBg = pageData.find(c => c.section === 'hero' && c.key === 'bg_image')?.value;

                    if (heroTitle) setHeroContent(prev => ({ ...prev, title: heroTitle }));
                    if (heroSubtitle) setHeroContent(prev => ({ ...prev, subtitle: heroSubtitle }));
                    if (heroBg) setHeroContent(prev => ({ ...prev, bgImage: heroBg }));

                    const counterWomen = pageData.find(c => c.section === 'counters' && c.key === 'women')?.value;
                    const counterBiz = pageData.find(c => c.section === 'counters' && c.key === 'businesses')?.value;
                    const counterHealth = pageData.find(c => c.section === 'counters' && c.key === 'health')?.value;
                    const counterSuccess = pageData.find(c => c.section === 'counters' && c.key === 'success')?.value;

                    if (counterWomen || counterBiz) {
                        setCounters(prev => ({
                            women: counterWomen || prev.women,
                            education: counterHealth || prev.education,
                            livelihoods: counterBiz || prev.livelihoods,
                            leadership: counterSuccess || prev.leadership
                        }));
                    }

                    const mission = pageData.find(c => c.section === 'welcome' && c.key === 'mission')?.value;
                    if (mission) setMissionText(mission);
                } catch (contentError) {
                    // Silently use default content if backend is unavailable
                    console.warn('Using default content - backend unavailable');
                }

                // Fetch Programs
                try {
                    const programData = await ProgramsService.getAll();
                    // Duplicate programs if <= 3 to ensure carousel scroll works beautifully
                    const displayPrograms = programData.length <= 3
                        ? [...programData, ...programData]
                        : programData;
                    setPrograms(displayPrograms);
                } catch (programError) {
                    console.warn('Using default programs - backend unavailable');
                }

                // Fetch Stories
                try {
                    const storyData = await ContentService.getStories('story');
                    setStories(storyData.slice(0, 3)); // Limit to 3
                } catch (storyError) {
                    console.warn('Using default stories - backend unavailable');
                }

            } catch (error) {
                console.warn('Homepage loaded with default content');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to calculate percentage
    const getPercentage = (allocated: number = 0, budget: number = 100) => {
        if (!budget) return 0;
        return Math.min(100, Math.round((allocated / budget) * 100));
    };

    const { t } = useLanguage();

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

            <section className="ftco-section" id="mission" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 heading-section ftco-animate text-center">
                            <span className="subheading" style={{ color: '#4FB1A1', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>Our Mission</span>
                            <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: 'bold' }}>Protecting the Dignity and Rights of Women and Girls</h2>
                            <p className="lead px-md-5" style={{ fontSize: '18px', color: '#555' }}>{missionText}</p>
                            <p className="mt-4"><Link to="/about" className="btn btn-primary px-5 py-3" style={{ borderRadius: '50px' }}>Learn More About Us</Link></p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Join Our Impact Circle', text: 'Become a recurring donor and sustain education, livelihoods, and leadership for vulnerable girls.', icon: '💫' },
                            { title: 'Our Roots', text: 'Based in Bugesera District, we work at the grassroots level to create lasting community change through resilience.', icon: '🌿' },
                            { title: 'Sustainable Change', text: 'We believe that sustainable change begins with dignity, agency, and inner resilience for every woman we serve.', icon: '🏗️' }
                        ].map((item, idx) => (
                            <div className="col-md-4 d-flex align-self-stretch ftco-animate mb-4" key={idx}>
                                <div className="media block-6 d-flex services p-4 py-5 d-block text-center shadow-sm w-100 transition-all hover:translate-y-[-5px]"
                                    style={{ borderRadius: '25px', backgroundColor: '#f9fbfb', border: '1px solid #eef2f2' }}>
                                    <div className="media-body">
                                        <div style={{ fontSize: '45px', marginBottom: '20px' }}>{item.icon}</div>
                                        <h3 className="heading mb-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.title}</h3>
                                        <p style={{ color: '#666', fontSize: '15px' }}>{item.text}</p>
                                        <p className="mt-4"><Link to="/donate" className="font-weight-bold" style={{ color: '#4FB1A1', borderBottom: '2px solid' }}>Join Now →</Link></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="ftco-section bg-light" id="programs">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-5 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Programs</h2>
                            <p>We implement integrated interventions that strengthen confidence, psychosocial wellbeing, education access,
                                and economic empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="carousel-cause owl-carousel">
                                {programs.length > 0 ? (
                                    programs.map((program, index) => (
                                        <div className="item" key={`${program.id}-${index}`}>
                                            <div className="cause-entry">
                                                <Link to="/how-we-work" className="img" style={{ backgroundImage: `url(${program.coverImage || '/images/cause-1.jpg'})` }}></Link>
                                                <div className="text p-3 p-md-4 text-center">
                                                    <h3><Link to="/how-we-work">{program.name?.en || 'Program Name'}</Link></h3>
                                                    <p style={{ color: '#4FB1A1', fontStyle: 'italic', marginTop: '-10px', fontSize: '0.9rem', marginBottom: '15px' }}>
                                                        {program.name?.rw}
                                                    </p>
                                                    <p>{program.description?.en?.substring(0, 100)}...</p>
                                                    <div className="progress custom-progress-success mb-3" style={{ height: '8px' }}>
                                                        <div className="progress-bar bg-primary" role="progressbar"
                                                            style={{ width: getPercentage(program.fundsAllocated, program.budget) + '%' }}
                                                            aria-valuenow={getPercentage(program.fundsAllocated, program.budget)}
                                                            aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                    <span className="fund-raised d-block mb-3 font-weight-bold" style={{ color: '#122f2b' }}>
                                                        ${program.fundsAllocated?.toLocaleString()} raised of ${program.budget?.toLocaleString()}
                                                    </span>
                                                    <p>
                                                        <Link to="/donate" className="btn btn-primary px-3 py-2 mr-2">Donate Now</Link>
                                                        <Link to="/our-programs-details" className="btn btn-outline-primary px-3 py-2">Learn More</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Fallback static content if no programs
                                    <div className="item">
                                        <div className="cause-entry">
                                            <Link to="/how-we-work" className="img" style={{ backgroundImage: "url(/images/cause-1.jpg)" }}></Link>
                                            <div className="text p-3 p-md-4 text-center">
                                                <h3><Link to="/how-we-work">She Can Code</Link></h3>
                                                <p style={{ color: '#4FB1A1', fontStyle: 'italic', marginTop: '-15px', fontSize: '0.9rem' }}>Abakobwa Mu
                                                    Ikoranabuhanga</p>
                                                <p>Empowering young women with software development skills to bridge the gender gap in tech.</p>
                                                <div className="progress custom-progress-success mb-3" style={{ height: '8px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                                <span className="fund-raised d-block mb-3 font-weight-bold" style={{ color: '#122f2b' }}>$15,000 raised of
                                                    $20,000</span>
                                                <p>
                                                    <Link to="/donate" className="btn btn-primary px-3 py-2 mr-2">Donate Now</Link>
                                                    <Link to="/our-programs-details" className="btn btn-outline-primary px-3 py-2">Learn More</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section" id="stories" style={{ backgroundColor: '#076c5b', padding: '60px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center text-white ftco-animate">
                            <h2 className="mb-2 font-weight-bold" style={{ color: '#ffffff', fontSize: '32px' }}>Stories of Change</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Real stories from the women and girls whose lives have been transformed through LCEO's initiatives.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="carousel-cause owl-carousel">
                                {stories.length > 0 ? (
                                    stories.map((story, index) => (
                                        <div className="item" key={`${story.id}-${index}`}>
                                            <div className="p-4 h-100 transition-all" style={{ backgroundColor: '#108d7a', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                                                <div className="icon mb-3">
                                                    <span className="icon-quote-left" style={{ fontSize: '30px', color: 'rgba(255,255,255,0.2)' }}></span>
                                                </div>
                                                <h3 className="text-white font-weight-bold mb-1" style={{ fontSize: '18px' }}>{story.title}</h3>
                                                <p className="text-white opacity-80 mb-3 font-italic" style={{ fontSize: '13px', color: '#8cded0' }}>
                                                    "{story.slug.replace(/-/g, ' ')}"
                                                </p>
                                                <p className="text-white opacity-90 mb-4" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                                    {story.content.substring(0, 100)}...
                                                </p>

                                                <div className="mb-4">
                                                    <div className="d-flex justify-content-between text-white text-small mb-1" style={{ fontSize: '12px' }}>
                                                        <span>Raised: $12,500</span>
                                                        <span>Goal: $15,000</span>
                                                    </div>
                                                    <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
                                                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-between mt-auto">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img" style={{ backgroundImage: 'url(/images/person_1.jpg)', width: '35px', height: '35px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                                        <div className="pl-2 text-left">
                                                            <p className="mb-0 text-white font-weight-bold" style={{ fontSize: '12px' }}>LCEO Comms</p>
                                                        </div>
                                                    </div>
                                                    <Link to="/donate" className="btn px-3 py-1 font-weight-bold" style={{ backgroundColor: '#ffffff', color: '#108d7a', borderRadius: '20px', fontSize: '12px' }}>Donate</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Fallback if no stories
                                    <div className="item">
                                        <div className="p-4 h-100" style={{ backgroundColor: '#108d7a', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div className="icon mb-3">
                                                <span className="icon-quote-left" style={{ fontSize: '30px', color: 'rgba(255,255,255,0.2)' }}></span>
                                            </div>
                                            <h3 className="text-white font-weight-bold mb-1" style={{ fontSize: '18px' }}>Impact Story</h3>
                                            <p className="text-white opacity-90 mb-4" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                                Supporting education for vulnerable girls in Bugesera.
                                            </p>
                                            <Link to="/donate" className="btn px-4 py-2 font-weight-bold" style={{ backgroundColor: '#ffffff', color: '#108d7a', borderRadius: '20px' }}>Support Now</Link>
                                        </div>
                                    </div>
                                )}
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
                                    <Link to="/resources" className="block-20" style={{ backgroundImage: `url(${post.image})`, height: '220px' }}></Link>
                                    <div className="text p-4 d-block">
                                        <div className="meta mb-3">
                                            <div className="d-flex align-items-center">
                                                <span className="badge badge-primary px-3 py-2 mr-3" style={{ borderRadius: '20px', fontSize: '11px', textTransform: 'uppercase' }}>{post.category}</span>
                                                <span className="text-muted" style={{ fontSize: '13px' }}>{post.date}</span>
                                            </div>
                                        </div>
                                        <h3 className="heading mb-3" style={{ fontSize: '18px' }}><Link to="/resources">{post.title}</Link></h3>
                                        <p className="text-muted mb-4" style={{ fontSize: '14px' }}>{post.excerpt}</p>
                                        <Link to="/resources" className="font-weight-bold text-primary" style={{ fontSize: '14px' }}>Read More →</Link>
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

            <section className="ftco-section bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 heading-section ftco-animate text-center">
                            <h2 className="mb-3 font-weight-bold" style={{ fontSize: '32px' }}>Aligned SDG Goals</h2>
                            <p className="text-muted">Our mission directly supports the United Nations Sustainable Development Goals for a better future.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {[
                            { id: 1, name: 'No Poverty', color: '#e5243b', icon: '💰' },
                            { id: 3, name: 'Good Health', color: '#4c9f38', icon: '🏥' },
                            { id: 4, name: 'Quality Education', color: '#c5192d', icon: '📚' },
                            { id: 5, name: 'Gender Equality', color: '#ff3a21', icon: '⚖️' },
                            { id: 8, name: 'Decent Work', color: '#a21942', icon: '💼' },
                            { id: 10, name: 'Reduced Inequality', color: '#dd1367', icon: '🤝' }
                        ].map(sdg => (
                            <div className="col-lg-2 col-md-4 col-sm-6 ftco-animate mb-4" key={sdg.id}>
                                <div className="p-4 text-center h-100 transition-all hover:translate-y-[-5px]"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        borderTop: `5px solid ${sdg.color}`
                                    }}>
                                    <div style={{ fontSize: '32px', marginBottom: '15px' }}>{sdg.icon}</div>
                                    <div className="font-weight-bold mb-1" style={{ color: sdg.color, fontSize: '20px' }}>{sdg.id}</div>
                                    <p className="small font-weight-bold mb-0 text-dark" style={{ lineHeight: '1.2' }}>{sdg.name}</p>
                                </div>
                            </div>
                        ))}
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
