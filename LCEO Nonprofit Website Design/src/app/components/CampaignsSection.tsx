import { AreaChart, Wallet, Target, TrendingUp } from 'lucide-react';

interface CampaignsSectionProps {
    onNavigate: (page: string) => void;
}

export function CampaignsSection({ onNavigate }: CampaignsSectionProps) {
    const campaigns = [
        {
            title: "Water for Life",
            // ... (rest stays same until line 92)
            // I need to be careful with range logic in replace_file_content
        }
    ]
    // ...
    // Actually, I can just replace the imports and the specific div line separately or together if they are close.
    // They are far apart (line 2 vs line 93).
    // I will do two edits or use replace_file_content for imports first.

    title: "Water for Life",
        category: "Water",
            goal: "$450,000",
                raised: "$401,960",
                    percent: 89,
                        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
                            desc: "Providing clean, safe drinking water to remote villages. Every drop counts towards a healthier, brighter future."
},
{
    title: "School Construction",
        category: "Sanitation",
            goal: "$250,000",
                raised: "$201,960",
                    percent: 80,
                        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600",
                            desc: "Building safe classrooms where children can learn, grow, and dream. Education is the foundation for lasting change."
},
{
    title: "General Healthcare",
        category: "Education",
            goal: "$550,000",
                raised: "$320,960",
                    percent: 58,
                        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=600",
                            desc: "Delivering essential medical supplies and care to those in need. Compassion and healing for a stronger community."
}
    ];

return (
    <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Center Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto mb-16"
            >
                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">
                    Recent Campaigns!
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-accent mb-6 leading-tight">
                    Fundraising For The People And Causes You Care About!
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
                    Join our mission to empower communities and transform lives. Every contribution creates a ripple of positive change.
                </p>
            </motion.div>

            {/* Campaign Grid - Smaller Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {campaigns.map((campaign, index) => (
                    <motion.div
                        key={index}
                        initial="initial"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                            hover: { y: -8, transition: { duration: 0.3 } }
                        }}
                        className="bg-white rounded-lg shadow-lg shadow-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
                    >
                        {/* Image Container - Compact Height */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Donate Now Button - Tighter */}
                            <div className="absolute top-3 right-3">
                                <button className="bg-secondary hover:bg-secondary/90 text-accent font-black text-[9px] uppercase py-1.5 px-3 rounded shadow-lg transition-colors">
                                    Donate Now
                                </button>
                            </div>
                        </div>

                        {/* Card Content - Compact Padding */}
                        < div className="p-5 pb-7" >
                            <span className="inline-block bg-primary text-white text-[8px] font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                                {campaign.category}
                            </span>

                            <h3 className="text-xl font-black text-accent mb-3 group-hover:text-primary transition-colors">
                                {campaign.title}
                            </h3>

                            <p className="text-xs text-gray-500 mb-6 leading-relaxed line-clamp-2">
                                {campaign.desc}
                            </p>

                            {/* Progress Bar - ALWAYS VISIBLE */}
                            < div className="mb-6" >
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-wider">Progress</span>
                                    <span className="text-sm font-black text-accent">{campaign.percent}%</span>
                                </div>
                                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primary to-secondary"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${campaign.percent}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* Footer Stats - More Compact & Descriptive */}
                            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                                        <Target className="w-4 h-4 text-secondary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Target Goal</span>
                                        <span className="text-xs font-black text-accent leading-none">{campaign.goal}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Contributed</span>
                                        <span className="text-xs font-black text-accent leading-none">{campaign.raised}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hover accent line - Fixed Reveal Logic */}
                        <motion.div
                            variants={{
                                initial: { scaleX: 0, opacity: 0 },
                                hover: { scaleX: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
                        />
                    </motion.div>
                ))
                }
            </div >
        </div >
    </section >
);
}
