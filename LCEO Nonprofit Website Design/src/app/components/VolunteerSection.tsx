import React from 'react';
import { motion } from 'framer-motion';

export function VolunteerSection() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[#004037]">
            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
                    alt="LCEO Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-[#004037]/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#004037]/70 to-transparent"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* LEFT SIDE: TEXT AREA (Expands to fill space) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-white space-y-8"
                    >
                        <div className="space-y-4">
                            <h4 className="text-[#facc15] font-black text-sm tracking-[0.3em] uppercase flex items-center gap-3">
                                <span className="w-10 h-[2px] bg-[#facc15]"></span>
                                Join With Us
                            </h4>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                                Because Every <br />
                                <span className="text-white">Life Matters!</span>
                            </h2>
                        </div>

                        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                            At LCEO, we believe that volunteering is not just an act of kindness, but a powerful catalyst for change. By joining our team, you contribute directly to building stronger communities and empowering future generations.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#004037" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#facc15] text-[#004037] font-black py-4 px-12 rounded-sm uppercase tracking-widest text-sm shadow-xl transition-all"
                            style={{ backgroundColor: '#facc15', color: '#004037' }}
                        >
                            Donate Now
                        </motion.button>
                    </motion.div>

                    {/* RIGHT SIDE: EXTREMELY SLIM FORM CARD (Fixed 200px) */}
                    <div className="flex justify-center lg:justify-end shrink-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-5 shadow-[0_40px_50px_-20px_rgba(0,0,0,0.6)] w-[200px] rounded-none border-b-8 border-[#facc15]"
                        >
                            <div className="mb-6">
                                <h4 className="text-[#facc15] font-bold text-[10px] tracking-widest uppercase mb-1">
                                    Join Us
                                </h4>
                                <h3 className="text-xl font-black text-[#004037] leading-tight">
                                    Volunteer
                                </h3>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#f8f9fa] border-none py-3 px-4 text-xs text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#facc15] outline-none transition-all font-semibold rounded-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-[#f8f9fa] border-none py-3 px-4 text-xs text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#facc15] outline-none transition-all font-semibold rounded-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full bg-[#f8f9fa] border-none py-3 px-4 text-xs text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#facc15] outline-none transition-all font-semibold rounded-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full bg-[#f8f9fa] border-none py-3 px-4 text-xs text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-[#facc15] outline-none transition-all font-semibold resize-none rounded-none"
                                ></textarea>

                                <motion.button
                                    whileHover={{ backgroundColor: "#004037", color: "#ffffff" }}
                                    className="w-full bg-[#facc15] text-[#004037] font-black py-3 px-2 uppercase tracking-tighter text-[10px] shadow-lg transition-all"
                                    style={{ backgroundColor: '#facc15', color: '#004037' }}
                                >
                                    Join Cause
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
