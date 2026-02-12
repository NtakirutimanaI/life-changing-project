import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
    Users,
    Heart,
    FolderKanban,
    FileText,
    Search as SearchIcon,
    ArrowRight,
    User,
    ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockBeneficiaries, mockDonors, mockPrograms, mockStaff } from '@/lib/mock-data';
import { motion } from 'framer-motion';

export function SearchResultsPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = {
        beneficiaries: mockBeneficiaries.filter(b =>
            b.fullName.toLowerCase().includes(query.toLowerCase()) ||
            b.location.district.toLowerCase().includes(query.toLowerCase())
        ),
        donors: mockDonors.filter(d =>
            d.fullName.toLowerCase().includes(query.toLowerCase()) ||
            d.country.toLowerCase().includes(query.toLowerCase())
        ),
        programs: mockPrograms.filter(p =>
            p.name.en.toLowerCase().includes(query.toLowerCase()) ||
            p.description.en.toLowerCase().includes(query.toLowerCase())
        ),
        staff: mockStaff.filter(s =>
            s.fullName.toLowerCase().includes(query.toLowerCase()) ||
            s.role.toLowerCase().includes(query.toLowerCase()) ||
            (s.department?.toLowerCase().includes(query.toLowerCase()) ?? false)
        )
    };

    const totalResults = results.beneficiaries.length + results.donors.length + results.programs.length + results.staff.length;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8">
            <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                        <SearchIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-teal-900 dark:text-white tracking-tight">Search Results</h1>
                </div>
                <p className="text-muted-foreground">
                    Found {totalResults} results for <span className="font-bold text-teal-600">"{query}"</span>
                </p>
            </div>

            {totalResults === 0 ? (
                <Card className="border-dashed py-20 text-center">
                    <CardContent>
                        <div className="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <SearchIcon className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No results found</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            We couldn't find anything matching your search. Try different keywords or check the spelling.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid gap-8"
                >
                    {/* Beneficiaries Section */}
                    {results.beneficiaries.length > 0 && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 border-b pb-2">
                                <Users className="w-5 h-5 text-teal-600" />
                                <h2 className="text-xl font-bold text-teal-950 dark:text-white">Beneficiaries ({results.beneficiaries.length})</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {results.beneficiaries.map(ben => (
                                    <motion.div key={ben.id} variants={item}>
                                        <Card className="hover:shadow-md transition-shadow group">
                                            <CardContent className="p-4 flex items-center gap-4">
                                                <Avatar className="h-12 w-12 border-2 border-teal-50">
                                                    <AvatarFallback className="bg-teal-100 text-teal-700 font-bold">
                                                        {ben.fullName.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-teal-600 transition-colors">
                                                        {ben.fullName}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground truncate">{ben.location.sector}, {ben.location.district}</p>
                                                    <Badge variant="secondary" className="mt-2 text-[10px] bg-teal-50 text-teal-700 hover:bg-teal-100">
                                                        {ben.program.name.en}
                                                    </Badge>
                                                </div>
                                                <Button size="icon" variant="ghost" className="shrink-0" asChild>
                                                    <Link to={`/admin/beneficiaries?search=${encodeURIComponent(ben.fullName)}`}>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Programs Section */}
                    {results.programs.length > 0 && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 border-b pb-2">
                                <FolderKanban className="w-5 h-5 text-teal-600" />
                                <h2 className="text-xl font-bold text-teal-950 dark:text-white">Programs ({results.programs.length})</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                {results.programs.map(prog => (
                                    <motion.div key={prog.id} variants={item}>
                                        <Card className="overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="h-24 bg-teal-800 relative">
                                                {prog.coverImage && (
                                                    <img src={prog.coverImage} className="w-full h-full object-cover opacity-50" alt="" />
                                                )}
                                                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                                    <Badge className="w-fit mb-1">{prog.category}</Badge>
                                                    <h4 className="text-white font-bold truncate">{prog.name.en}</h4>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                                    {prog.description.en}
                                                </p>
                                                <Button variant="outline" size="sm" className="w-full" asChild>
                                                    <Link to="/admin/programs" className="flex items-center justify-center gap-2">
                                                        Manage Program <ExternalLink className="w-3 h-3" />
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Donors Section */}
                    {results.donors.length > 0 && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 border-b pb-2">
                                <Heart className="w-5 h-5 text-teal-600" />
                                <h2 className="text-xl font-bold text-teal-950 dark:text-white">Donors ({results.donors.length})</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {results.donors.map(donor => (
                                    <motion.div key={donor.id} variants={item}>
                                        <Card className="hover:shadow-md transition-shadow">
                                            <CardContent className="p-4 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center">
                                                    <Heart className="w-5 h-5 text-sand-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold truncate">{donor.fullName}</h4>
                                                    <p className="text-xs text-muted-foreground">{donor.country}</p>
                                                </div>
                                                <Button size="sm" variant="outline" asChild>
                                                    <Link to="/admin/donors">Profile</Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Staff Section */}
                    {results.staff.length > 0 && (
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 border-b pb-2">
                                <User className="w-5 h-5 text-teal-600" />
                                <h2 className="text-xl font-bold text-teal-950 dark:text-white">Staff & Team ({results.staff.length})</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {results.staff.map(staff => (
                                    <motion.div key={staff.id} variants={item}>
                                        <Card className="hover:shadow-md transition-shadow">
                                            <CardContent className="p-4 flex items-center gap-4">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback className="bg-slate-100 text-slate-700">
                                                        {staff.fullName.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold truncate text-sm">{staff.fullName}</h4>
                                                    <p className="text-[11px] text-teal-600 font-medium">{staff.role}</p>
                                                </div>
                                                <Badge variant="outline" className="text-[10px]">{staff.department}</Badge>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}
                </motion.div>
            )}
        </div>
    );
}
