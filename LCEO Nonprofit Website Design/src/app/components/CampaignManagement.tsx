import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Progress } from '@/app/components/ui/progress';
import {
    AreaChart, Wallet, Plus, Edit, Trash2, Calendar,
    MapPin, Image as ImageIcon, TrendingUp, CheckCircle, Clock
} from 'lucide-react';
import { toast } from 'sonner';

export function CampaignManagement() {
    const [campaigns, setCampaigns] = useState([
        {
            id: 1,
            title: "Water for Life",
            category: "Water",
            goal: 450000,
            raised: 401960,
            status: "Active",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600",
            desc: "Providing clean, safe drinking water to remote villages."
        },
        {
            id: 2,
            title: "School Construction",
            category: "Education",
            goal: 250000,
            raised: 201960,
            status: "Active",
            image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600",
            desc: "Building safe classrooms where children can learn, grow, and dream."
        },
        {
            id: 3,
            title: "General Healthcare",
            category: "Healthcare",
            goal: 550000,
            raised: 320960,
            status: "Paused",
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600",
            desc: "Delivering essential medical supplies and care to those in need."
        }
    ]);

    const handleDelete = (id: number) => {
        setCampaigns(campaigns.filter(c => c.id !== id));
        toast.success('Campaign deleted successfully');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Paused': return 'bg-yellow-100 text-yellow-800';
            case 'Completed': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Campaign Management</h2>
                    <p className="text-sm text-gray-600">Create and monitor fundraising campaigns</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            New Campaign
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Create New Campaign</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Campaign Title</Label>
                                    <Input id="title" placeholder="e.g. Clean Water Initiative" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="water">Water</SelectItem>
                                            <SelectItem value="education">Education</SelectItem>
                                            <SelectItem value="healthcare">Healthcare</SelectItem>
                                            <SelectItem value="sanitation">Sanitation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="desc">Description</Label>
                                <Textarea id="desc" placeholder="Describe the campaign goals..." rows={3} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="goal">Goal Amount ($)</Label>
                                    <Input id="goal" type="number" placeholder="50000" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="image">Image URL</Label>
                                    <Input id="image" placeholder="Unsplash URL" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <Button type="button" variant="outline">Cancel</Button>
                                <Button type="button">Create Campaign</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden">
                        <div className="h-40 relative">
                            <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                            <Badge className={`absolute top-2 right-2 ${getStatusColor(campaign.status)}`}>
                                {campaign.status}
                            </Badge>
                        </div>
                        <CardContent className="p-5">
                            <h3 className="font-bold text-lg mb-1">{campaign.title}</h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">{campaign.desc}</p>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-600 font-medium">Progress</span>
                                        <span className="font-bold text-primary">
                                            {Math.round((campaign.raised / campaign.goal) * 100)}%
                                        </span>
                                    </div>
                                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-black">Raised</span>
                                        <span className="text-sm font-bold text-accent">${campaign.raised.toLocaleString()}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] text-gray-400 uppercase font-black">Goal</span>
                                        <span className="text-sm font-bold text-gray-600">${campaign.goal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Edit className="w-3 h-3 mr-1" /> Edit
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                        onClick={() => handleDelete(campaign.id)}
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
