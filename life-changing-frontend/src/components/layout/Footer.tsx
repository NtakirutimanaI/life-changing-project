import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingScrollToTop } from './FloatingScrollToTop';
import { Chatbot } from './Chatbot';

export const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section" style={{ background: 'linear-gradient(180deg, #2c5f56 0%, #1e4139 100%)', paddingTop: '60px', paddingBottom: '0px', marginBottom: '0px', color: 'rgba(255,255,255,0.9)', position: 'relative' }}>
            <div className="container">

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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="col-md-12 text-center">
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '0' }}>
                            Copyright &copy; {new Date().getFullYear()} Life-Changing Endeavor Organization. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};
