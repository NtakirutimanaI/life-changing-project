import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';

export const ContactPage = () => {
    useLegacyScripts();

    // Re-initialize Google Map logic if needed (or just ensure the container exists)
    // For now assuming existing global scripts handle it, but in SPA navigation it might need a trigger.
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (w.google && w.google.maps && w.initMap) {
            w.initMap();
        }
    }, []);

    return (
        <>
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '500px', minHeight: '500px' }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '500px', paddingTop: '100px' }} data-scrollax-parent="true">
                        <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><Link
                                to="/">Home</Link></span> <span>Contact</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-3">
                            <p><span>Address</span> <span data-cms="address">Bugesera District, Nyamata Sector Eastern Province, Rwanda</span></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Phone</span> <a href="tel:+250788123456" data-cms="phone">+250 788 123 456</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Email</span> <a href="mailto:info.lceo@gmail.com" data-cms="email">info.lceo@gmail.com</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <Link to="/">lceo.org</Link></p>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-12 text-center ftco-animate">
                            <div className="bg-light p-5 rounded">
                                <h3 className="mb-4">Support Our Life-Changing Mission</h3>
                                <p className="mb-4">Your contributions help us empower young women and girls in Rwanda through education and
                                    economic empowerment.</p>
                                <p><Link to="/donate" className="btn btn-primary btn-lg px-5 py-3 font-weight-bold shadow">Donate Now</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <h4 className="mb-4">Do you have any questions?</h4>
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6" id="map"></div>
                    </div>
                </div>
            </section>
        </>
    );
};
