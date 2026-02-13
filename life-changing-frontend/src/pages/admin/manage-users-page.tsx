import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    Plus,
    UserCheck,
    Mail,
    Phone,
    Shield,
    UserCog,
    Trash2,
    Edit,
    Power,
    CheckCircle2,
    Users,
    SearchIcon,
    ChevronRight,
    Eye,
    Calendar,
    Globe,
    AlertCircle,
    Heart,
    MoreHorizontal
} from 'lucide-react';
import { mockUsers } from '@/lib/mock-data';
import { User, UserType, Language } from '@/lib/types';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { StatsCard } from '@/components/stats-card';
import { cn } from '@/components/ui/utils';

export function ManageUsersPage() {
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    // Modal Visibility States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Context User States
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    // Form states for Add/Edit
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        userType: UserType.BENEFICIARY,
        isActive: true,
    });

    const resetForm = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            userType: UserType.BENEFICIARY,
            isActive: true,
        });
        setSelectedUser(null);
    };

    useEffect(() => {
        if (selectedUser && (isEditModalOpen || isRoleModalOpen)) {
            setFormData({
                fullName: selectedUser.fullName,
                email: selectedUser.email || '',
                phone: selectedUser.phone,
                userType: selectedUser.userType,
                isActive: selectedUser.isActive,
            });
        }
    }, [selectedUser, isEditModalOpen, isRoleModalOpen]);

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch =
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            user.phone.includes(searchTerm);

        const matchesRole = roleFilter === 'all' || user.userType === roleFilter;
        const matchesStatus =
            statusFilter === 'all' ||
            (statusFilter === 'active' && user.isActive) ||
            (statusFilter === 'inactive' && !user.isActive);

        return matchesSearch && matchesRole && matchesStatus;
    });

    const handleCreateUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone) {
            toast.error('Required fields missing');
            return;
        }

        const newUser: User = {
            id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
            fullName: formData.fullName,
            email: formData.email || null,
            phone: formData.phone,
            userType: formData.userType,
            isActive: formData.isActive,
            language: Language.EN,
            isVerified: true,
            verificationToken: null,
            verifiedAt: new Date(),
            resetPasswordToken: null,
            resetPasswordExpires: null,
            offlineSyncToken: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            lastLoginAt: null,
        };

        setUsers([newUser, ...users]);
        setIsAddModalOpen(false);
        resetForm();
        toast.success(`Registered ${newUser.fullName}`);
    };

    const handleUpdateUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUser) return;

        const updatedUsers = users.map(u =>
            u.id === selectedUser.id
                ? {
                    ...u,
                    fullName: formData.fullName,
                    email: formData.email || null,
                    phone: formData.phone,
                    userType: formData.userType,
                    isActive: formData.isActive,
                    updatedAt: new Date()
                }
                : u
        );

        setUsers(updatedUsers);
        setIsEditModalOpen(false);
        setIsRoleModalOpen(false);
        setSelectedUser(null);
        toast.success(`Identity synchronized`);
    };

    const toggleUserStatus = (id: string) => {
        const updatedUsers = users.map(u =>
            u.id === id ? { ...u, isActive: !u.isActive, updatedAt: new Date() } : u
        );
        setUsers(updatedUsers);
        const user = users.find(u => u.id === id);
        toast.success(`${user?.fullName} status updated`);
    };

    const handleDeleteUser = () => {
        if (!selectedUser) return;
        setUsers(users.filter(u => u.id !== selectedUser.id));
        setIsDeleteModalOpen(false);
        setSelectedUser(null);
        toast.success('Record purged');
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date(date));
    };

    const getRoleBadgeStyle = (role: UserType) => {
        switch (role) {
            case UserType.ADMIN: return 'bg-indigo-50/80 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400';
            case UserType.DONOR: return 'bg-blue-50/80 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
            case UserType.BENEFICIARY: return 'bg-teal-50/80 text-teal-700 border-teal-100 dark:bg-teal-900/30 dark:text-teal-400';
            default: return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
        }
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Minimal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Manage Users</h1>
                    <p className="text-slate-500 text-sm font-medium">Control system access and user classifications</p>
                </div>
                <Dialog open={isAddModalOpen} onOpenChange={(open) => { setIsAddModalOpen(open); if (!open) resetForm(); }}>
                    <DialogTrigger asChild>
                        <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm h-11 px-6 rounded-lg shadow-sm flex items-center gap-2 transition-all active:scale-95">
                            <Plus size={18} />
                            Add User
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[380px] p-0 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden bg-white dark:bg-slate-950">
                        <div className="px-6 py-5 border-b border-slate-50 dark:border-slate-900 bg-slate-50/30">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                                    <Plus size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <DialogTitle className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">New Entry</DialogTitle>
                                    <DialogDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Registry Initialization</DialogDescription>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleCreateUser} className="p-6 pt-5 space-y-4">
                            <div className="space-y-1.5">
                                <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Identity Name</Label>
                                <Input
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    placeholder="Enter legal name"
                                    className="h-10 rounded-xl border-slate-100 bg-slate-50/50 focus:ring-slate-900 transition-all font-bold text-xs"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Phone Link</Label>
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="+000 000 000"
                                        className="h-10 rounded-xl border-slate-100 bg-slate-50/50 font-bold text-xs"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Class</Label>
                                    <Select value={formData.userType} onValueChange={(val) => handleInputChange('userType', val)}>
                                        <SelectTrigger className="h-10 rounded-xl border-slate-100 bg-slate-50/50 font-black text-[10px] uppercase tracking-wider">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-slate-100">
                                            <SelectItem value={UserType.ADMIN} className="text-[10px] font-black uppercase tracking-wider">Admin</SelectItem>
                                            <SelectItem value={UserType.DONOR} className="text-[10px] font-black uppercase tracking-wider">Donor</SelectItem>
                                            <SelectItem value={UserType.BENEFICIARY} className="text-[10px] font-black uppercase tracking-wider">Beneficiary</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Endpoint</Label>
                                <Input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder="identity@lceo.org"
                                    className="h-10 rounded-xl border-slate-100 bg-slate-50/50 font-bold text-xs"
                                />
                            </div>
                            <div className="pt-2 flex flex-col gap-2">
                                <Button type="submit" className="w-full h-10 bg-slate-950 hover:bg-black text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95">
                                    Propagate Entry
                                </Button>
                                <Button type="button" variant="ghost" className="w-full h-9 text-[9px] font-black uppercase tracking-widest text-slate-400" onClick={() => setIsAddModalOpen(false)}>
                                    Discard Mapping
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Compact Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard title="Total Users" value={users.length} icon={Users} className="rounded-2xl border-slate-100 dark:border-slate-800 shadow-sm" />
                <StatsCard title="Admins" value={users.filter(u => u.userType === UserType.ADMIN).length} icon={Shield} className="rounded-2xl border-slate-100 shadow-sm" />
                <StatsCard title="Donors" value={users.filter(u => u.userType === UserType.DONOR).length} icon={Heart} className="rounded-2xl border-slate-100 shadow-sm" />
                <StatsCard title="Beneficiaries" value={users.filter(u => u.userType === UserType.BENEFICIARY).length} icon={UserCheck} className="rounded-2xl border-slate-100 shadow-sm" />
            </div>

            {/* Filter/Search Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="relative flex-1 w-full group">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search by name, email or phone..."
                        className="h-10 pl-11 pr-4 bg-slate-50/50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-xl font-medium focus:ring-slate-900"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Select value={roleFilter} onValueChange={setRoleFilter}>
                        <SelectTrigger className="w-full md:w-40 h-10 border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950 font-medium">
                            <SelectValue placeholder="All Roles" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100">
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value={UserType.ADMIN}>Admin</SelectItem>
                            <SelectItem value={UserType.DONOR}>Donor</SelectItem>
                            <SelectItem value={UserType.BENEFICIARY}>Beneficiary</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full md:w-40 h-10 border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950 font-medium">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100">
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Clean Professional Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800">
                                <TableHead className="w-16 px-6 py-4"></TableHead>
                                <TableHead className="py-4 font-bold text-xs uppercase text-slate-400 tracking-wider">User Profile</TableHead>
                                <TableHead className="py-4 font-bold text-xs uppercase text-slate-400 tracking-wider">Role</TableHead>
                                <TableHead className="py-4 font-bold text-xs uppercase text-slate-400 tracking-wider">Contact</TableHead>
                                <TableHead className="py-4 font-bold text-xs uppercase text-slate-400 tracking-wider">Status</TableHead>
                                <TableHead className="text-right px-8 py-4 font-bold text-xs uppercase text-slate-400 tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <AnimatePresence mode='popLayout'>
                                {filteredUsers.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-64 text-center">
                                            <p className="text-slate-400 font-medium italic">No users found matching your search</p>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredUsers.map((user, idx) => (
                                        <motion.tr
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            key={user.id}
                                            className="group hover:bg-slate-50/30 dark:hover:bg-slate-800/20 transition-colors border-slate-50 dark:border-slate-800/50"
                                        >
                                            <TableCell className="px-6 py-3">
                                                <Avatar className="h-10 w-10 border-2 border-white dark:border-slate-800">
                                                    <AvatarImage src={user.profileImageUrl} />
                                                    <AvatarFallback className="text-xs font-bold bg-slate-100">{user.fullName[0]}</AvatarFallback>
                                                </Avatar>
                                            </TableCell>
                                            <TableCell className="py-3">
                                                <div className="flex flex-col">
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">{user.fullName}</p>
                                                    <p className="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5">#{user.id}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-3">
                                                <Badge variant="outline" className={cn("rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border transition-colors", getRoleBadgeStyle(user.userType))}>
                                                    {user.userType}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="py-3">
                                                <div className="flex flex-col gap-0.5">
                                                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Mail size={12} className="text-slate-400" /> {user.email || '—'}</p>
                                                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Phone size={12} className="text-slate-400" /> {user.phone}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className={cn("h-1.5 w-1.5 rounded-full", user.isActive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300")} />
                                                    <span className={cn("text-[11px] font-bold uppercase tracking-tight", user.isActive ? "text-emerald-600" : "text-slate-400")}>{user.isActive ? 'Active' : 'Suspended'}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right px-8 py-3">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-200 text-slate-500 transition-all border border-transparent shadow-sm"
                                                        title="View Details"
                                                        onClick={() => { setSelectedUser(user); setIsViewModalOpen(true); }}
                                                    >
                                                        <Eye size={14} />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-200 text-slate-500 transition-all border border-transparent shadow-sm"
                                                        title="Edit Profile"
                                                        onClick={() => { setSelectedUser(user); setIsEditModalOpen(true); }}
                                                    >
                                                        <Edit size={14} />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-200 text-slate-500 transition-all border border-transparent shadow-sm"
                                                        title="Change Role"
                                                        onClick={() => { setSelectedUser(user); setIsRoleModalOpen(true); }}
                                                    >
                                                        <UserCog size={14} />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className={cn(
                                                            "h-8 w-8 rounded-lg transition-all border shadow-sm",
                                                            user.isActive
                                                                ? "bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 text-amber-600 border-amber-100"
                                                                : "bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 text-emerald-600 border-emerald-100"
                                                        )}
                                                        title={user.isActive ? "Suspend" : "Activate"}
                                                        onClick={() => toggleUserStatus(user.id)}
                                                    >
                                                        <Power size={14} />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-8 w-8 rounded-lg bg-red-50/50 dark:bg-red-900/10 hover:bg-red-100 text-red-500 transition-all border border-red-50"
                                                        title="Delete User"
                                                        onClick={() => { setSelectedUser(user); setIsDeleteModalOpen(true); }}
                                                    >
                                                        <Trash2 size={14} />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </motion.tr>
                                    ))
                                )}
                            </AnimatePresence>
                        </TableBody>
                    </Table>
                </div>
                <div className="bg-slate-50/30 p-4 px-8 text-xs font-semibold text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <p>Showing {filteredUsers.length} total users in manifest</p>
                    <div className="flex gap-4">
                        <Button variant="ghost" disabled className="h-8 text-[10px] font-bold uppercase tracking-widest opacity-50">Prev</Button>
                        <Button variant="ghost" disabled className="h-8 text-[10px] font-bold uppercase tracking-widest opacity-50">Next</Button>
                    </div>
                </div>
            </div>

            {/* Compact Professional Modals */}

            {/* Recreated & Unified Professional Modals */}

            {/* View Profile Artifact */}
            <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
                <DialogContent className="sm:max-w-[340px] p-0 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden bg-white dark:bg-slate-950">
                    <div className="h-1 bg-slate-100 dark:bg-slate-900 w-full" />
                    <div className="p-8 text-center space-y-6">
                        <div className="relative mx-auto w-20 h-20">
                            <Avatar className="w-20 h-20 ring-4 ring-slate-50 dark:ring-slate-900 shadow-xl">
                                <AvatarImage src={selectedUser?.profileImageUrl} className="object-cover" />
                                <AvatarFallback className="text-xl font-black bg-slate-100 text-slate-900">{selectedUser?.fullName[0]}</AvatarFallback>
                            </Avatar>
                            <div className={cn("absolute bottom-0 right-1 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-950 shadow-sm", selectedUser?.isActive ? "bg-emerald-500" : "bg-slate-300")} />
                        </div>

                        <div className="space-y-1">
                            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{selectedUser?.fullName}</h2>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Class: {selectedUser?.userType}</p>
                        </div>

                        <div className="space-y-2.5 text-left pt-2">
                            {[
                                { label: 'Email Endpoint', value: selectedUser?.email || 'N/A', icon: Mail },
                                { label: 'Secure Line', value: selectedUser?.phone, icon: Phone },
                                { label: 'Registry Date', value: selectedUser ? formatDate(selectedUser.createdAt) : '--', icon: Calendar }
                            ].map((item, i) => (
                                <div key={i} className="p-3 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100/50 dark:border-slate-800/50 rounded-xl">
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5 leading-none">
                                        <item.icon size={11} className="opacity-50" /> {item.label}
                                    </p>
                                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate leading-none">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full h-10 bg-slate-950 hover:bg-black text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all" onClick={() => setIsViewModalOpen(false)}>
                            Conclude Observation
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Profile Modification Manifest */}
            <Dialog open={isEditModalOpen} onOpenChange={(open) => { setIsEditModalOpen(open); if (!open) resetForm(); }}>
                <DialogContent className="sm:max-w-[380px] p-0 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden bg-white dark:bg-slate-950">
                    <div className="px-7 py-6 border-b border-slate-50 dark:border-slate-900">
                        <DialogTitle className="text-base font-black text-slate-950 dark:text-white uppercase tracking-tight">Modify Identity</DialogTitle>
                        <DialogDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Registry Synchronization</DialogDescription>
                    </div>
                    <form onSubmit={handleUpdateUser} className="p-7 space-y-5">
                        <div className="space-y-2">
                            <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Legal Label</Label>
                            <Input
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className="h-10 rounded-xl bg-slate-50/50 border-slate-100 dark:border-slate-900 font-bold text-xs"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Secure Grid</Label>
                                <Input
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="h-10 rounded-xl bg-slate-50/50 border-slate-100 dark:border-slate-900 font-bold text-xs"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Access Status</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className={cn("h-10 w-full rounded-xl font-black text-[10px] uppercase tracking-wider border-slate-100 dark:border-slate-900 transition-all shadow-sm", formData.isActive ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-red-50 text-red-700 border-red-100")}
                                    onClick={() => handleInputChange('isActive', !formData.isActive)}
                                >
                                    {formData.isActive ? 'Active' : 'Suspended'}
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Primary Endpoint</Label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="h-10 rounded-xl bg-slate-50/50 border-slate-100 dark:border-slate-900 font-bold text-xs"
                            />
                        </div>
                        <DialogFooter className="pt-3">
                            <Button type="submit" className="w-full h-11 bg-slate-950 hover:bg-black text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] shadow-xl transition-all active:scale-95">
                                Commit Modulation
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Classification Authority Switch */}
            <Dialog open={isRoleModalOpen} onOpenChange={(open) => { setIsRoleModalOpen(open); if (!open) resetForm(); }}>
                <DialogContent className="sm:max-w-[340px] p-0 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden bg-white dark:bg-slate-950">
                    <div className="px-7 py-6 border-b border-slate-50 dark:border-slate-900 text-center">
                        <DialogTitle className="text-base font-black text-slate-950 dark:text-white uppercase tracking-tight">Classification</DialogTitle>
                        <DialogDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Authority Re-mapping</DialogDescription>
                    </div>
                    <form onSubmit={handleUpdateUser} className="p-5 space-y-2">
                        {[UserType.ADMIN, UserType.DONOR, UserType.BENEFICIARY].map((role) => (
                            <label key={role} className={cn("flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all", formData.userType === role ? "bg-slate-950 border-slate-950 shadow-2xl" : "border-slate-50 hover:border-slate-100")}>
                                <div className="flex items-center gap-3">
                                    <div className={cn("p-1.5 rounded-lg", formData.userType === role ? "bg-white/10 text-white" : "bg-slate-100 text-slate-400")}>
                                        <Shield size={12} strokeWidth={3} />
                                    </div>
                                    <span className={cn("font-black text-[10px] uppercase tracking-widest", formData.userType === role ? "text-white" : "text-slate-600 font-bold")}>{role}</span>
                                </div>
                                <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", formData.userType === role ? "border-white bg-white" : "border-slate-200")}>
                                    {formData.userType === role && <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />}
                                </div>
                                <input type="radio" className="hidden" checked={formData.userType === role} onChange={() => handleInputChange('userType', role)} />
                            </label>
                        ))}
                        <DialogFooter className="pt-4">
                            <Button type="submit" className="w-full h-11 bg-slate-950 hover:bg-black text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all">
                                Execute Override
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Destructive Purge Command */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent className="sm:max-w-[340px] p-0 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden bg-white dark:bg-slate-950">
                    <div className="p-9 text-center space-y-6">
                        <div className="mx-auto w-16 h-16 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-3xl flex items-center justify-center shadow-inner">
                            <AlertCircle size={32} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="text-lg font-black text-slate-950 dark:text-white uppercase tracking-tight">Purge Confirmation</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] leading-relaxed px-2">You are permanently shredding the profile mapping for <br /><span className="text-slate-950 dark:text-white underline underline-offset-4 decoration-red-500/50">{selectedUser?.fullName}</span>.<br />This state is irreversible.</p>
                        </div>
                        <div className="flex flex-col gap-2.5 pt-2">
                            <Button className="h-11 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-red-500/10" onClick={handleDeleteUser}>Confirm Shredding</Button>
                            <Button variant="ghost" className="h-10 font-black text-[9px] uppercase tracking-widest text-slate-400 hover:text-slate-600" onClick={() => setIsDeleteModalOpen(false)}>Abort Command</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
