import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Plus,
  FileText,
  UserCheck,
  UserX
} from 'lucide-react';
import { mockBeneficiaries, mockPrograms } from '@/lib/mock-data';
import { BeneficiaryStatus, Program } from '@/lib/types';
import { toast } from 'sonner';

export function BeneficiariesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [programFilter, setProgramFilter] = useState<string>('all');

  // Sync state with URL params
  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  // Filtering logic
  const filteredBeneficiaries = mockBeneficiaries.filter(beneficiary => {
    const matchesSearch = beneficiary.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beneficiary.location.district.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || beneficiary.status === statusFilter;
    const matchesProgram = programFilter === 'all' || beneficiary.program.id === programFilter;

    return matchesSearch && matchesStatus && matchesProgram;
  });

  const handleExport = () => {
    toast.success("Exporting beneficiary data to CSV...");
    // Mock export
  };

  const handleStatusChange = (id: string, newStatus: BeneficiaryStatus) => {
    toast.success(`Updated status for beneficiary ${id} to ${newStatus}`);
    // In a real app, this would call an API
  };

  const formatDate = (date: Date) => {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8 pt-2">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Beneficiaries</h1>
          <p className="text-teal-600 dark:text-teal-400 text-xs font-black uppercase tracking-widest mt-1">Management Portal</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl font-bold border-slate-200 hover:bg-slate-50"
          onClick={handleExport}
        >
          <Download className="w-3.5 h-3.5 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Filters and Search - Professional Redesign */}
      <div className="flex flex-col lg:flex-row gap-4 p-2 bg-slate-50/50 dark:bg-slate-900/30 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xl shadow-sm">
        <div className="flex-1">
          <Input
            placeholder="Search by name, district, or phone..."
            className="h-12 bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800/50 rounded-2xl focus-visible:ring-4 focus-visible:ring-teal-500/10 focus-visible:border-teal-500/50 transition-all font-bold text-sm px-6 shadow-sm placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] h-12 rounded-2xl bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800/50 focus:ring-4 focus:ring-teal-500/10 shadow-sm transition-all px-4">
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                <Filter className="h-3.5 w-3.5 text-teal-600" />
                <SelectValue placeholder="Status" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-slate-100 shadow-2xl">
              <SelectItem value="all" className="font-bold text-xs py-2.5">All Statuses</SelectItem>
              <SelectItem value={BeneficiaryStatus.ACTIVE} className="font-bold text-xs py-2.5">Active</SelectItem>
              <SelectItem value={BeneficiaryStatus.GRADUATED} className="font-bold text-xs py-2.5">Graduated</SelectItem>
              <SelectItem value={BeneficiaryStatus.INACTIVE} className="font-bold text-xs py-2.5">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="h-12 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-teal-600/20 transition-all active:scale-95 gap-2"
            onClick={() => navigate('/admin/beneficiaries/add')}
          >
            <Plus size={16} strokeWidth={3} />
            Add New
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
            <TableRow className="border-slate-200 dark:border-slate-800 hover:bg-transparent">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Name</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Program</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Location</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Enrollment</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Status</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Last Tracking</TableHead>
              <TableHead className="text-right font-semibold text-slate-900 dark:text-slate-200">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBeneficiaries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center text-muted-foreground">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Search className="h-8 w-8 text-slate-300" />
                    <p>No beneficiaries found matching your criteria.</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredBeneficiaries.map((beneficiary) => (
                <TableRow key={beneficiary.id} className="hover:bg-teal-50/30 dark:hover:bg-teal-900/10 transition-colors border-slate-100 dark:border-slate-800">
                  <TableCell>
                    <Avatar className="h-9 w-9 border border-gray-200">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-teal-100 text-teal-800 text-xs">
                        {beneficiary.fullName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium text-teal-900">
                    {beneficiary.fullName}
                    <div className="text-xs text-gray-500 font-normal">{beneficiary.user.phone}</div>
                  </TableCell>
                  <TableCell>{beneficiary.program.name.en}</TableCell>
                  <TableCell>
                    <span className="capitalize">{beneficiary.location.district}</span>
                    <span className="text-xs text-gray-400 ml-1">({beneficiary.location.sector})</span>
                  </TableCell>
                  <TableCell>{formatDate(beneficiary.enrollmentDate)}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        beneficiary.status === BeneficiaryStatus.ACTIVE ? 'bg-green-50 text-green-700 border-green-200' :
                          beneficiary.status === BeneficiaryStatus.GRADUATED ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            'bg-gray-50 text-gray-700 border-gray-200'
                      }
                    >
                      {beneficiary.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {beneficiary.lastTrackingDate ? formatDate(beneficiary.lastTrackingDate) : 'Never'}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(beneficiary.id)}>
                          Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCheck className="mr-2 h-4 w-4" /> Verify Progress
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleStatusChange(beneficiary.id, BeneficiaryStatus.INACTIVE)}
                        >
                          <UserX className="mr-2 h-4 w-4" /> Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-xs text-gray-500 text-center">
        Showing {filteredBeneficiaries.length} of {mockBeneficiaries.length} records
      </div>
    </div>
  );
}