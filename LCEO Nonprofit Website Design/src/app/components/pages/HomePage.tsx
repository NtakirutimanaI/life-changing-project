import { Users, GraduationCap, Briefcase, Heart, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Medal, Check, Target, TrendingUp } from 'lucide-react';
import { CampaignsSection } from '@/app/components/CampaignsSection';
import { VideoSection } from '@/app/components/VideoSection';
import { WhatWeDoSection } from '@/app/components/WhatWeDoSection';

import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { HeroCarousel } from '@/app/components/HeroCarousel';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    {
      number: '5,000',
      label: 'Reached & Empowered',
      topLabel: 'Women & Girls',
      bg: '#1abc9c'
    },
    {
      number: '1,200',
      label: 'Girls stayed in school',
      topLabel: 'Education',
      bg: '#16a085'
    },
    {
      number: '450',
      label: 'Businesses launched',
      topLabel: 'Livelihoods',
      bg: '#c5a37d'
    },
    {
      number: '300',
      label: 'Change Champions trained',
      topLabel: 'Leadership',
      bg: '#122f2b',
      lightText: true
    },
  ];

  const testimonials = [
    {
      quote: "LCEO gave me the confidence and skills to start my tailoring business. Now I support my family and employ two other young women.",
      name: "Grace M.",
      role: "IkiraroBiz Graduate, Kigali",
      image: "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "The Pad Box Initiative changed everything. I no longer miss school during my period, and my grades have improved significantly.",
      name: "Divine K.",
      role: "School Retention Program, Gasabo",
      image: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "Through the mental resilience program, I learned to overcome trauma and believe in my potential. Today, I mentor other young women.",
      name: "Hope N.",
      role: "Human Capital Program, Nyarugenge",
      image: "https://images.unsplash.com/flagged/photo-1570562119798-a4b2a542fe3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    },
  ];

  const sdgs = [
    { number: 1, title: 'No Poverty', color: '#E5243B' },
    { number: 3, title: 'Good Health', color: '#4C9F38' },
    { number: 4, title: 'Quality Education', color: '#C5192D' },
    { number: 5, title: 'Gender Equality', color: '#FF3A21' },
    { number: 8, title: 'Decent Work', color: '#A21942' },
    { number: 10, title: 'Reduced Inequalities', color: '#DD1367' },
  ];

  const partners = [
    'FAWE Rwanda',
    'Ecorys International',
    'Mor Assayag Foundation',
    'UN Women Rwanda',
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Impact Statistics - Redesigned to match reference image */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-1 flex flex-col min-h-[320px] relative transition-transform hover:scale-[1.02] duration-300"
              style={{
                backgroundColor: stat.bg,
              }}
            >
              {/* Standard Design Structure */}
              <div className="flex-1 py-14 px-8 flex flex-col items-start justify-between">
                {/* Top Label */}
                <div className={`text-xl md:text-2xl font-medium ${stat.lightText ? 'text-white/80' : 'text-accent/80'} mb-4 font-poppins`}>
                  {stat.topLabel}
                </div>

                {/* Big Number */}
                <div className={`text-5xl md:text-7xl font-black ${stat.lightText ? 'text-white' : 'text-accent'} mb-4 tracking-tighter leading-none`}>
                  {stat.number}
                </div>

                {/* Bottom Label */}
                <div className={`text-sm md:text-lg font-bold ${stat.lightText ? 'text-white/90' : 'text-accent/90'} leading-snug max-w-[200px]`}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Introduction Section */}
      <section className="pb-24 md:pb-60 bg-white overflow-hidden" style={{ marginTop: '50px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-8">

            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">
                Who We Are
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.15] text-accent">
                Together, We Make <br className="hidden md:block" />
                <span className="text-primary">A Difference!</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Life-Changing Endeavor Organization (LCEO) connects vulnerable young women to life-changing opportunities. We deliver holistic support while building a sustainable ecosystem for growth.
                <br /><br />
                Charitable giving is not just a duty; it's an investment in the future. We ensure every contribution reaches those who need it most.
              </p>

              <Button
                onClick={() => onNavigate('donate')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-4 rounded-md shadow-lg transition-all text-base"
              >
                Make A Donation
              </Button>
            </motion.div>

            {/* Right Column: Image Arrangements (Small & Right Aligned) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <div className="space-y-3 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=300&fit=crop"
                    alt="Child Smiling"
                    className="w-full aspect-[4/5] object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=300&fit=crop"
                    alt="Children Learning"
                    className="w-full aspect-square object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=300&fit=crop"
                    alt="Happy Kids"
                    className="w-full aspect-square object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=300&fit=crop"
                    alt="Community"
                    className="w-full aspect-[4/5] object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Our Story Section - Three Columns */}
      <section className="py-16 bg-white relative border-b border-gray-100 overflow-hidden">
        {/* Dotted World Map Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full text-secondary" fill="currentColor">
            <path d="M220 180h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm-150 10h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2z" />
            <circle cx="500" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="500" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
            <circle cx="500" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 8" />
          </svg>
        </div>

        {/* Yellow accent bar on the right */}
        <div className="absolute top-0 right-0 w-2 h-full bg-secondary z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-0">

            {/* Column 1: Our History */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="px-8 py-6 relative"
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-8xl font-black text-secondary opacity-10 leading-none pointer-events-none">1</div>
                <h3 className="text-xl font-bold text-accent mb-3 relative z-10">
                  <span className="text-5xl font-black text-secondary mr-2">1</span>
                  Our History
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded to support vulnerable women in Rwanda, LCEO has grown from a local initiative to a transformative force for thousands.
              </p>
            </motion.div>

            {/* Column 2: Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 py-6 relative border-l border-gray-200"
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-8xl font-black text-secondary opacity-10 leading-none pointer-events-none">2</div>
                <h3 className="text-xl font-bold text-accent mb-3 relative z-10">
                  <span className="text-5xl font-black text-secondary mr-2">2</span>
                  Our Mission
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower women through education, economic support, and mental health care, building a sustainable future for all.
              </p>
            </motion.div>

            {/* Column 3: Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="px-8 py-6 relative border-l border-gray-200"
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-8xl font-black text-secondary opacity-10 leading-none pointer-events-none">3</div>
                <h3 className="text-xl font-bold text-accent mb-3 relative z-10">
                  <span className="text-5xl font-black text-secondary mr-2">3</span>
                  Community
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We believe in community-led change. By working with local leaders and families, we ensure sustainable impact.
              </p>
            </motion.div>

          </div>
        </div>
      </section>




      {/* SDG Alignment - Redesigned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-accent">Aligned with Global Goals</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Our programs directly contribute to the United Nations Sustainable Development Goals
            </p>
          </motion.div>

          {/* SDG Cards - Compact Grid */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sdgs.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div
                  className="w-24 h-24 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-md group-hover:shadow-lg transition-all"
                  style={{ backgroundColor: sdg.color }}
                >
                  <div className="text-2xl font-black mb-1">{sdg.number}</div>
                  <div className="text-[9px] px-2 font-semibold uppercase tracking-wide text-center leading-tight">
                    {sdg.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Recent Campaigns Section */}
      <CampaignsSection onNavigate={onNavigate} />

      {/* Video Impact Section */}
      <VideoSection />

      {/* What We Do Cards Section based on User Request */}
      <WhatWeDoSection />

      {/* Partners Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-400 uppercase tracking-widest">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 flex items-center justify-center text-center font-bold text-gray-500 shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0 cursor-pointer border border-gray-100"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
