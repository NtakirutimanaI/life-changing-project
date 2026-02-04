import { motion } from 'framer-motion';
import { Droplets, Church, School, HeartHandshake, ArrowRight } from 'lucide-react';


const services = [
    {
        icon: <Droplets size={64} strokeWidth={1} />,
        title: "Clean Water For Communities",
        description: "Providing sustainable access to clean water and sanitation for vulnerable communities.",
        bgIcon: <Droplets strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <Church size={64} strokeWidth={1} />,
        title: "Faith & Community Building",
        description: "Strengthening community bonds through spiritual support and shared values.",
        bgIcon: <Church strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <School size={64} strokeWidth={1} />,
        title: "Education for Every Child",
        description: "Ensuring access to quality education and learning resources for impactful futures.",
        bgIcon: <School strokeWidth={0.5} />,
        color: "bg-primary"
    },
    {
        icon: <HeartHandshake size={64} strokeWidth={1} />,
        title: "Medical & Health Services",
        description: "Delivering essential healthcare services to underserved regions for better living.",
        bgIcon: <HeartHandshake strokeWidth={0.5} />,
        color: "bg-primary"
    }
];

export function WhatWeDoSection() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-secondary font-bold text-sm tracking-[0.2em] uppercase">
                            What We Do?
                        </h4>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-accent leading-tight"
                    >
                        We Believe That We Can Save <br className="hidden md:block" />
                        More Lives With You!
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed pt-2"
                    >
                        We implement holistic programs addressing poverty's root causes, ensuring sustainable development and lasting empowerment.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover="hover"
                            className="bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(19,212,212,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center group h-full border border-gray-50 cursor-pointer"
                        >
                            {/* Animated Vibrant Cyan Background Fill - Slides from Left */}
                            <motion.div
                                className="absolute inset-0 bg-[#13d4d4] z-0"
                                initial={{ x: '-100%' }}
                                variants={{
                                    hover: { x: 0 }
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />

                            {/* Watermark Icon - Subtle and Animated */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 pointer-events-none text-[#13d4d4] z-10"
                                variants={{
                                    hover: { scale: 1.2, rotate: 10, opacity: 0.1 }
                                }}
                            >
                                <span className="w-full h-full block [&>svg]:w-full [&>svg]:h-full">
                                    {service.bgIcon}
                                </span>
                            </motion.div>

                            {/* Main Icon */}
                            <motion.div
                                className="mb-6 text-[#13d4d4] relative z-20"
                                variants={{
                                    hover: { scale: 1.1, y: -5, color: "#000000" }
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {service.icon}
                            </motion.div>

                            <div className="relative z-20 flex-grow">
                                <motion.h3
                                    className="text-xl font-bold text-[#004037] mb-4 leading-tight transition-colors duration-300"
                                    variants={{
                                        hover: { color: "#000000" }
                                    }}
                                >
                                    {service.title}
                                </motion.h3>

                                <motion.p
                                    className="text-gray-500 text-sm leading-relaxed mb-6 transition-colors duration-300"
                                    variants={{
                                        hover: { color: "#000000" }
                                    }}
                                >
                                    {service.description}
                                </motion.p>
                            </div>

                            {/* Link - Interactive Read More */}
                            <div className="relative z-20 mt-auto">
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center text-sm font-black text-[#13d4d4] transition-colors uppercase tracking-[0.2em] gap-2"
                                    variants={{
                                        hover: { gap: '12px', x: 5, color: "#000000" }
                                    }}
                                >
                                    Read More
                                    <ArrowRight size={16} />
                                </motion.a>
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


