import React from 'react';
import { useLanguage } from '../../lib/language-context';
import { useLocation, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export const Navbar = () => {
    const location = useLocation();
    const isDonationPage = location.pathname === '/donate';
    const { language, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'rw', name: 'Kinyarwanda' },
        { code: 'sw', name: 'Swahili' },
        { code: 'fr', name: 'French' }
    ] as const;

    return (
        <>
            <style>{`
                .navbar.navbar-donation-steps {
                    background: #ffffff !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08) !important;
                    top: 0 !important;
                }
                .navbar-donation-steps .nav-link {
                    color: #212529 !important;
                    font-weight: 600 !important;
                    opacity: 1 !important;
                    transition: all 0.3s ease !important;
                }
                .navbar-donation-steps .nav-link:hover {
                    color: #4FB1A1 !important;
                    transform: translateY(-1px);
                }
                .navbar-donation-steps .navbar-brand {
                    color: #122f2b !important;
                    font-weight: 700 !important;
                }
                .navbar-donation-steps .navbar-brand span {
                    color: #122f2b !important;
                    font-weight: 700 !important;
                }
                .navbar-donation-steps .navbar-toggler {
                    color: #212529 !important;
                    border-color: rgba(0,0,0,0.1) !important;
                }
                .navbar-donation-steps .navbar-toggler .oi-menu {
                    color: #212529 !important;
                }
                
                .navbar-donation-steps .nav-item.cta .nav-link {
                    background: #17D1AC !important;
                    border: 1px solid #17D1AC !important;
                    color: #ffffff !important;
                    border-radius: 30px !important;
                }
                .navbar-donation-steps .nav-item.cta .nav-link:hover {
                    background: #14b392 !important;
                    border-color: #14b392 !important;
                    color: #ffffff !important;
                    transform: translateY(-1px) !important;
                    box-shadow: 0 4px 10px rgba(23, 209, 172, 0.3) !important;
                }
                
                .navbar-donation-steps .nav-item:hover .nav-link:not(.btn) {
                    opacity: 1 !important;
                    color: #4FB1A1 !important;
                }

                .lang-switcher .dropdown-item {
                    font-size: 0.85rem;
                    padding: 0.5rem 1.2rem;
                    font-weight: 500;
                }
                .lang-switcher .dropdown-item.active {
                    background-color: #4FB1A1;
                    color: #fff;
                }
                .lang-switcher .dropdown-item.active {
                    background-color: #4FB1A1;
                    color: #fff;
                }
                .search-icon:hover {
                    color: #4FB1A1 !important;
                    transform: scale(1.1);
                    transition: all 0.2s ease;
                }
            `}</style>

            <nav
                className={`navbar navbar-expand-lg ftco_navbar ftco-navbar-light ${isDonationPage ? 'navbar-donation-steps' : ''}`}
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="/images/logo.png" alt="LCEO Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <span>LCEO</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{t('nav.home')}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="whoWeAreDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('nav.about')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="whoWeAreDropdown">
                                    <Link className="dropdown-item" to="/about">{t('nav.about')}</Link>
                                    <Link className="dropdown-item" to="/how-we-work">{t('nav.how_we_work')}</Link>
                                    <Link className="dropdown-item" to="/strategic-direction">Strategic Direction</Link>
                                    <Link className="dropdown-item" to="/resources">{t('nav.resources')}</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="impactDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('nav.impact')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="impactDropdown">
                                    <Link className="dropdown-item" to="/impact-stories">{t('nav.impact')}</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="getInvolvedDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t('nav.contact')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="getInvolvedDropdown">
                                    <Link className="dropdown-item" to="/contact">{t('nav.contact')}</Link>
                                    <Link className="dropdown-item" to="/donate">{t('btn.donate')}</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown ml-lg-2">
                                <a className="nav-link dropdown-toggle" href="#" id="loginDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Login
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="loginDropdown">
                                    <Link className="dropdown-item" to="/login?role=beneficiary">Beneficiary Login</Link>
                                    <Link className="dropdown-item" to="/login?role=donor">Donor Login</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/login?role=admin">Admin Access</Link>
                                </div>
                            </li>

                            <li className="nav-item ml-lg-1">
                                <a href="#" className="nav-link search-icon d-flex align-items-center justify-content-center" data-toggle="modal" data-target="#searchModal" style={{ padding: '15px 10px' }}>
                                    <span className="icon-search"></span>
                                </a>
                            </li>

                            <li className="nav-item cta ml-md-2 active">
                                <Link to="/donate" className="nav-link btn btn-primary px-4 py-3">
                                    {t('nav.donate')}
                                </Link>
                            </li>

                            {/* Language Switcher at the very end */}
                            <li className="nav-item dropdown lang-switcher ml-lg-2">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="langDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ padding: '15px 10px' }}>
                                    <Globe size={20} className={isDonationPage ? 'text-dark' : 'text-white'} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="langDropdown">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={"dropdown-item " + (language === lang.code ? 'active' : '')}
                                            onClick={() => setLanguage(lang.code as any)}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
