import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ContactPage = () => {
    useLegacyScripts();
    const [zoom, setZoom] = React.useState(15);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 1, 21));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 1, 1));

    return (
        <>
            {/* Full Height Hero Section (Restored to 500px) */}
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }}>
                        <div className="col-md-7 ftco-animate text-center">
                            <h1 className="mb-0 bread" style={{ fontWeight: '800', fontSize: '48px', color: '#fff', textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>Contact Us</h1>
                            <p className="breadcrumbs" style={{ fontSize: '18px', fontWeight: '500', marginTop: '10px' }}>
                                <span className="mr-2"><Link to="/" style={{ color: '#fff' }}>Home</Link></span>
                                <span style={{ color: '#4FB1A1' }}>Contact</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container" style={{ width: '100%', height: '400px', position: 'relative', backgroundColor: '#eee', borderBottom: '4px solid #076c5b' }}>
                <iframe
                    title="LCEO Location Map"
                    src={`https://maps.google.com/maps?q=-2.1467,30.1281&hl=en&z=${zoom}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10 }}>
                    <button onClick={handleZoomIn} className="btn shadow-lg" style={{ width: '40px', height: '40px', backgroundColor: '#fff', color: '#076c5b', fontWeight: '900', fontSize: '20px', padding: 0, borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    <button onClick={handleZoomOut} className="btn shadow-lg" style={{ width: '40px', height: '40px', backgroundColor: '#fff', color: '#076c5b', fontWeight: '900', fontSize: '20px', padding: 0, borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                </div>
            </div>

            {/* Shorter Contact Section - Reduced padding from 80px to 30px */}
            <section className="ftco-section bg-white" style={{ padding: '30px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="row">
                                {/* Left Column: Contact Form */}
                                <div className="col-md-7 pr-lg-5 mb-4 mb-md-0 ftco-animate">
                                    <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#122f2b', marginBottom: '5px' }}>Get in Touch</h2>
                                    <p style={{ color: '#666', fontSize: '15px', marginBottom: '25px' }}>Required fields are marked <span className="text-danger">*</span></p>

                                    <form action="#" className="contact-form-premium">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#122f2b', display: 'block', marginBottom: '5px' }}>First Name</label>
                                                <input type="text" className="form-control" style={{ height: '50px', backgroundColor: '#f9fbfb', border: '1px solid #eef2f2', borderRadius: '4px', fontSize: '15px' }} placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#122f2b', display: 'block', marginBottom: '5px' }}>Last Name</label>
                                                <input type="text" className="form-control" style={{ height: '50px', backgroundColor: '#f9fbfb', border: '1px solid #eef2f2', borderRadius: '4px', fontSize: '15px' }} placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#122f2b', display: 'block', marginBottom: '5px' }}>Email</label>
                                                <input type="email" className="form-control" style={{ height: '50px', backgroundColor: '#f9fbfb', border: '1px solid #eef2f2', borderRadius: '4px', fontSize: '15px' }} placeholder="example@email.com" />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#122f2b', display: 'block', marginBottom: '5px' }}>Message</label>
                                                <textarea name="" id="" cols={30} rows={4} className="form-control" style={{ backgroundColor: '#f9fbfb', border: '1px solid #eef2f2', borderRadius: '4px', fontSize: '15px', paddingTop: '10px' }} placeholder="Your message..."></textarea>
                                            </div>
                                            <div className="col-md-12 mt-2">
                                                <button type="submit" className="btn px-5 py-3 shadow" style={{ backgroundColor: '#076c5b', color: '#fff', fontWeight: '800', fontSize: '15px', borderRadius: '4px', border: 'none' }}>Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Right Column: Details & Hours */}
                                <div className="col-md-5 pl-lg-4 ftco-animate">
                                    <div className="p-4 rounded shadow-sm mb-4" style={{ backgroundColor: '#fcfdfd', border: '1px solid #eef2f2' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#122f2b', marginBottom: '20px' }}>Contact Info</h3>

                                        <div className="d-flex align-items-center mb-3">
                                            <span className="icon-map-marker mr-3" style={{ fontSize: '24px', color: '#4FB1A1' }}></span>
                                            <div style={{ color: '#111', fontSize: '16px', fontWeight: '600' }}>Bugesera, Nyamata, Rwanda</div>
                                        </div>

                                        <div className="d-flex align-items-center mb-3">
                                            <span className="icon-envelope mr-3" style={{ fontSize: '20px', color: '#4FB1A1' }}></span>
                                            <a href="mailto:info.lceo@gmail.com" style={{ color: '#111', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>info.lceo@gmail.com</a>
                                        </div>

                                        <div className="d-flex align-items-center mb-3">
                                            <span className="icon-phone mr-3" style={{ fontSize: '24px', color: '#4FB1A1' }}></span>
                                            <a href="tel:+250788123456" style={{ color: '#111', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>+250 788 123 456</a>
                                        </div>

                                        <div className="pt-3 mt-3 border-top" style={{ borderColor: '#eef2f2 !important' }}>
                                            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#122f2b', marginBottom: '15px' }}>Hours</h3>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mb-2 d-flex align-items-center" style={{ fontSize: '16px', color: '#111', fontWeight: '600' }}>
                                                    <span className="icon-clock-o mr-3" style={{ fontSize: '20px', color: '#4FB1A1' }}></span>
                                                    <span>Mon - Fri: 9am - 6pm</span>
                                                </li>
                                                <li className="d-flex align-items-center" style={{ fontSize: '16px', color: '#111', fontWeight: '600' }}>
                                                    <span className="icon-clock-o mr-3" style={{ fontSize: '20px', color: '#4FB1A1' }}></span>
                                                    <span>Sat: 9am - 2pm</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Compact CTA */}
                                    <div className="p-4 rounded text-white shadow" style={{ backgroundColor: '#122f2b', position: 'relative', overflow: 'hidden' }}>
                                        <div className="position-relative" style={{ zIndex: 2 }}>
                                            <h4 className="text-white mb-2" style={{ fontWeight: '800', fontSize: '18px' }}>Support Mission</h4>
                                            <Link to="/donate" className="btn btn-sm px-4" style={{ backgroundColor: '#4FB1A1', color: '#fff', fontWeight: '800', border: 'none', borderRadius: '4px' }}>Donate Now</Link>
                                        </div>
                                        <span className="icon-heart position-absolute" style={{ fontSize: '60px', color: '#fff', opacity: 0.1, bottom: '-10px', right: '-10px', zIndex: 1 }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
