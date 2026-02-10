import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const HowWeWorkPage = () => {
    useLegacyScripts();

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_7.jpg')" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
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

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Programs</h2>
                            <p>Each of our programs is designed to address specific challenges faced by young women and girls, fostering a
                                path from vulnerability to empowerment.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3"><span className="flaticon-donation-1"></span></div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">She Can Code — School Retention</h3>
                                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                        <li>- Pad Box Initiative</li>
                                        <li>- Education Facilitation</li>
                                        <li>- Girls’ Safe Spaces</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3"><span className="flaticon-charity"></span></div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">IkiraroBiz – Skills & Entrepreneurship</h3>
                                    <p>A graduation approach that help beneficiaries transition from dependence to self-sufficiency through
                                        skills development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 d-flex services p-3 py-4 d-block">
                                <div className="icon d-flex mb-3"><span className="flaticon-donation"></span></div>
                                <div className="media-body pl-4">
                                    <h3 className="heading">Human Capital & Mental Resilience</h3>
                                    <p>Strengthening the inner core of our beneficiaries through mindset shift and psychosocial support to
                                        ensure sustainable healing and growth.</p>
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
                            <h2 className="mb-4">Success Stories</h2>
                            <p>Listen to the voices of the young women and girls whose lives have been transformed through our
                                interventions.</p>
                        </div>
                    </div>
                    <div className="row">
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

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h2 className="mb-4">Our Partners</h2>
                            <p>We work alongside global and national organizations to scale our impact.</p>
                        </div>
                    </div>
                    <div id="partners-container" className="row partner-wrap">
                        <div className="col-md-4 col-sm-6 text-center ftco-animate">
                            <div className="partner-item p-4">
                                <h4 style={{ color: '#4FB1A1', fontWeight: 'bold' }}>FAWE RWANDA</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center ftco-animate">
                            <div className="partner-item p-4">
                                <h4 style={{ color: '#4FB1A1', fontWeight: 'bold' }}>ECORYS</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center ftco-animate">
                            <div className="partner-item p-4">
                                <h4 style={{ color: '#4FB1A1', fontWeight: 'bold' }}>MOR ASSAYAG</h4>
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
