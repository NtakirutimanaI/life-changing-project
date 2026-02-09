import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section" style={{ background: 'linear-gradient(180deg, #2c5f56 0%, #1e4139 100%)', paddingTop: '80px', paddingBottom: '40px', color: 'rgba(255,255,255,0.9)' }}>
            <div className="container">
                {/* Newsletter Section */}
                <div className="row mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="col-md-12 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-white mb-3" style={{ fontWeight: 700 }}>Stay Connected</h3>
                            <p className="mb-5">Subscribe to our newsletter for updates, impact stories, and ways to get involved.</p>
                            <form action="#" className="subscribe-form d-flex justify-content-center">
                                <div className="form-group d-flex" style={{ maxWidth: '500px', width: '100%' }}>
                                    <input type="text" className="form-control" placeholder="Enter email address"
                                        style={{ borderRadius: '30px 0 0 30px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                                    <button type="submit" className="btn btn-primary px-4"
                                        style={{ borderRadius: '0 30px 30px 0', backgroundColor: '#eacfa2', color: '#1e4139', border: 'none', fontWeight: 700 }}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Brand */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>LCEO</h2>
                            <p>Empowering vulnerable young women and girls in Rwanda through education, entrepreneurship, and health programs.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)' }}><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)' }}><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)' }}><span className="icon-instagram"></span></a></li>
                                <li className="ftco-animate"><a href="#" style={{ background: 'rgba(255,255,255,0.1)' }}><span className="icon-linkedin"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="py-2 d-block">About Us</Link></li>
                                <li><Link to="/how-we-work" className="py-2 d-block">How We Work</Link></li>
                                <li><Link to="/strategic-direction" className="py-2 d-block">Strategic Direction</Link></li>
                                <li><Link to="/impact-stories" className="py-2 d-block">Impact & Stories</Link></li>
                                <li><Link to="/resources" className="py-2 d-block">Resources</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Get Involved */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Get Involved</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/donate" className="py-2 d-block">Donate</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Monthly Giving</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Volunteer</Link></li>
                                <li><Link to="/contact" className="py-2 d-block">Partner With Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2 text-white" style={{ fontWeight: 700 }}>Contact Us</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker" style={{ color: '#eacfa2' }}></span><span className="text">Bugesera District, Nyamata Sector Eastern Province, Rwanda</span></li>
                                    <li><a href="tel:+250788123456"><span className="icon icon-phone" style={{ color: '#eacfa2' }}></span><span className="text">+250 788 123 456</span></a></li>
                                    <li><a href="mailto:info@lceo.org"><span className="icon icon-envelope" style={{ color: '#eacfa2' }}></span><span className="text">info@lceo.org</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="col-md-12 text-center">
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                            Copyright &copy; {new Date().getFullYear()} Life-Changing Endeavor Organization. All rights reserved.
                        </p>
                        <div className="mt-2 text-center">
                            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 10px' }}>Privacy Policy</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 10px' }}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
