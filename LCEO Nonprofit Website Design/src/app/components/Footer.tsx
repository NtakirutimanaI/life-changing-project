import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ArrowUp, ChevronRight, Calendar, Send, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-bg-overlay"></div>

      {/* Newsletter Section */}
      <div className="newsletter-wrapper">
        <div className="newsletter-container">
          <div className="newsletter-box relative overflow-hidden">

            {/* BACKGROUNDS ONLY: Wavy flight path and paper plane as requested from image */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <svg viewBox="0 0 1000 300" className="w-full h-full text-[#13d4d4] opacity-20" preserveAspectRatio="none">
                <path
                  d="M 100,250 C 300,250 400,50 600,100 C 800,150 900,50 1100,50"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="12 12"
                  fill="none"
                />
              </svg>
            </div>
            {/* Paper Plane Background */}
            <div className="absolute top-[10%] left-[38%] text-[#13d4d4] opacity-20 pointer-events-none transform -rotate-12 z-0">
              <Send size={130} fill="currentColor" />
            </div>

            {/* Child Cutout Background (from reference image) */}
            <div className="absolute -right-12 -bottom-10 w-72 h-80 opacity-90 pointer-events-none hidden xl:block z-0">
              <img
                src="https://images.unsplash.com/photo-1514316703755-dca7d8d2d782?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-contain grayscale"
                alt="Support background"
              />
            </div>

            {/* RESTORED ORIGINAL CONTENT BLOCK */}
            <div className="flex items-center gap-5 w-full lg:w-auto relative z-10">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=400&auto=format&fit=crop"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl brightness-105"
                  alt="LCEO Child"
                />
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-lg text-red-600 z-10">
                  <Heart size={16} fill="currentColor" />
                </div>
              </div>

              <div className="newsletter-text">
                <div className="newsletter-label">
                  <div className="newsletter-bar"></div>
                  <span className="newsletter-label-text">Newsletter</span>
                </div>
                <h3 className="newsletter-heading">Support LCEO Monthly</h3>
              </div>
            </div>

            <div className="newsletter-form-wrapper relative z-10">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-columns">
          {/* Column 1: Logo & About */}
          <div className="footer-col-1-brand">
            <div className="footer-logo-link" onClick={() => onNavigate('home')}>
              <img src="/logo.png?v=5" alt="LCEO Logo" className="footer-logo-img h-12 object-contain mr-2" />
            </div>
            <p className="footer-desc">
              LCEO non-profit organization dedicated to creating lasting impact through clean water, free education, healthcare, and community development.
            </p>
            <div className="footer-socials">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="social-icon-link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Latest Posts */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">Latest Updates</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list latest-posts-list">
              {[
                { t: 'Placing Children at The Heart Of Social Accountability', d: 'Jan 15, 2026' },
                { t: 'Cash Transfers in Africa Evidence On The Impact', d: 'Jan 10, 2026' },
                { t: 'Children in Kigali Go Back To a Safe Learning Environment', d: 'Jan 05, 2026' }
              ].map((item, i) => (
                <li key={i} className="post-item">
                  <h5 className="post-title">
                    {item.t}
                  </h5>
                  <div className="post-meta">
                    <Calendar size={12} className="footer-logo-dot" />
                    {item.d}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us Links */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">About Us</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list links-list">
              {[
                { l: 'Who we are', id: 'about' },
                { l: 'How We Help', id: 'how-we-work' },
                { l: 'Strategic Plan', id: 'strategic-direction' },
                { l: 'Help & FAQ\'s', id: 'resources' },
                { l: 'Contact Us', id: 'get-involved' },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="footer-link-btn"
                  >
                    <span className="chevron-icon">
                      <ChevronRight size={14} />
                    </span>
                    {link.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div>
            <div className="footer-heading-wrapper">
              <h4 className="footer-heading">Headquarters</h4>
              <div className="footer-heading-bar"></div>
            </div>
            <ul className="footer-list contact-list">
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <span className="contact-text">Kigali City Tower, 15th Floor<br />Kigali, Rwanda</span>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <a href="mailto:info@lceo.org.rw" className="contact-link">
                  info@lceo.org.rw
                </a>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={18} fill="currentColor" className="footer-logo-dot" />
                </div>
                <a href="tel:+123456789101" className="contact-link">
                  +250 788 123 456
                </a>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <Clock size={18} className="footer-logo-dot" />
                </div>
                <span className="contact-text">Mon - Sat: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} LCEO Nonprofit. All Rights Reserved
          </p>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
}
