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
        bgImage: '/images/bg_7.jpg'
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
                // Fetch page content
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

                // Fetch Programs
                const programData = await ProgramsService.getAll();
                setPrograms(programData);

                // Fetch Stories
                const storyData = await ContentService.getStories('story');
                setStories(storyData.slice(0, 3)); // Limit to 3

            } catch (error) {
                console.error("Error fetching homepage content:", error);
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
            <div className="hero-wrap" style={{ backgroundImage: "url('" + heroContent.bgImage + "')" }} data-stellar-background-ratio="0.5">
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

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-10 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Welcome to LCEO</h2>
                            <p data-cms="mission">{missionText}</p>
                            <p><Link to="/about" className="btn btn-primary p-3 px-5">Learn More About Us</Link></p>
                        </div>
                    </div>
                    {/* Hardcoded Services Section - could also be dynamic if needed */}
                    <div className="row">
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block text-center">
                                <div className="media-body">
                                    <h3 className="heading">Join Our Impact Circle</h3>
                                    <p>Become a recurring donor and sustain education, livelihoods, and leadership for vulnerable girls.
                                        Emphasize monthly giving.</p>
                                    <p><Link to="/donate" className="btn btn-primary">Join Now</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block text-center">
                                <div className="media-body">
                                    <h3 className="heading">Our Roots</h3>
                                    <p>Based in Bugesera District, we work at the grassroots level to create lasting community change through
                                        mental resilience and empowerment.</p>
                                    <p><Link to="/donate" className="btn btn-primary">Join Now</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block text-center">
                                <div className="media-body">
                                    <h3 className="heading">Sustainable Change</h3>
                                    <p>We believe that sustainable change begins with dignity, agency, and inner resilience for every girl and
                                        woman we serve.</p>
                                    <p><Link to="/donate" className="btn btn-primary">Join Now</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-section bg-light">
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
                                    programs.map((program) => (
                                        <div className="item" key={program.id}>
                                            <div className="cause-entry">
                                                <Link to="/how-we-work" className="img" style={{ backgroundImage: `url(${program.coverImage || '/images/cause-1.jpg'})` }}></Link>
                                                <div className="text p-3 p-md-4 text-center">
                                                    <h3><Link to="/how-we-work">{program.name?.en || 'Program Name'}</Link></h3>
                                                    {/* Subtitle/Category if available */}
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
                                                    <p><Link to="/donate" className="btn btn-primary px-3 py-2">Donate Now</Link></p>
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
                                                <p><Link to="/donate" className="btn btn-primary px-3 py-2">Donate Now</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Success Stories</h2>
                            <p>Listen to the voices of the young women and girls whose lives have been transformed through our
                                interventions.</p>
                        </div>
                    </div>
                    <div className="row">
                        {stories.length > 0 ? (
                            stories.map(story => (
                                <div className="col-lg-4 d-flex mb-sm-4 ftco-animate" key={story.id}>
                                    <div className="staff">
                                        <div className="d-flex mb-4">
                                            <div className="img" style={{ backgroundImage: `url(${story.image_url || '/images/person_1.jpg'})` }}></div>
                                            <div className="info ml-4">
                                                <h3>{story.title}</h3>
                                                <span className="position">Beneficiary</span>
                                                <div className="text">
                                                    <div dangerouslySetInnerHTML={{ __html: story.content }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Fallback static content
                            <>
                                <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                                    <div className="staff">
                                        <div className="d-flex mb-4">
                                            <div className="img" style={{ backgroundImage: "url(/images/person_1.jpg)" }}></div>
                                            <div className="info ml-4">
                                                <h3>Aline M.</h3>
                                                <span className="position">Beneficiary</span>
                                                <div className="text">
                                                    <p>"LCEO helped me return to school through the Pad Box Initiative. Now I can study without worry."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                                    <div className="staff">
                                        <div className="d-flex mb-4">
                                            <div className="img" style={{ backgroundImage: "url(/images/person_2.jpg)" }}></div>
                                            <div className="info ml-4">
                                                <h3>Divine U.</h3>
                                                <span className="position">Entrepreneur</span>
                                                <div className="text">
                                                    <p>"Through IkiraroBiz, I started my own tailoring business. I am now economically independent and
                                                        supporting my family."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex mb-sm-4 ftco-animate">
                                    <div className="staff">
                                        <div className="d-flex mb-4">
                                            <div className="img" style={{ backgroundImage: "url(/images/person_3.jpg)" }}></div>
                                            <div className="info ml-4">
                                                <h3>Kevaline I.</h3>
                                                <span className="position">Change Champion</span>
                                                <div className="text">
                                                    <p>"The mental resilience training changed my mindset. I am now a leader in my community, advocating
                                                        for girls' rights."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="ftco-gallery">
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
                            <h2 className="mb-4">Recent from blog</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                blind texts.</p>
                        </div>
                    </div>
                    <div id="stories-container" className="row d-flex">
                        {/* Dynamically populated */}
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

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Aligned SDG Goals</h2>
                            <p>LCEO's work directly contributes to the United Nations Sustainable Development Goals.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#e5243b' }}>1</div>
                                <p className="small mb-0 font-weight-bold">No Poverty</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#4c9f38' }}>3</div>
                                <p className="small mb-0 font-weight-bold">Good Health</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#c5192d' }}>4</div>
                                <p className="small mb-0 font-weight-bold">Quality Education</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#ff3a21' }}>5</div>
                                <p className="small mb-0 font-weight-bold">Gender Equality</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#a21942' }}>8</div>
                                <p className="small mb-0 font-weight-bold">Decent Work</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 ftco-animate mb-3">
                            <div className="sdg-item p-3 border rounded shadow-sm h-100">
                                <div className="sdg-number font-weight-bold h4 mb-2" style={{ color: '#dd1367' }}>10</div>
                                <p className="small mb-0 font-weight-bold">Reduced Inequality</p>
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

            <section className="ftco-section-3 img" style={{ backgroundImage: "url(/images/bg_3.jpg)" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-md-flex">
                        <div className="col-md-6 d-flex ftco-animate">
                            <div className="img img-2 align-self-stretch" style={{ backgroundImage: "url(/images/bg_4.jpg)" }}></div>
                        </div>
                        <div className="col-md-6 volunteer pl-md-5 ftco-animate">
                            <h3 className="mb-3">Be a volunteer</h3>
                            <form action="#" className="volunter-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols={30} rows={3} className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-white py-3 px-5" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
