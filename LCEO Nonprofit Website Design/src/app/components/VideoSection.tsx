import { Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout with Large Gap for Explicit Separation */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-stretch md:items-center">

                    {/* Left Side: Circular Video Trigger with Brand Overlay */}
                    <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px] w-full">
                        {!isPlaying ? (
                            <div
                                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] cursor-pointer group"
                                onClick={() => setIsPlaying(true)}
                            >
                                {/* THE CIRCULAR CONTAINER */}
                                <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl bg-gray-900 z-10">
                                    {/* Static Background Image - Very Subtle Texture */}
                                    <img
                                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200"
                                        alt="Community Impact"
                                        className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* HIGH-DENSITY BRAND OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-[#0d211e] mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"></div>
                                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors duration-500"></div>
                                </div>

                                {/* Center UI elements */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    {/* Large Translucent Outer Disk - Pulse Effect */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.15, 1],
                                            opacity: [0.1, 0.4, 0.1]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute w-44 h-44 md:w-64 md:h-64 bg-white/20 rounded-full blur-xl pointer-events-none"
                                    />

                                    {/* Animated Circular Ripples */}
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0.6, scale: 0.7 }}
                                            animate={{ opacity: 0, scale: 2.2 }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.8,
                                                ease: "easeOut"
                                            }}
                                            className="absolute w-32 h-32 border-2 border-white/60 rounded-full pointer-events-none"
                                        />
                                    ))}

                                    {/* Main White Play Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-[#13d4d4] z-20"
                                    >
                                        <Play fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-black ml-1.5 group-hover:text-white transition-colors" />
                                    </motion.div>

                                    {/* Floating Label Overlay inside the circle area */}
                                    <div className="absolute bottom-[20%] text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] drop-shadow-lg">Watch Story</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Video State */
                            <div className="relative w-full h-full bg-black overflow-hidden animate-in fade-in duration-500">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                                    className="absolute top-6 right-6 z-30 bg-red-600 hover:bg-red-700 text-white p-3 transition-colors shadow-2xl rounded-full"
                                >
                                    <X size={24} />
                                </button>

                                <video
                                    className="absolute inset-0 w-full h-full object-cover z-20"
                                    controls
                                    autoPlay
                                    playsInline
                                    src="https://videos.pexels.com/video-files/4057335/4057335-hd_1920_1080_25fps.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Text Content Box */}
                    <div
                        className="bg-[#004037] p-8 md:p-16 lg:p-20 min-h-[450px] md:h-[600px] flex flex-col justify-center shadow-2xl relative overflow-hidden"
                        style={{ backgroundColor: '#004037' }}
                    >
                        {/* Decorative Pattern */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 space-y-6 md:space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white block drop-shadow-md"
                            >
                                Over 2.5 Billion People <br />
                                <span className="text-white/90">Lack Safe Drinking</span> <br />
                                <span className="text-[#13d4d4] drop-shadow-[0_2px_10px_rgba(19,212,212,0.3)]">Clean Water!</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-white/80 text-lg md:text-xl leading-relaxed block max-w-xl font-medium"
                            >
                                Every child deserves a chance to grow, learn, and dream. But for millions of children around the world, poverty is a daily reality that robs them of opportunities most of us take for granted.
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover="hover"
                                className="relative bg-[#13d4d4] text-black font-black py-5 px-12 shadow-[0_10px_30px_rgba(19,212,212,0.3)] uppercase tracking-[0.2em] text-sm md:text-base inline-flex items-center gap-4 transition-all w-fit overflow-hidden group/btn"
                            >
                                {/* Active Background Hover Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-white"
                                    initial={{ x: '-100%' }}
                                    variants={{ hover: { x: '100%' } }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    style={{ opacity: 0.2 }}
                                />

                                <span className="relative z-10">Make A Donation</span>

                                <motion.span
                                    className="relative z-10 text-xl font-light"
                                    variants={{
                                        hover: { x: 8 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    &rarr;
                                </motion.span>

                                {/* Subtle Border animation on hover */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-white/30 opacity-0"
                                    variants={{ hover: { opacity: 1, scale: 1.05 } }}
                                />
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
