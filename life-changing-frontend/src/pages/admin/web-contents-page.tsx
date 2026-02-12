import React, { useState } from 'react';
import { NavLink, Route, Routes, Navigate, useParams, Link } from 'react-router-dom';
import {
    Home, Info, Briefcase, Compass, FileText, Heart, Phone, DollarSign, List,
    Image as ImageIcon, Video, Type, Save, Plus, Trash2, Globe, Layout,
    Layers, Maximize, BarChart2, Target, Check, ExternalLink, Settings as SettingsIcon,
    FileUp, ArrowRight, Eye, RefreshCw, Users, ArrowLeft, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// --- Shared Components for the CMS ---

const SectionHeader = ({ title, icon: Icon, description }: any) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600">
            <Icon className="h-5 w-5" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{title}</h3>
            {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
    </div>
);

const ContentBlock = ({ children, className }: any) => (
    <div className={cn("bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-6", className)}>
        {children}
    </div>
);

const InputField = ({ label, type = "text", value, onChange, placeholder, description }: any) => (
    <div className="mb-8 last:mb-0">
        <label className="block text-[13px] font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">{label}</label>
        {type === "textarea" ? (
            <textarea
                className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none text-sm leading-relaxed"
                placeholder={placeholder}
                defaultValue={value}
            />
        ) : (
            <input
                type={type}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none text-sm font-medium"
                placeholder={placeholder}
                defaultValue={value}
            />
        )}
        {description && <p className="mt-2 text-[11px] text-slate-500 flex items-center gap-1"><Info size={12} /> {description}</p>}
    </div>
);

const MediaUpload = ({ label, value, type = "image" }: any) => {
    const isVideo = type === "video-link";
    return (
        <div className="mb-6 last:mb-0">
            <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">{label}</label>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-56 h-36 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center justify-center relative overflow-hidden group">
                    {value && !isVideo ? (
                        <>
                            <img src={value} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button size="sm" variant="secondary" className="h-8 text-xs font-bold"><RefreshCw size={14} className="mr-1.5" /> Replace</Button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center p-4">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border flex items-center justify-center mx-auto mb-2 text-slate-400">
                                {isVideo ? <Video size={20} /> : <ImageIcon size={20} />}
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Click to Upload</p>
                        </div>
                    )}
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 shrink-0">
                            {isVideo ? <Globe size={18} /> : <FileUp size={18} />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-black text-slate-800 dark:text-slate-100 truncate uppercase">Asset Path / URL</p>
                            <p className="text-[11px] text-slate-500 truncate">{value || 'No asset selected'}</p>
                        </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-[11px] font-bold bg-white dark:bg-slate-900">Browse Library</Button>
                        {isVideo && <Button variant="ghost" size="sm" className="h-8 text-[11px] text-teal-600 font-bold">Try Link</Button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Page Specific Editors ---

const HomeEditor = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <SectionHeader title="Hero Banner" icon={Maximize} description="The main entry section of the website." />
        <ContentBlock>
            <InputField label="Main Heading" value="Empower a Future Today" />
            <InputField label="Sub-Text Description" type="textarea" value="We support girls, caregivers, and youth by promoting education, health, mentorship, and skills development..." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <MediaUpload label="Hero Background" value="/images/bg_2.jpg" />
                <div className="space-y-4">
                    <InputField label="Primary Button Link" value="/about" />
                    <InputField label="Primary Button Text" value="Learn More" />
                </div>
            </div>
        </ContentBlock>

        <SectionHeader title="Impact Counter" icon={BarChart2} description="Real-time statistics displayed on the home page." />
        <ContentBlock className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <InputField label="Women & Girls Count" value="5000" />
            <InputField label="Education Milestone" value="1200" />
            <InputField label="Livelihoods Created" value="450" />
            <InputField label="Leadership Trained" value="300" />
        </ContentBlock>

        <SectionHeader title="Mission Intro" icon={Target} description="Welcome message section below the counter." />
        <ContentBlock>
            <InputField label="Mission Subheading" value="Our Mission" />
            <InputField label="Mission Title" value="Protecting the Dignity and Rights of Women and Girls" />
            <InputField label="Mission Description Text" type="textarea" value="Life-Changing Endeavor Organization (LCEO) is a non-governmental organization based in Bugesera District, Rwanda..." />
        </ContentBlock>

        <SectionHeader title="Program Section" icon={Layers} description="The heading for the Our Programs section." />
        <ContentBlock>
            <InputField label="Programs Heading" value="Our Programs" />
            <InputField label="Programs Subtitle" type="textarea" value="We implement integrated interventions that strengthen confidence, psychosocial wellbeing, education access, and economic empowerment." />
        </ContentBlock>

        <SectionHeader title="Stories of Change" icon={Heart} description="The heading for the stories carousel." />
        <ContentBlock>
            <InputField label="Stories Section Heading" value="Stories of Change" />
            <InputField label="Stories Section Subtitle" type="textarea" value="Real stories from the women and girls whose lives have been transformed through LCEO's initiatives." />
        </ContentBlock>
    </div>
);

const AboutEditor = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <SectionHeader title="About Introduction" icon={Info} description="The 'Who We Are' section." />
        <ContentBlock>
            <InputField label="Section Title" value="Who We Are" />
            <InputField label="History & Overview" type="textarea" value="Life-Changing Endeavor Organization (LCEO) is a non-governmental organization based in Bugesera District, Rwanda..." />
            <MediaUpload label="About Side Image" value="/images/bg_3.jpg" />
        </ContentBlock>

        <SectionHeader title="Mission & Vision" icon={Eye} description="The core values and future targets." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContentBlock>
                <InputField label="Vision Statement" type="textarea" value="A society where young women and girls are mentally strong, educated, and economically empowered..." />
            </ContentBlock>
            <ContentBlock>
                <InputField label="Mission Statement" type="textarea" value="To walk alongside girls and women as they heal, grow, and thrive — through mindset shift..." />
            </ContentBlock>
        </div>

        <SectionHeader title="Leadership Team" icon={Users} description="Manage the key figures of the organization." />
        <ContentBlock>
            <div className="space-y-4 mb-6">
                {['Sarah Mugabo', 'Jean Paul Uwimana', 'Grace Mutesi'].map((name, i) => (
                    <div key={i} className="p-4 rounded-xl border flex items-center justify-between group hover:border-teal-500/50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <ImageIcon size={18} />
                            </div>
                            <div>
                                <p className="text-sm font-bold">{name}</p>
                                <p className="text-[11px] text-slate-500">Executive Member</p>
                            </div>
                        </div>
                        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100"><Trash2 size={16} /></Button>
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-full border-dashed py-6 gap-2"><Plus size={18} /> Add Team Member</Button>
        </ContentBlock>
    </div>
);

const ResourcesEditor = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <SectionHeader title="Resource Library" icon={FileText} description="Manage reports, briefs, and downloadable files." />
        <ContentBlock>
            <div className="space-y-4 mb-6">
                {[
                    { title: '2024 Annual Impact Report', type: 'PDF', size: '2.4MB' },
                    { title: 'Program Brief: She Can Code', type: 'PDF', size: '1.1MB' },
                    { title: 'LCEO Strategic Plan 2025', type: 'PDF', size: '3.8MB' }
                ].map((file, i) => (
                    <div key={file.title} className="p-4 rounded-xl border flex items-center justify-between group bg-slate-50/50">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-white border flex items-center justify-center text-teal-600 shadow-sm">
                                <FileText size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold">{file.title}</p>
                                <p className="text-[11px] text-slate-500">{file.type} • {file.size}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="icon" variant="ghost" className="h-8 w-8"><RefreshCw size={14} /></Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500"><Trash2 size={14} /></Button>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-full border-dashed py-8 gap-3 flex-col text-slate-500 hover:text-teal-600 hover:border-teal-500/30">
                <Plus size={24} />
                <span className="font-bold uppercase tracking-widest text-[11px]">Upload New Resource</span>
            </Button>
        </ContentBlock>

        <SectionHeader title="Multimedia Content" icon={Video} description="Manage featured videos and presentations." />
        <ContentBlock>
            <InputField label="Featured Youtube Link" value="https://vimeo.com/45830194" description="Used for the 'Keza's Journey' story video." />
            <InputField label="Video Thumbnail" value="/images/image_6.jpg" />
        </ContentBlock>
    </div>
);

const ContactEditor = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <SectionHeader title="Contact Information" icon={Phone} description="Update the organization's official details." />
        <ContentBlock>
            <InputField label="Physical Address" type="textarea" value="Bugesera District, Nyamata Sector Eastern Province, Rwanda" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <InputField label="Primary Phone" value="+250 788 123 456" />
                <InputField label="Official Email" value="info.lceo@gmail.com" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <InputField label="Website URL" value="lceo.org" />
                <InputField label="Google Maps Link" value="https://www.google.com/maps/embed?..." />
            </div>
        </ContentBlock>

        <SectionHeader title="Social Media Connections" icon={Globe} description="Links to the organization's social profiles." />
        <ContentBlock className="space-y-4">
            <InputField label="Twitter / X" value="https://twitter.com/LCEO_Rwanda" />
            <InputField label="Facebook" value="https://facebook.com/LCEO" />
            <InputField label="Instagram" value="https://instagram.com/lceo_rwanda" />
            <InputField label="LinkedIn" value="https://linkedin.com/company/lceo" />
        </ContentBlock>
    </div>
);

// --- Main CMS Container ---

const PageContentEditor = () => {
    const { pageId } = useParams();
    const pageName = pageId ? pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Home';
    const [isPublishing, setIsPublishing] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const handlePublish = () => {
        setIsPublishing(true);

        // Simulating backend call
        setTimeout(() => {
            setIsPublishing(false);
            toast.success(`Successfully published changes to ${pageName}!`, {
                description: "The public website has been updated with your new content.",
            });
        }, 1500);
    };

    const getPreviewUrl = (sectionId?: string) => {
        const routes: any = {
            'home': '/',
            'about-us': '/about',
            'how-we-work': '/how-we-work',
            'strategic-direction': '/strategic-direction',
            'impact-stories': '/impact-stories',
            'resources': '/resources',
            'contact': '/contact',
            'donate': '/donate',
            'our-programs-details': '/our-programs-details'
        };

        const path = routes[pageId || 'home'] || '/';
        // Add preview=true query param to hide global navbar/footer in preview
        let url = `/#${path}?preview=true`;
        if (sectionId) {
            url += `#${sectionId}`;
        }
        return url;
    };

    const [previewUrl, setPreviewUrl] = useState(getPreviewUrl());

    // Sync preview URL when page changes
    React.useEffect(() => {
        setPreviewUrl(getPreviewUrl());
    }, [pageId]);

    const scrollToSection = (id: string) => {
        const baseUrl = getPreviewUrl();
        // Construct URL with hash for scrolling
        const urlWithHash = `${baseUrl}${baseUrl.includes('?') ? '' : '?'}&section=${id}`;
        // For simplicity with HashRouter and scrolling, we'll just use the hash if it works, 
        // but given the current getPreviewUrl logic:
        setPreviewUrl(getPreviewUrl(id));
        // Reset URL after a short delay so clicking the same button again works
        setTimeout(() => setPreviewUrl(getPreviewUrl(id)), 50);
    };

    const handleLiveSite = () => {
        setPreviewUrl(getPreviewUrl());
        setShowPreview(true);
    };

    const getEditor = () => {
        switch (pageId) {
            case 'home': return <HomeEditor />;
            case 'about-us': return <AboutEditor />;
            case 'strategic-direction':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="Strategic Goals" icon={Compass} description="Update the organization's long-term objectives." />
                        <ContentBlock>
                            <InputField label="Strategy Heading" value="Our Strategic Direction" />
                            <InputField label="Strategic Vision 2025" type="textarea" value="Ensuring sustainable growth and measurable impact across all Rwandan sectors..." />
                        </ContentBlock>
                        <SectionHeader title="Key Pillars" icon={Layers} description="The fundamental areas of operation." />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ContentBlock><InputField label="Pillar 1: Education" value="Quality Learning for All" /></ContentBlock>
                            <ContentBlock><InputField label="Pillar 2: Livelihoods" value="Economic Independence" /></ContentBlock>
                        </div>
                    </div>
                );
            case 'impact-stories':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="Featured Story Cards" icon={Heart} description="Manage the transformation narratives shown on the site." />
                        <ContentBlock>
                            <div className="space-y-4 mb-6">
                                {[
                                    { name: "Ineza's Journey", category: "Livelihoods", img: "/images/person_1.jpg" },
                                    { name: "Keza's Education", category: "Education", img: "/images/image_6.jpg" }
                                ].map((story, i) => (
                                    <div key={i} className="p-4 rounded-2xl border flex items-center gap-4 bg-slate-50/50 group">
                                        <div className="h-16 w-16 rounded-xl overflow-hidden shadow-sm">
                                            <img src={story.img} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-sm">{story.name}</p>
                                            <p className="text-[11px] text-teal-600 font-bold uppercase tracking-wider">{story.category}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="group-hover:text-red-500 transition-colors"><Trash2 size={16} /></Button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full border-dashed py-8 flex-col gap-2">
                                <Plus size={20} />
                                <span className="font-bold text-[11px]">Add New Story Chapter</span>
                            </Button>
                        </ContentBlock>
                    </div>
                );
            case 'how-we-work':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="Operational Model" icon={Briefcase} description="Methodology used in every program." />
                        <ContentBlock>
                            <InputField label="Main Heading" value="Our Holistic Approach" />
                            <InputField label="Intro Text" type="textarea" value="We implement integrated interventions that strengthen confidence, psychosocial wellbeing..." />
                        </ContentBlock>
                        <SectionHeader title="Program Steps" icon={List} description="The sequence of support for beneficiaries." />
                        <ContentBlock>
                            <div className="space-y-4">
                                {['Identification', 'Mindset Shift', 'Skill Acquisition', 'Graduation'].map((step, i) => (
                                    <InputField key={i} label={`Step ${i + 1}`} value={step} />
                                ))}
                            </div>
                        </ContentBlock>
                    </div>
                );
            case 'resources': return <ResourcesEditor />;
            case 'contact': return <ContactEditor />;
            case 'donate':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="Donation Options" icon={DollarSign} description="Manage giving tiers and impact labels." />
                        <ContentBlock>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ContentBlock className="mb-0"><InputField label="Tier 1 Amount" value="$25" /><InputField label="Tier 1 Label" value="Menstrual Hygiene Support" /></ContentBlock>
                                <ContentBlock className="mb-0"><InputField label="Tier 2 Amount" value="$50" /><InputField label="Tier 2 Label" value="School Fees Coverage" /></ContentBlock>
                                <ContentBlock className="mb-0"><InputField label="Tier 3 Amount" value="$100" /><InputField label="Tier 3 Label" value="Entrepreneurship Seed" /></ContentBlock>
                            </div>
                        </ContentBlock>
                    </div>
                );
            case 'our-programs-details':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="Program Detail Template" icon={List} description="Configure how specific program details are presented." />
                        <ContentBlock>
                            <InputField label="Default Challenge Header" value="The Challenge" />
                            <InputField label="Default Solution Header" value="Our Solution" />
                            <MediaUpload label="Default Detail Banner" />
                        </ContentBlock>
                    </div>
                );
            default:
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SectionHeader title="General Content" icon={Layout} description={`Standard content editor for the ${pageName} page.`} />
                        <ContentBlock>
                            <InputField label="Page Main Heading" value={`${pageName} Section`} />
                            <InputField label="Intro Narrative" type="textarea" placeholder="Enter the main content for this page..." />
                            <MediaUpload label="Featured Hero Image" />
                        </ContentBlock>
                    </div>
                );
        }
    };

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in zoom-in-95 duration-500">
            {/* Back Button and Content Header */}
            <div className="mb-10">
                <Button variant="ghost" className="p-0 hover:bg-transparent mb-10 group" asChild>
                    <Link to="/admin/web-contents" className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-col items-start translate-y-[2px]">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] leading-none mb-1">Architecture</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[1px] leading-none">Back to Menu</span>
                        </div>
                    </Link>
                </Button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[2px] mb-2">
                            <Globe size={14} />
                            <span>Page Management</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Editing <span className="text-teal-600">{pageName}</span></h2>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <Button
                            variant="outline"
                            className="h-12 md:h-14 px-8 rounded-2xl bg-white shadow-sm border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all hover:shadow-md w-full sm:w-auto"
                            onClick={handleLiveSite}
                        >
                            <Eye size={20} className="mr-2" /> Live Site
                        </Button>
                        <Button
                            className="h-12 md:h-14 px-10 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white shadow-2xl shadow-teal-500/30 font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 w-full sm:w-auto"
                            onClick={handlePublish}
                            disabled={isPublishing}
                        >
                            {isPublishing ? (
                                <RefreshCw size={20} className="mr-2 animate-spin" />
                            ) : (
                                <Save size={20} className="mr-2" />
                            )}
                            {isPublishing ? "Publishing..." : "Publish Now"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="space-y-4">
                {getEditor()}
            </div>

            {/* Quick Save Floating Button */}
            <div className="fixed bottom-10 right-10 z-50">
                <Button
                    className="h-16 w-16 rounded-2xl bg-teal-600 text-white shadow-2xl shadow-teal-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center disabled:opacity-70"
                    onClick={handlePublish}
                    disabled={isPublishing}
                >
                    {isPublishing ? (
                        <RefreshCw size={28} className="animate-spin" />
                    ) : (
                        <Save size={28} />
                    )}
                </Button>
            </div>

            {/* Live Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 md:ml-64 pt-16 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowPreview(false)}></div>

                    <div className="relative w-full max-w-6xl h-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col animate-in zoom-in-95 duration-500">
                        {/* Compact Preview Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-9 w-9 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 shadow-sm border border-teal-100/50 dark:border-teal-500/20">
                                    <Eye size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[2px] mb-0.5">Live Previewing</span>
                                    <span className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-wider">{pageName} Page</span>
                                </div>
                            </div>

                            {/* Section Navigation Shortcuts */}
                            {pageId === 'home' && (
                                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50 overflow-x-auto">
                                    {[
                                        { label: 'Hero', id: 'hero' },
                                        { label: 'Stats', id: 'section-counter' },
                                        { label: 'Mission', id: 'mission' },
                                        { label: 'Programs', id: 'programs' },
                                        { label: 'Stories', id: 'stories' }
                                    ].map((sec) => (
                                        <button
                                            key={sec.id}
                                            onClick={() => scrollToSection(sec.id)}
                                            className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
                                        >
                                            {sec.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-9 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    onClick={() => window.open(getPreviewUrl(), '_blank')}
                                >
                                    <ExternalLink size={14} className="mr-2" /> New Tab
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    onClick={() => setShowPreview(false)}
                                >
                                    <X size={20} className="text-slate-400" />
                                </Button>
                            </div>
                        </div>

                        {/* Iframe View */}
                        <div className="flex-1 overflow-hidden bg-slate-50 dark:bg-slate-950">
                            <iframe
                                key={previewUrl}
                                src={previewUrl}
                                className="w-full h-full border-none"
                                title="Live Preview"
                            />
                        </div>

                        {/* Footer Controls */}
                        <div className="px-6 py-4 bg-white/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center backdrop-blur-sm">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                Previewing live environment • Changes must be published to save
                            </p>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="h-9 px-6 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xl transition-all"
                                onClick={() => setShowPreview(false)}
                            >
                                Close Preview
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Menu View (Initial Side-Menu State) ---

const WebContentsMenu = () => {
    const navLinks = [
        { name: "Home", path: "home", icon: Home },
        { name: "About Us", path: "about-us", icon: Info },
        { name: "How We Work", path: "how-we-work", icon: Briefcase },
        { name: "Strategic Direction", path: "strategic-direction", icon: Compass },
        { name: "Resources", path: "resources", icon: FileText },
        { name: "Impact Stories", path: "impact-stories", icon: Heart },
        { name: "Contact", path: "contact", icon: Phone },
        { name: "Donate", path: "donate", icon: DollarSign },
        { name: "Program Details", path: "our-programs-details", icon: List },
    ];

    return (
        <div className="max-w-full md:max-w-[320px] animate-in slide-in-from-left-4 duration-500">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-8 pb-4">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-14 w-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/30 shrink-0">
                            <Globe size={26} strokeWidth={2.5} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tight">LCEO</h3>
                            <p className="text-[10px] font-black uppercase tracking-[1.5px] text-teal-600 mt-1.5 truncate">CMS ENGINE V2.0</p>
                        </div>
                    </div>

                    <div className="space-y-1 mb-10">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[2px] ml-4 mb-5">Site Architecture</p>
                        <nav className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[15px] font-bold text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-700 dark:hover:text-white transition-all duration-300 group"
                                >
                                    <link.icon size={20} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
                                    <span className="flex-1">{link.name}</span>
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="p-8 pt-4 border-t border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20">
                    <Link
                        to="/admin/settings"
                        className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-all group"
                    >
                        <SettingsIcon size={18} className="group-hover:rotate-45 transition-transform" />
                        <span>Global Settings</span>
                    </Link>
                </div>
            </div>

            <div className="mt-6 px-10">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                    Select a page to begin editing content. The menu will hide automatically.
                </p>
            </div>
        </div>
    );
};

export const WebContentsPage = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <Routes>
                <Route path="/" element={<WebContentsMenu />} />
                <Route path=":pageId" element={<PageContentEditor />} />
            </Routes>
        </div>
    );
};
