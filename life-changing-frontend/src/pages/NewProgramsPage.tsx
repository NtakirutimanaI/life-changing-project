import { Plus, Search, MoreVertical, Users, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { mockPrograms } from '../lib/mock-data';
import { ProgramCategory, ProgramStatus } from '../lib/types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth-context';
import { UserType } from '../lib/types';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function ProgramsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  // Check if we're in admin context
  const isAdminContext = location.pathname.startsWith('/admin');
  const canManagePrograms = user?.userType === UserType.ADMIN && isAdminContext;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  const getCategoryColor = (category: ProgramCategory) => {
    const colors = {
      [ProgramCategory.EDUCATION]: 'bg-blue-100 text-blue-700 border-blue-200',
      [ProgramCategory.ENTREPRENEURSHIP]: 'bg-green-100 text-green-700 border-green-200',
      [ProgramCategory.HEALTH]: 'bg-pink-100 text-pink-700 border-pink-200',
      [ProgramCategory.CROSS_CUTTING]: 'bg-purple-100 text-purple-700 border-purple-200',
    };
    return colors[category];
  };

  const getStatusBadge = (status: ProgramStatus) => {
    const variants = {
      [ProgramStatus.PLANNING]: 'bg-yellow-100 text-yellow-700',
      [ProgramStatus.ACTIVE]: 'bg-green-100 text-green-700',
      [ProgramStatus.COMPLETED]: 'bg-blue-100 text-blue-700',
      [ProgramStatus.ARCHIVED]: 'bg-gray-100 text-gray-700',
    };
    return variants[status];
  };

  return (
    <div className="space-y-10 pb-20 pt-10">
      {/* Main Content with proper margins */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Programs</h1>
            <p className="text-muted-foreground">
              Manage LCEO programs and track their impact
            </p>
          </div>
          {canManagePrograms && (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => setCreateDialogOpen(true)}>
              <Plus className="w-4 h-4" />
              Create Program
            </Button>
          )}
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search programs..." className="pl-9" />
            </div>
          </CardContent>
        </Card>

        {/* Program Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Programs</p>
                  <div className="text-2xl font-bold text-primary">
                    {mockPrograms.filter(p => p.status === ProgramStatus.ACTIVE).length}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
                  <div className="text-2xl font-bold text-foreground">
                    {formatCurrency(mockPrograms.reduce((sum, p) => sum + p.budget, 0))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Funds Utilized</p>
                  <div className="text-2xl font-bold text-foreground">
                    {formatCurrency(mockPrograms.reduce((sum, p) => sum + p.fundsUtilized, 0))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mockPrograms.map((program) => {
            const target = program.kpiTargets?.graduates || program.kpiTargets?.peopleReached || 100;
            const current = 65;
            const beneficiaryProgress = (current / target) * 100;
            const budgetProgress = (program.fundsUtilized / program.budget) * 100;

            return (
              <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-slate-200/60 dark:border-slate-800 flex flex-col h-full bg-white dark:bg-slate-900/50">
                {/* Compact Image Header */}
                {program.coverImage && (
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={program.coverImage}
                      alt={program.name.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <Badge className={`${getCategoryColor(program.category)} text-[9px] h-5 px-2 font-black uppercase tracking-wider border-none shadow-sm`}>
                        {program.category}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardHeader className="p-4 pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${program.status === ProgramStatus.ACTIVE ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[1px]">{program.status}</span>
                      </div>
                      <CardTitle className="text-[15px] font-black text-slate-900 dark:text-white leading-tight line-clamp-1 group-hover:text-teal-600 transition-colors">
                        {program.name.en}
                      </CardTitle>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                          <MoreVertical className="w-4 h-4 text-slate-400" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44 p-1 rounded-xl shadow-xl border-slate-200/60">
                        <DropdownMenuItem className="font-bold text-[11px] rounded-lg cursor-pointer" onClick={() => navigate(`/programs/${program.id}`)}>
                          <Search className="w-3.5 h-3.5 mr-2 opacity-50" /> View Analytics
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-bold text-[11px] rounded-lg cursor-pointer">
                          <Plus className="w-3.5 h-3.5 mr-2 opacity-50" /> Update Data
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive font-bold text-[11px] rounded-lg cursor-pointer">
                          Archive Program
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-1 flex-1 flex flex-col">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {program.description.en}
                  </p>

                  <div className="mt-auto space-y-3.5">
                    {/* Compact Meta Grid */}
                    <div className="grid grid-cols-2 gap-4 border-y border-slate-50 dark:border-slate-800/50 py-3">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">Reach</span>
                        <span className="text-[11px] font-black text-slate-800 dark:text-slate-200">{current} <span className="text-slate-400 font-bold">/ {target}</span></span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">Budget</span>
                        <span className="text-[11px] font-black text-slate-800 dark:text-slate-200">{Math.round(budgetProgress)}% <span className="text-slate-400 font-bold">Used</span></span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <div className="flex items-center justify-between text-[10px] mb-1.5">
                        <span className="font-black text-teal-600 uppercase tracking-widest">Efficiency</span>
                        <span className="font-black text-slate-400">85%</span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-500 rounded-full opacity-70 shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all duration-1000"
                          style={{ width: `85%` }}
                        ></div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-8 text-[10px] font-black uppercase tracking-[1.5px] border-slate-100 dark:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all rounded-lg mt-2"
                      onClick={() => navigate(`/programs/${program.id}`)}
                    >
                      Management Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Create Program Dialog */}
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Program</DialogTitle>
              <DialogDescription>
                Add a new program to the LCEO system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="cross_cutting">Cross-Cutting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget">Budget</Label>
                <Input id="budget" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fundsUtilized">Funds Utilized</Label>
                <Input id="fundsUtilized" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" className="col-span-3" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}