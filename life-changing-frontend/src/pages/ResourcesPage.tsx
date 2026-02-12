import React from 'react';
import { Link } from 'react-router-dom';
import { useLegacyScripts } from '../hooks/useLegacyScripts';
import { FileText, Download, PlayCircle, Image as ImageIcon, Calendar, Clock, MapPin, Mail, ArrowRight, Video, File, FileCode } from 'lucide-react';

export const ResourcesPage = () => {
    useLegacyScripts();

    const annualReports = [
        {
            title: "2024 Annual Impact Report",
            type: "PDF",
            size: "2.4 MB",
            date: "Feb 2025",
            isLatest: true
        },
        {
            title: "2023 Annual Report",
            type: "PDF",
            size: "2.1 MB",
            date: "Jan 2024",
            isLatest: false
        },
        {
            title: "2022 Year in Review",
            type: "PDF",
            size: "1.8 MB",
            date: "Jan 2023",
            isLatest: false
        }
    ];

    const programBriefs = [
        {
            title: "IkiraroBiz Entrepreneurship Model",
            type: "PDF",
            size: "1.2 MB",
            date: "Jan 2025"
        },
        {
            title: "Girls School Retention Strategy",
            type: "PDF",
            size: "980 KB",
            date: "Dec 2024"
        },
        {
            title: "Human Capital Development Framework",
            type: "PDF",
            size: "1.5 MB",
            date: "Nov 2024"
        },
        {
            title: "Pad Box Initiative Case Study",
            type: "PDF",
            size: "750 KB",
            date: "Oct 2024"
        }
    ];

    const researchPublications = [
        {
            title: "Gender-Transformative Change in Rwanda",
            type: "PDF",
            size: "3.2 MB",
            date: "Dec 2024"
        },
        {
            title: "Economic Empowerment Impact Study",
            type: "PDF",
            size: "2.8 MB",
            date: "Sep 2024"
        },
        {
            title: "Mental Resilience & Mindset Shift Report",
            type: "PDF",
            size: "2.1 MB",
            date: "Jun 2024"
        }
    ];

    const multimedia = [
        {
            title: "LCEO Documentary 2024",
            type: "Video",
            date: "Jan 2025",
            action: "View"
        },
        {
            title: "Beneficiary Success Stories",
            type: "Video",
            date: "Dec 2024",
            action: "View"
        },
        {
            title: "Program Overview Presentation",
            type: "PPT",
            size: "5.6 MB",
            date: "Nov 2024",
            action: "Download"
        }
    ];

    const photoGallery = [
        {
            title: "2024 Program Activities",
            type: "Album",
            date: "Dec 2024",
            action: "View"
        },
        {
            title: "Community Events 2024",
            type: "Album",
            date: "Nov 2024",
            action: "View"
        },
        {
            title: "Training & Workshops",
            type: "Album",
            date: "Oct 2024",
            action: "View"
        }
    ];

    const upcomingEvents = [
        {
            type: "In-Person",
            title: "Annual Stakeholder Meeting",
            date: "March 15, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Bugesera District Office"
        },
        {
            type: "Public Event",
            title: "IkiraroBiz Graduation Ceremony",
            date: "April 22, 2025",
            time: "9:00 AM - 12:00 PM",
            location: "Nyamata Community Center"
        },
        {
            type: "Program Activity",
            title: "Girls Empowerment Workshop",
            date: "May 8, 2025",
            time: "2:00 PM - 5:00 PM",
            location: "Safe Space Centers"
        }
    ];

    const renderResourceCard = (item: any) => (
        <div className="flex items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 h-100 transition-all duration-300 hover:shadow-lg hover:border-teal-500/30 group">
            <div className="mr-4 p-3 rounded-xl transition-colors duration-300 group-hover:bg-teal-500/10" style={{ backgroundColor: 'rgba(79, 177, 161, 0.08)' }}>
                {item.type === 'PDF' && <FileText size={24} className="text-teal-600" />}
                {item.type === 'Video' && <Video size={24} className="text-teal-600" />}
                {item.type === 'PPT' && <FileCode size={24} className="text-teal-600" />}
                {item.type === 'Album' && <ImageIcon size={24} className="text-teal-600" />}
            </div>
            <div className="flex-grow">
                <div className="flex items-center mb-1">
                    <h5 className="font-bold mb-0 text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors" style={{ fontSize: '1rem' }}>{item.title}</h5>
                    {item.isLatest && (
                        <span className="badge ml-2 px-2 py-0.5 text-white rounded-full bg-amber-400 font-bold" style={{ fontSize: '9px' }}>LATEST</span>
                    )}
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mt-1 space-x-2">
                    <span className="font-bold text-teal-600/70">{item.type}</span>
                    {item.size && (
                        <>
                            <span className="opacity-30">•</span>
                            <span>{item.size}</span>
                        </>
                    )}
                    <span className="opacity-30">•</span>
                    <span>{item.date}</span>
                </div>
            </div>
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                {item.action === 'View' ? <PlayCircle size={16} /> : <Download size={16} />}
            </button>
        </div>
    );

    return (
        <div className="bg-slate-50 dark:bg-slate-950">
            <div className="hero-wrap" style={{ backgroundImage: "url('/images/bg_2.jpg')", height: '450px', minHeight: '450px', position: 'relative' }}>
                <div className="overlay" style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                <div className="container h-full relative z-10">
                    <div className="row no-gutters slider-text align-items-center justify-content-center" style={{ height: '450px' }}>
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs mb-2"><span className="mr-2"><Link
                                to="/" className="text-teal-400">Home</Link></span> <span className="text-white opacity-70">Resources</span></p>
                            <h1 className="mb-4 text-white font-bold" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>Reports, Research & Media</h1>
                            <p className="text-white/80 mx-auto" style={{ fontSize: '1.25rem', maxWidth: '700px' }}>Access our latest impact reports, program briefs, and multimedia content showcasing our work across Rwanda.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20">
                <div className="container">
                    {/* Annual Reports */}
                    <div className="row mb-16">
                        <div className="col-md-12 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Accountability</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Annual Reports</h2>
                        </div>
                        {annualReports.map((report, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 ftco-animate">
                                {renderResourceCard(report)}
                            </div>
                        ))}
                    </div>

                    {/* Program Briefs */}
                    <div className="row mb-16">
                        <div className="col-md-12 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Strategy</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Program Briefs</h2>
                        </div>
                        {programBriefs.map((brief, index) => (
                            <div key={index} className="col-lg-6 mb-4 ftco-animate">
                                {renderResourceCard(brief)}
                            </div>
                        ))}
                    </div>

                    {/* Research & Publications */}
                    <div className="row mb-16">
                        <div className="col-md-12 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Knowledge</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Research & Publications</h2>
                        </div>
                        {researchPublications.map((pub, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 ftco-animate">
                                {renderResourceCard(pub)}
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {/* Multimedia */}
                        <div className="col-lg-6 mb-16">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                    <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Video</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Multimedia</h2>
                            </div>
                            <div className="space-y-4">
                                {multimedia.map((item, index) => (
                                    <div key={index} className="ftco-animate">
                                        {renderResourceCard(item)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="col-lg-6 mb-16">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-1 w-12 bg-teal-500 rounded-full"></div>
                                    <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">Gallery</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Photo Gallery</h2>
                            </div>
                            <div className="space-y-4">
                                {photoGallery.map((item, index) => (
                                    <div key={index} className="ftco-animate">
                                        {renderResourceCard(item)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Multimedia Gallery - Visual Grid */}
                    <div className="row mb-16">
                        <div className="col-md-12 mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-2">Impact In Action</h2>
                            <p className="text-slate-500">Visual highlights from our operations across the country.</p>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src="/images/image_4.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery 1" />
                                    <a href="/images/image_4.jpg" className="absolute inset-0 flex items-center justify-center bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <ImageIcon size={20} />
                                        </span>
                                    </a>
                                </div>
                                <div className="p-5 border-t">
                                    <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Education</span>
                                    <h3 className="text-lg font-bold mt-1 text-slate-800">School Materials Distribution</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src="/images/image_5.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery 2" />
                                    <a href="/images/image_5.jpg" className="absolute inset-0 flex items-center justify-center bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <ImageIcon size={20} />
                                        </span>
                                    </a>
                                </div>
                                <div className="p-5 border-t">
                                    <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Entrepreneurship</span>
                                    <h3 className="text-lg font-bold mt-1 text-slate-800">Vocational Training Session</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 ftco-animate">
                            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src="/images/image_6.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery 3" />
                                    <a href="https://vimeo.com/45830194" className="absolute inset-0 flex items-center justify-center bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <PlayCircle size={24} />
                                        </span>
                                    </a>
                                </div>
                                <div className="p-5 border-t">
                                    <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Story</span>
                                    <h3 className="text-lg font-bold mt-1 text-slate-800">Keza's Journey (Video)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center heading-section ftco-animate">
                            <span className="subheading" style={{ color: '#4FB1A1', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Events</span>
                            <h2 className="mb-3">Upcoming Events & Activities</h2>
                            <p>Join us at our upcoming events and see our programs in action</p>
                        </div>
                    </div>
                    <div className="row">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="col-md-4 ftco-animate d-flex">
                                <div className="blog-entry align-self-stretch w-100 bg-white shadow-sm rounded overflow-hidden border">
                                    <div className="text p-4">
                                        <div className="meta mb-2">
                                            <span className="badge badge-light text-primary font-weight-bold p-2" style={{ color: '#4FB1A1', backgroundColor: 'rgba(79, 177, 161, 0.1)' }}>{event.type}</span>
                                        </div>
                                        <h3 className="heading mb-3 font-weight-bold"><a href="#">{event.title}</a></h3>
                                        <div className="d-flex align-items-center mb-2 text-muted small">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2 text-muted small">
                                            <Clock size={16} className="mr-2" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-4 text-muted small">
                                            <MapPin size={16} className="mr-2" />
                                            <span>{event.location}</span>
                                        </div>
                                        <p><a href="#" className="btn btn-primary btn-block py-2">Register Interest</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};
