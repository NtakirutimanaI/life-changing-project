import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // Assuming react-router or similar, but based on Header it uses onNavigate prop page string.
// Actually, looking at Header props: currentPage: string; onNavigate: (page: string) => void;
// It seems to be a custom routing or state-based routing.
// Let's implement it compatible with that.

import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Search, ArrowRight } from 'lucide-react';

interface SearchPageProps {
    initialQuery?: string;
    onNavigate: (page: string) => void;
}

export function SearchPage({ initialQuery = '', onNavigate }: SearchPageProps) {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<any[]>([]);

    // Dummy data for search
    const allContent = [
        { type: 'Page', title: 'About Us', description: 'Learn about our mission and vision.', link: 'about' },
        { type: 'Page', title: 'How We Work', description: 'Our holistic approach to community development.', link: 'how-we-work' },
        { type: 'Program', title: 'IkiraroBiz', description: 'Skill development and entrepreneurship program.', link: 'how-we-work' },
        { type: 'Program', title: 'School Retention', description: 'Keeping girls in school through support.', link: 'how-we-work' },
        { type: 'Story', title: 'Grace\'s Journey', description: 'From struggles to success: a beneficiary story.', link: 'impact' },
        { type: 'Report', title: 'Annual Report 2025', description: 'Financials and impact summary for the year.', link: 'resources' },
        { type: 'Event', title: 'Community Gala', description: 'Join us for our annual fundraising gala.', link: 'news' },
    ];

    useEffect(() => {
        if (query) {
            const lowerQuery = query.toLowerCase();
            const filtered = allContent.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is already handled by effect, but this prevents form submission reload
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold font-heading mb-8">Search Results</h1>

                <form onSubmit={handleSearch} className="flex gap-4 mb-8">
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for programs, stories, reports..."
                        className="flex-1 text-lg py-6"
                        autoFocus
                    />
                    <Button type="submit" className="px-8" size="lg">
                        <Search className="mr-2" size={20} />
                        Search
                    </Button>
                </form>

                <div className="space-y-4">
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate(result.link)}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-2">
                                                {result.type}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary">
                                                {result.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {result.description}
                                            </p>
                                        </div>
                                        <ArrowRight className="text-gray-400" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        query && (
                            <div className="text-center py-12 bg-white rounded-lg border border-dashed">
                                <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900">No results found</h3>
                                <p className="text-gray-500">Try adjusting your search terms.</p>
                            </div>
                        )
                    )}

                    {!query && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Enter a keyword to start searching.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
